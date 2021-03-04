import React from 'react'
import {Avatar} from "@material-ui/core" 
import "./SingleStory.css"

const SingleStory = ({img,profilePic,title}) => {
    return (
        <div className="SingleStory" style={{background:`url(${img})`}}>
            <Avatar src={profilePic}/>
            <p style={{color:"white"}}>{title}</p>
        </div>
    )
}

export default SingleStory
