import React from 'react'
import './Navbar.css'
import logo from '../../assets/Trizah Logo.png'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const [menu,setMenu] = useState('home')
  return (
    <div className='navbar'>
        <img src={logo} alt='Logo' className='navbar-logo' />
        <ul className="nav-menu">
          <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<div className='underline'></div>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<div className='underline'></div>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<div className='underline'></div>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<div className='underline'></div>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<div className='underline'></div>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link1' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>

    </div>
  )
}

export default Navbar