import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index)=>{
          return <div key={index} className="service-format">
            <h3>{service.$_no}</h3>
            <h2>{service.$_name}</h2>
            <p>{service.$_desc}</p>
            <div className="services_readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow icon" />
            </div>
          </div>
        })}

      </div>

    </div>
  )
}

export default Services