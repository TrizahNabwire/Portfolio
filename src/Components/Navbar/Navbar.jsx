import React from 'react'
import './Navbar.css'
import logo from '../../assets/Trizah Logo.png'
import { useState } from 'react'

const Navbar = () => {

  const [menu,setMenu] = useState('home')
  return (
    <div className='navbar'>
        <img src={logo} alt='Logo' className='navbar-logo' />
        <ul className="nav-menu">
          <li><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<div className='underline'></div>:<></>}</li>
          <li><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"?<div className='underline'></div>:<></>}</li>
          <li><p onClick={()=>setMenu("services")}>Services</p>{menu==="services"?<div className='underline'></div>:<></>}</li>
          <li><p onClick={()=>setMenu("work")}>Portfolio</p>{menu==="work"?<div className='underline'></div>:<></>}</li>
          <li><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<div className='underline'></div>:<></>}</li>
        </ul>
        <div className="nav-connect">
          Connect With Me
        </div>

    </div>
  )
}

export default Navbar