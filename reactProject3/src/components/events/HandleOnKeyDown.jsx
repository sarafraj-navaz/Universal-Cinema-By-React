import React, { useState } from 'react'

const HandleOnKeyDown = () => {
    let [state, setState] =useState("")
    let handleEvent =(e) =>{
        console.log(e.key);
        if (e.key =="Enter") {
            e.target.style.background="green"
            console.log("enter has pressed by navaz");
        } else if(e.key == "Shift") {
            alert("alert message :Shift pressed")
            console.error("====error*****")
        }
        setState(e.key)
    }
  return (
    <div>
        <h1>key show :{state}</h1>
        <input type='text'  onKeyDown={handleEvent}/>
    </div>
  )
}

export default HandleOnKeyDown