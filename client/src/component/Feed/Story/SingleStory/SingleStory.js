import React,{useState} from 'react'
import {Avatar} from "@material-ui/core" 
import "./SingleStory.css"


const SingleStory = ({img,profilePic,title,addStory}) => {
    const [file,setFile]=useState("")
    return (
        <>
        {!addStory ? <div className="SingleStory" style={{background:`url(${img})`}}>
            <Avatar src={profilePic} className="Story__avatar"/>
            <h4 >{title}</h4>
        </div>:<div className="SingleStory">
              
                
            </div>}
        </>
    )
}

export default SingleStory
