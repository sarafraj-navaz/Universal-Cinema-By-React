import React, { useState } from 'react'

const HandleArray = () => {
    let [names,setList]=useState(["Suhail","Dube","Navaz","Nehal"])
    console.log(names);
  return (
    <div>
        <h1>my name is :{names.map((value,index) =>{
            return(
                <div key={index}>
                    <h1>my name is :{value}</h1>
                </div>
            )
        })}</h1>
    </div>
  )
}

export default HandleArray