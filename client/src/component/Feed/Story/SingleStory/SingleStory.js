import React from 'react'
import {Avatar} from "@material-ui/core" 


const SingleStory = ({img,profilePic,title}) => {
    return (
        <div style={{background:`url(${img})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <Avatar src={profilePic}/>
            <p style={{color:"white"}}>{title}</p>
        </div>
    )
}

export default SingleStory
