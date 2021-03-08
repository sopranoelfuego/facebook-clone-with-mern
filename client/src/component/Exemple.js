import React,{useEffect} from 'react'
import axios from "axios"
var filename="image-1615174508031.jpg"
const img =""

const Exemple = () => {

    // useEffect(()=>{
    //    filename= updateImage()
    // },[])
    const arrayBufferTobase64=(buffer)=>{
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);

    }    
    return (
        <div>
            hello this is exemple
        </div>
    )
}

export default Exemple
