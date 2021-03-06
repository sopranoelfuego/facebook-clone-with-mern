import mongoose from "mongoose"


const postModel =mongoose.Schema({
    id:String,
    text:String
})

 export default mongoose.model("Post",postModel)