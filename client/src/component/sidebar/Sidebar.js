import React from 'react'
import {LocalHospital,EmojiFlags,People,Chat,Storefront,VideoLibrary,ExpandMoreOutlined } from "@material-ui/icons"
import Sidebarow from "./sidebarow/Sidebarow"

const Sidebar = () => {
    return (
        <div>
            <Sidebarow src="https://scontent.fbjm1-1.fna.fbcdn.net/v/t1.0-9/44339331_2516636145229442_7134310788872798208_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=t_50ioFoIukAX9YrOhk&_nc_ht=scontent.fbjm1-1.fna&oh=a32baa737f3663c6f2c4ff893a7c485d&oe=60649995" title="umugesera"/>
            <Sidebarow Icon={LocalHospital} title="covid-19 informations"/>
            <Sidebarow Icon={EmojiFlags} title="pages"/>
            <Sidebarow Icon={People} title="friends"/>
            <Sidebarow Icon={Chat} title="messenger"/>
            <Sidebarow Icon={Storefront} title="market place"/>
            <Sidebarow Icon={VideoLibrary} title="video"/>
            <Sidebarow Icon={ExpandMoreOutlined} title="more"/>
        </div>
    )
}

export default Sidebar
