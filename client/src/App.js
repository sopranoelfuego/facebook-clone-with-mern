import React from 'react'
import Header from "./component/header/Header"
import Sidebar from "./component/sidebar/Sidebar"
import Feed from "./component/Feed/Feed"
import "./App.css"

const App = () => {
  return (
    <div className="App">
        <Header/>
        <div style={{display:"flex"}}>
        <Sidebar/>
        <Feed/>
        </div>
    </div>
  )
}

export default App
