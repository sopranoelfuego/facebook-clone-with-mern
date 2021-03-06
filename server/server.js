import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser  from "body-parser"
import multer  from "multer"
import path  from "path"
// import pusher from " pusher"
import {URI} from "./config/index.js"

import Grid from "gridfs-stream"
import GridFsStorage  from "multer-gridfs-storage"

// INITIALIZING THE APP
const app=express()
Grid.mongo=mongoose.mongo

// MIDDLEWARES
const port =process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors()) 

// // DB CONFIGURATION
const con =mongoose.createConnection(URI.mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,

})
let gfs
con.once("open",()=>{
    console.log("connection succed and the URL is",URI)
    gfs=Grid(con.db,mongoose.mongo)
    gfs.collection("images")

})

const storage=new GridFsStorage(
    {
        url:URI.mongoURI,
        file:(req,file)=>{
            return new Promise((resolver,reject)=>{
                const fileName=`image-${Date.now()}${path.extname(file.originalname)}`
                const fileInfo={
                    filename:fileName,
                    bucketName:"images"
                }
                
             resolver(fileInfo)
               })
        

        }
    }
)

mongoose.connect(URI.mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> app.listen(port,()=>console.log("SUCCESS DB CONNECTED TO THE PORT",5000)))
.catch(error => console.log("ERROR CONNECTION FAILED ",error))
const upload=multer({storage})
// API(ROUTES)
app.get("/",(req,res)=>res.status(200).json({message:"welcome"}))
app.post("/", upload.single("file"), (req, res) => {
    res.status(201).send(req.file);
  });
