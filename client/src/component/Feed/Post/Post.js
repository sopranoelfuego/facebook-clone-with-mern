import React from 'react'
import {Avatar } from "@material-ui/core"
import moment from "moment"
import "./Post.css"
import {ThumbUp,ChatBubbleOutlined,NearMe,ExpandMoreOutlined,AccountCircle, AddCommentRounded} from "@material-ui/icons"

const Post = ({profilePic,imgName,timestamp,message,username}) => {
    return (
        <div className="post">
            {/* POST TOP */}
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__info">
                    <h4>{username}</h4>
                     <p>{moment().format("MM Do YY")}</p>
                </div>


               
            </div>
            {/* END OF POST TOP */}
            {/* POST MESSAGE */}
            <div className="post__message__image">
               <p> {message}</p>
                {/* Img */}
            </div>
            {/* POST OPTIONS */}
            <div className="post__options">
                    <div className="post__option">
                        <ThumbUp/>
                        <p>like</p>
                    </div>
                    <div className="post__option">
                            <ChatBubbleOutlined/>
                            <p>comments</p>
                    </div>
                    <div className="post__option">
                                <NearMe/>
                                <p>share</p>
                    </div>
                    
                    <div className="post__option">
                                <AddCommentRounded/>
                                <ExpandMoreOutlined/>
                    </div>
                    
                </div>
                {/* END OF POST OPTIONS */}
            
        </div>
    )
}

export default Post
