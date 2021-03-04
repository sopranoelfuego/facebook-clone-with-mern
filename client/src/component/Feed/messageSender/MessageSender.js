import React,{useState} from 'react'
import Avatar from "@material-ui/core/Avatar"

const MessageSender = () => {
    const[input,setInput]=useState("")
    const [file,setFile]=useState('')
   const getBackFile=(e)=>{
       if(e.target.files[0]){
                setFile(e.target.files[0])
       }
   }

   const handleSubmit=()=>{
       e.preventDefault()
   }

    return (
        <div className="MessageSender">
            <div className="MessageSende__top">
                <Avatar src="https://scontent.fbjm1-1.fna.fbcdn.net/v/t1.0-9/44339331_2516636145229442_7134310788872798208_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=t_50ioFoIukAX9YrOhk&_nc_ht=scontent.fbjm1-1.fna&oh=a32baa737f3663c6f2c4ff893a7c485d&oe=60649995"/>
                <form>

                    <label for="MessageSender__input">send</label>
                    <input type="text" placeholder="caporal chefu what is in your mind..." 
                      onChange={e => setInput(e.target.value)}

                    />
                    <label for="MessageSender__file">choose file</label>
                    <input type="file" onChange={getBackFile}/>
                </form>
            </div>
            
        </div>
    )
}

export default MessageSender
