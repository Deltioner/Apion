import React from 'react'
import './Project.css'
import pro1 from '../../assets/project2.jpg'
import pro2 from '../../assets/project1.jpg'
import pro3 from  '../../assets/project3.jpg'

function Project() {
  return (
    <div className="Projects" id="projects">

    <div className="Project">
        <img src={pro1} alt="" />
        <div className="caption">
            <p>Project Alpha</p>
        </div>
        
    </div>

    <div className="Project">
        <img src={pro2} alt="" />
        <div className="caption">
            <p>Project Beta</p>
        </div>
    </div>

    <div className="Project">
        <img src={pro3} alt="" />
        <div className="caption">
            <p>Project Gama</p>
        </div>
    </div>

  </div>
  )
}

export default Project
