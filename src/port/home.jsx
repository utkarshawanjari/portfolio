import React, { useEffect, useRef } from 'react';
import Pdf from '../pdf/Utkarsha Resume.pdf';
import Hero from './data/hero.json'
import Typed from "typed.js";
// import "./port.css".

const home = () => {
  const typedRef = useRef(null)
  useEffect(() =>{
    const options={
      strings:["Wellcome to my Portfolio","My Name is Utkarsha Wanjari","I am Full-Stack Developer"],
      typeSpeed:70,
      backSpeed:40,
      loop:true
    }

    const typed = new Typed(typedRef.current,options)

    return()=>{
      typed.destroy()
    }
  },[])
  
  return (
    <>
      <div className="home_container" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a href={Pdf}  download="Utkarsha Resume"  className="btn btn-outline-warning my-4">Download Resume</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${Hero.imgsrc}`}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default home


 