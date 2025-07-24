import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import heroImage from '../../assets/heroImage.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <h1><span>I'm Trizah Nabwire</span> UI/UX Designer based in Kenya</h1>
      <p>I am a UI/UX Designer from Nairobi, Kenya with 3 years of working experience</p>
      <div className="hero-action">
        <button className='hero-connect'><AnchorLink className='anchor-link1' offset={50} href='#contact'>Connect With Me</AnchorLink></button>
        <button className='hero-resume'>My Resume</button>
      </div>

    </div>
  )
}

export default Hero