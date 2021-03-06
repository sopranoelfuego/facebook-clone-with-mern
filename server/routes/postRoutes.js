import express from "express"
import {createPost,getPosts} from "../controller/post.js"


const router=express.Router()
router.post("/api/addpost",createPost)
router.get("/api/getposts",getPosts)


export default router