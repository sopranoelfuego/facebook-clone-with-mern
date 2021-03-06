import mongoose from "mongoose"


const postModel =mongoose.Schema({
    user:String,
    text:String,
    imgName:String,
    avatar:String,
    timestamp:String,

})

 export default mongoose.model("Posts",postModel)