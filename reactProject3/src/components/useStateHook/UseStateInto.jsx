import React, { useState } from 'react'

const UseStateInto = () => {
    // let name =useState("Navaz")
    // console.log(name[0]);
    // console.log(name[1]);
    // let [state,setState]=useState("Na")

    // let handler =()=>{
    //     setState("navaz")
    //     console.log(setState);
    // }
    let [name,reName]=useState("na")
  return (
    <div>
        {/* <h1>my name is :{state}</h1>
        <button  onClick={handler}>Rename</button>  */}
        <h1>my name is :{name}</h1>
        {/* <button onClick={()=>  >Rename</button> */}
    </div>
  )
}

export default UseStateInto