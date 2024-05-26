import React from 'react'
import { FaCar } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";
import '../styles/Navbarstyle.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <button className='btn'><FaCar />Auto world</button>
      <p className='offers'><CiGift  size='20px'/>Offers</p>
      <p className='contact'><MdOutlineContactPhone size='20px'/>Conatct us</p>
      <button className='signup'>signup</button>
      
    </div>
  )
}
