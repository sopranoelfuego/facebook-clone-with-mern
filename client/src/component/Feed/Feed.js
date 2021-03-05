import React from 'react'
import MessageSender from "./messageSender/MessageSender"
import Stories from "./Story/Stories"
import Post from "./Post/Post"
import "./feed.css"

const Feed = () => {
    return (
        <div className="feed">
            <Stories/>
            <MessageSender/>
            <Post 
              profilePic="https://scontent.fbjm1-1.fna.fbcdn.net/v/t1.0-9/147382502_3252376431655406_6044184046602460618_o.jpg?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_ohc=GtnjuoO9BNwAX8R4kRx&_nc_ht=scontent.fbjm1-1.fna&oh=6c5bf14fb4a3323f4a9a7ea8900b5e62&oe=6065DD2C"
              imgName=""
              timestamp=""
              username="caporal"
              message="mbega ga bsh..."
            />
            
        </div>
    )
}

export default Feed
