import React from 'react'
import MessageSender from "./messageSender/MessageSender"
import Stories from "./Story/Stories"

const Feed = () => {
    return (
        <div className="feed">
            <Stories/>
            <MessageSender/>
            
        </div>
    )
}

export default Feed
