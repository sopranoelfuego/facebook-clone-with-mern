import mongoose from "mongoose"
const Schema=mongoose.Schema
var ImgSchema = new Schema({
    img: { data: Buffer, contentType: String}
}, {
    timestamps: true
});
export default mongoose.model("Img",ImgSchema)