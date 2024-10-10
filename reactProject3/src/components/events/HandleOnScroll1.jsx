import React from 'react'

const HandleOnScroll1 = () => {
    let body =document.body;
    let handleOnScroll=(e) =>{
        // console.log(e.target);
        e.target.style.background="olive"
        e.target.style.color="#611919"
    }
  return (
    <div>
        <p style={{width:"350px",height:"350px",background:"blue",overflow:"scroll"}} onScroll={handleOnScroll}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
            . Dolorum excepturi modi natus similique praesentium 
            quidem possimus aliquid sapiente neque molestias!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
            . Dolorum excepturi modi natus similique praesentium 
            quidem possimus aliquid sapiente neque molestias!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
            . Dolorum excepturi modi natus similique praesentium 
            quidem possimus aliquid sapiente neque molestias!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
            . Dolorum excepturi modi natus similique praesentium 
            quidem possimus aliquid sapiente neque molestias!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
            . Dolorum excepturi modi natus similique praesentium 
            quidem possimus aliquid sapiente neque molestias!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
            . Dolorum excepturi modi natus similique praesentium 
            quidem possimus aliquid sapiente neque molestias!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
            . Dolorum excepturi modi natus similique praesentium 
            quidem possimus aliquid sapiente neque molestias!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
            . Dolorum excepturi modi natus similique praesentium 
            quidem possimus aliquid sapiente neque molestias!
        </p>
    </div>
  )
}

export default HandleOnScroll1