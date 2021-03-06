import post from "../models/Post.js"


const getPosts=(req,res)=>{
    post.find({},(err,doc)=>{
        if(err){
            res.status(500).json({isExecuted:false,error:err.message})
        }
        doc.sort((a,b)=>{
            return a.timestamp -b.timestamp
        })
        res.status(200).json({isExecuted:true,error:null})
    })   

}
const createPost=async (req,res)=>{

   const prepareDoc= await req.body
  post.createCollection(prepareDoc,(err,doc)=>{

      try {
          if(doc){
              res.status(201).json({isExecuted:true,error:null})
          }
          
      } catch (err) {
          res.status(500).json({isExecuted:false,error:err.message})
      }
   })
}

export {createPost,getPosts}