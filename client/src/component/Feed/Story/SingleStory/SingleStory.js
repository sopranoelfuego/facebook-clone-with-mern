import React from 'react'
import {Avatar} from "@material-ui/core" 
import "./SingleStory.css"

const SingleStory = ({img,profilePic,title}) => {
    return (
        <div className="SingleStory" style={{background:`url(${img})`}}>
            <Avatar src={profilePic} className="Story__avatar"/>
            <h4 >{title}</h4>
        </div>
    )
}

export default SingleStory
