import React, { createContext, useState } from 'react'

export let exportables =createContext();
import universalImg from "../../../assets/images/universal_image.png"
import rotateImg from "../../../assets/images/rotate.gif"
const MyContext = ({children}) => {
    const [image ,setImage] =useState({
        universalImg,rotateImg
    })
  return (
    <div>
        <exportables.Provider value={image}>{children}</exportables.Provider>
    </div>
  )
}

export default MyContext