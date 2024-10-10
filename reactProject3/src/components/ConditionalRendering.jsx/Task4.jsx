import React, { useState } from 'react'
import Task4Child from './Task4Child'

const Task4 = () => {
  // let [state,setState]=useState(true)
  let [state,setState]=useState(false)
  
  let handleEvent=()=>{
    setState(!state)
  }
  return (
    <div>
      {/* <Task4Child></Task4Child> or in there way */}

      {state && <Task4Child/>}
      <button onClick={handleEvent}>Click</button>
    </div>
  )
}

export default Task4