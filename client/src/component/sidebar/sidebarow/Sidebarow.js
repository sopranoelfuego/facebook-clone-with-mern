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
            <h4>{title}</h4>

        </div>
    )
}

export default Sidebarow
