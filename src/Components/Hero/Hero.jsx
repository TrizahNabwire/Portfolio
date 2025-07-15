import React from 'react'
import './Hero.css'
import heroImage from '../../assets/heroImage.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      
      <h1><span>I'm Trizah Nabwire</span> UI/UX Designer based in Kenya</h1>
      <p>I am a UI/UX Designer from Nairobi, Kenya with 3 years of working experience</p>
      <div className="hero-action">
        <button className='hero-connect'>Connect With Me</button>
        <button className='hero-resume'>My Resume</button>
      </div>
      <img src={heroImage} alt='Hero Image' />

    </div>
  )
}

export default Hero