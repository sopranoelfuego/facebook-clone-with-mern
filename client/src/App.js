import React,{useState} from 'react'
import Header from "./component/header/Header"
import Sidebar from "./component/sidebar/Sidebar"
import Feed from "./component/Feed/Feed"
import Widget from "./component/Widget/Widget"
import Exemple from "./component/Exemple"
import {Switch,Route} from "react-router-dom"
import "./App.css"
import axios from "axios"



// <Switch>

//   <Route exact path="/" component={Home}/>
//   <Route exact path= component={Home}/>
// </Switch>


const App = () => {
  const [input,setInput]=useState("")
  const handleSubmit=async (e)=>{
    e.preventDefault()
  await axios.post("http://localhost:5000/",input)
  

  }
  return (
    <div className="App">
      <Switch>

         <Route exact path="/" component={Exemple}/>
      </Switch>
        {/* <Header/>
        <div style={{display:"flex"}}>
        <Sidebar/>
        <Feed/>
        <Widget/>
        
        </div>
      <Exemple/> */}
    </div>
  )
}

export default App
