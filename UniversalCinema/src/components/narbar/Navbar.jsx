import React, { useContext } from 'react'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { exportables } from '../../assets/components/myContext/MyContext'

const Navbar = () => {
  let { universalImg, rotateImg } = useContext(exportables)
  return (
    <div className='sticky top-0'>
      <nav className='w-[100%] h-[15.5vh] flex bg-black justify-between'>
        <section className='w-[15%]'>
          <img src={rotateImg} alt="img not found" className='w-[7.2vw] absolute top-[-0.8vh] left-[6vw]' />
          <img src={universalImg} alt="" className='relative z-1 w-[11vw] left-[4.2vw] top-[-1vh]' />
        </section>
        <section className='w-[56.9%] flex text-white justify-between'>
          <div className='flex w-[50%] justify-between float-end items-center text-[13px]'>
            <main className=''>Movies</main>
            <main className=''>Trailers</main>
            <main className=''>News&Press</main>
            <main className='text-[5px]'>⚪⚪⚪</main>
          </div>
          <div className='w-[45%] flex justify-evenly items-center'>
            <ul className='flex gap-8 '>  
              <li><a href="https://twitter.com/?lang=en"><BsTwitterX /></a></li>
              <li><a href="https://www.facebook.com/"><BsFacebook /></a></li>
              <li><a href="https://www.instagram.com/"><IoLogoInstagram /></a></li>
              <li><a href="https://www.youtube.com/"><FaSquareYoutube /></a></li>
              <li><a href="https://www.tiktok.com/en/"><FaTiktok /></a></li>
              <li><a href="https://www.snapchat.com/"><FaSnapchat /></a></li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  )
}
export default Navbar