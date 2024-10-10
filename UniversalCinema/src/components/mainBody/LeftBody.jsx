import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const LeftBody = () => {
  return (
    <div className='w-[74%] flex ' id='mainDivImg'>
         <div><span><FaArrowAltCircleLeft /></span></div>
        <div><span>ABOUT THE FILM</span></div>
        <div><span>GET TICKETS</span></div>
        <div><span>WATCH THE TRAILERS</span></div>
        <div><span><FaArrowAltCircleRight /></span></div>
    </div>
  )
}

export default LeftBody