import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./SidebarRow.css"

const Sidebarow = ({ src,Icon,title}) => {
    return (
        <div className="sidebarRow">
            {
                src && <Avatar src={src}/>
            }
            {Icon && <Icon/>}
            {title}

        </div>
    )
}

export default Sidebarow
