import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser  from "body-parser"
import multer  from "multer"
import path  from "path"
import fs from "fs"
// import pusher from " pusher"
import {URI} from "./config/index.js"
import router from "./routes/postRoutes.js"
import Grid from "gridfs-stream"
import GridFsStorage  from "multer-gridfs-storage"
import Img from "./models/image.js"


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

// initiliaze the storage with multer
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    }
});
// const upload = multer({ storage: storage });

// const storage=new GridFsStorage(
//     {
//         // 
//         url:URI.mongoURI,
//         file:(req,file)=>{
//             return new Promise((resolver,reject)=>{
//                 const fileName=`image-${Date.now()}${path.extname(file.originalname)}`
//                 const fileInfo={
//                     filename:fileName,
//                     bucketName:"images"
//                 }
                
//              resolver(fileInfo)
//                })
        

//         }
//     }
// )
// as multer is a middleware api which helps to manupilate multipart data format
// then is used here to save a file in the grid file system storage already prepared above

const upload=multer({storage})
// API(ROUTES)

app.use("/api",router)
app.post("/api/upload/image", upload.single("file"), (req, res) => {
           
       var newImage=new Img();
       newImage.img.data=fs.readFileSync(req.file.path)
       newImage.img.contentType='image/jpeg'
       newImage.save((err,doc)=>{
           if(err) res.status(500).json({message:"failed to save the image"})
           else res.status(201).json(doc)
       })

  });

  app.get("/api/upload/image",(req,res)=>{
      Img.findOne({},'img createdAt',(err,doc)=>{
          if(err)res.status(404).json({message:"image not found.."})
          res.contentType('json')
          res.send(doc)
      })
  })
//   app.get("/api/download/image",(req,res)=>{
//       gfs.files.findOne({filename:req.query.name},(err,file)=>{
//           if(err) {res.status(500).json({error:err})
//         } else{
//             if(!file || file.length === 0){
//                  res.status(404).json({isExecuted:false,error:"file not found"})
//             }else {
//                 const readStream=gfs.createReadStream(file.filename)
//                 readStream.pipe(res)
//             }
//         }
          

//       })
//   })
{/* <img src=""/> */}