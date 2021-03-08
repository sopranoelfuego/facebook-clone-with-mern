import React,{useEffect,useState} from 'react'
import axios from "axios"
var url=""



export const Exemple = () => {
    const [img,setImg]=useState({
        url:""
    })
    const recup=async()=>{
        await axios.get("http://localhost:5000/api/upload/image")
        .then((response)=>{
            const {data}=response
            var base64Flag = 'data:image/jpeg;base64,';
            var imgStr=arrayBufferTobase64(data.img.data.data)
            
                url=base64Flag + imgStr
            

            console.log("file decoded fro frontend",url)
        })
        
    }
   useEffect(()=>{
    recup()

   },[])
    const arrayBufferTobase64=(buffer)=>{
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);

    }    
    return (
        <div>
            hello this is exemple
            <img src={url} alt="image file"/>

        </div>
    )
}

    