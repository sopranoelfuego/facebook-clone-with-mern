import React,{useState} from 'react'
import {Avatar,Input,Button} from "@material-ui/core"
import "./MessageSender.css"

const MessageSender = () => {
    const[input,setInput]=useState("")
    const [file,setFile]=useState('')
   const getBackFile=(e)=>{
       if(e.target.files[0]){
                setFile(e.target.files[0])
       }
   }

   const handleSubmit=(e)=>{
       e.preventDefault()
   }

    return (
        <div className="MessageSender">
            {/* THIS IS FOR MESSAGE INPUT FILE CHOOSE AND SUBMIT */}
            <div className="MessageSender__top">
                <Avatar src="https://scontent.fbjm1-1.fna.fbcdn.net/v/t1.0-9/44339331_2516636145229442_7134310788872798208_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=t_50ioFoIukAX9YrOhk&_nc_ht=scontent.fbjm1-1.fna&oh=a32baa737f3663c6f2c4ff893a7c485d&oe=60649995"/>
                <form onSubmit={handleSubmit} className="MessageSender__top__form">

                    <div className="input__container">
                    <input type="text" placeholder="caporal chefu what is in your mind..." 
                      onChange={e => setInput(e.target.value)}

                    />
                    </div>
                    <label for="MessageSender__file" style={{paddingTop:"10px",color:"link"}}>
                       choose file
                    </label>
                    <Input type="file" onChange={getBackFile} id="MessageSender__file" style={{display:"none"}}/>
                    <Button type="submit">send</Button>
                </form>
            </div>
            {/* END OF MESSAGE */}
            {/* MEDIA BUTTONS */}
            <div className="mediaButton">


            </div>

            
        </div>
    )
}

export default MessageSender
