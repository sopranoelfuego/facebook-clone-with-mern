import React,{useState} from 'react'
import Header from "./component/header/Header"
import Sidebar from "./component/sidebar/Sidebar"
import Feed from "./component/Feed/Feed"
import Widget from "./component/Widget/Widget"
import "./App.css"
import axios from "axios"

const App = () => {
  const [input,setInput]=useState("")
  const handleSubmit=async (e)=>{
    e.preventDefault()
  await axios.post("http://localhost:5000/",input)
  

  }
  return (
    <div className="App">
        <Header/>
        <div style={{display:"flex"}}>
        <Sidebar/>
        <Feed/>
        <Widget/>
        
        </div>
    </div>
  )
}

export default App
