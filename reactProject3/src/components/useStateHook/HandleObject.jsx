import React, { useState } from 'react'

const HandleObject = () => {
    let[myObj,setMyObj]=useState({
        name:'Navaz',
        age:20,
        designation:"Developer"
    })
  return (
    <div>
        <h1>my name is {myObj.name} my age is {myObj.age} my designation {myObj.designation}</h1>
    </div>
  )
}

export default HandleObject