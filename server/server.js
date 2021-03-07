import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser  from "body-parser"
import multer  from "multer"
import path  from "path"
// import pusher from " pusher"
import {URI} from "./config/index.js"
import router from "./routes/postRoutes.js"
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

mongoose.connect(URI.mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
let gfs
con.once("open",()=>{
    app.listen(port,()=>console.log("connected succeful on port",port))
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
// as multer is a middleware api which helps to manupilate multipart data format
// then is used here to save a file in the grid file system storage already prepare above

const upload=multer({storage})
// API(ROUTES)

app.use("/api",router)
app.post("/api/upload/image", upload.single("file"), (req, res) => {
    res.status(201).send(req.file);
  });

  app.get("/api/download/image",(req,res)=>{
      gfs.files.findOne({filename:req.query.name},(err,file)=>{
          if(err) {res.status(500).json({isExecuted:false,error:err.message})
        } else{
            if(!file || file.length === 0){
                 res.status(404).json({isExecuted:false,message:"file not found..."})
            }else {
                const readStream=gfs.createReadStream(file.filename)
                readStream.pipe(res)
            }
        }
          

      })
  })
