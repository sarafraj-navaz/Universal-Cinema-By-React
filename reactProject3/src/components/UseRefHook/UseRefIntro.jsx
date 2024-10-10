import React, { useRef } from 'react'

const UseRefIntro = () => {
    let belan=useRef();
    let bat =useRef();
    let hitClick=() =>{
        // console.log(belan);
        console.log(belan.current);
        belan.current.style.background="red";
        bat.current.style.background='green'
    }

  return (
    <div>
        <div>
            <h1 onClick={hitClick}  >im tinki</h1>
            {/* <p ref={belan} style={{width:"100px",height:"100px",display:"inline-block"}}>im tinku</p> */}
            <p ref={belan}>Im tinku</p>
            <p ref={bat}>Im pinku</p>
        </div>
    </div>
  )
}

export default UseRefIntro