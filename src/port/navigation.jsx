import React from 'react'
import "./port.css"
const navigation = () => {
  return (
    <div>
      <div className="nav_container" data-aos="fade-down" data-aos-duration="1000">
        <div className="nav_left">Portfolio</div>
        <div className="nav_right">
           <a href="#home" className="nav_items">Home</a>
           <a href="#education" className="nav_items">Education</a>
           <a href="#skills" className="nav_items">Skills</a>
           <a href="#project" className="nav_items">Projects</a>
           <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default navigation
