import express from "express"
import {createPost,getPosts} from "../controller/post.js"


const router=express.Router()
router.get("/",(req,res)=>res.status(200).json({message:"welcome"}))
router.post("/addpost",createPost)
router.get("/getposts",getPosts)


export default router