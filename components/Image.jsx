import React from "react"
import kevinImg from "/images/kevin.png"

function Image(){
    return (
        <img src={kevinImg} 
        className="image--img"
        alt="Image of Kevin Molid smiling" />
    )
}

export default Image