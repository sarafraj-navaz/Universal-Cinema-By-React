import React from 'react'

const HandleOnClick = () => {
    let handleEvent =() =>{
        document.body.style.background="skyblue"
    }
  return (
    <div>
        <button onClick={handleEvent}>OnClick</button>
    </div>
  )
}

export default HandleOnClick