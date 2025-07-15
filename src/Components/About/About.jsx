import React from 'react'
import './About.css'
import heroImage from '../../assets/heroImage.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={heroImage} alt="Profile Image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a UI/UX designer focused on creating intuitive and visually engaging digital experiences. I combine user research, clean design, and thoughtful interaction to turn ideas into usable products.</p>
            <p>With experience across web, mobile, and wearable platforms, I bring simplicity, clarity, and empathy to every project I touch.</p>
          </div>
          {/* <div className="about skills">
            <div className="about-skill">
                <p>User Research</p><hr style={{width: "80px"}} />
            </div>
            <div className="about-skill">
                <p>UI Design</p><hr style={{width: "90px"}} />
            </div>
            <div className="about-skill">
                <p>User Experience</p><hr style={{width: "98px"}} />
            </div>
            <div className="about-skill">
                <p>Frontend Development</p><hr style={{width: "40px"}} />
            </div>
          </div> */}
          <div className="about-achievements">
            <div className="about-achievement"><h1>2+</h1><p>YEARS OF EXPERIENCE</p></div>
            {/* <hr /> */}
            <div className="about-achievement"><h1>10+</h1><p>PROJECTS COMPLETED</p></div>
            {/* <hr /> */}
            <div className="about-achievement"><h1>15+</h1><p>HAPPY CLIENTS</p></div>
          </div>
    </div>
  </div>

    </div>
  )
}

export default About