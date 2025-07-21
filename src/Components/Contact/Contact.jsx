import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects. Feel free to talk about your ideas, discuss potential collaborations</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt=''/><p>trizahnabwire20@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt=''/><p>+254 701402513</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt=''/><p>Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
                <form action="" className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name="email" id="" />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message' id=""></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact