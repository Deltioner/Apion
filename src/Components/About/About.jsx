import React from 'react'
import "./About.css"
import about_img from "../../assets/about.jpeg"



const About = () => {
  return (
    <div className='about' id='aboutus'>
        
        <div className="about-right">
            <h3>About Apion</h3>

            <h2>Empowering Your Business <br />
             Through Technology <br />
              Solutions</h2>
            
            <p>Lorem ipsum dolor sit amet, <br />
             consectetur adipiscing elit. Suspendisse varius <br /> 
             enim in eros elementum tristique. Duis cursus, <br />
              mi quis viverra ornare, eros dolor interdum <br />
               nulla, ut commodo diam libero vitae erat. <br />
                Suspendisse varius enim in eros elementum <br />
                tristique. Duis cursus, mi quis viverra ornare, <br />
                eros dolor interdum nulla.</p>
        </div>

        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            
        </div>
        
    </div>
  )
}

export default About
