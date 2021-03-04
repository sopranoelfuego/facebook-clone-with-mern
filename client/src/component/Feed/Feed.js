import React from 'react'
import MessageSender from "./messageSender/MessageSender"
import Stories from "./Story/Stories"
import "./feed.css"

const Feed = () => {
    return (
        <div className="feed">
            <Stories/>
            <MessageSender/>
            
        </div>
    )
}

export default Feed
