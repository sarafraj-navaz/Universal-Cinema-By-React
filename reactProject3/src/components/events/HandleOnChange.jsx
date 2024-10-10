import React, { useState } from 'react'

const HandleOnChange = () => {
  let [state, setState] = useState("")
    let handleEvent =(e)=>{
        // console.log(e);
        // console.log(e.target.value);
        setState(e.target.value)
        
    }
  return (
    <div>
        <h1>Heading :{state}</h1>
        <input type='text' placeholder='Write anything' onChange={handleEvent}/>
    </div>
  )
}

export default HandleOnChange