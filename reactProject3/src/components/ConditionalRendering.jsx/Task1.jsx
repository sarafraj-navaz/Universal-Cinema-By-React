import React, { useState } from 'react'

const Task1 = () => {
    // let [state,setState]=useState(false)
    let [state,setState]=useState(true)
  return (
    <div>
        <center>{state?"Hello word":""}</center>
        {/* <center>{!state?"Hello word":""}</center> */}
    </div>
  )
}

export default Task1