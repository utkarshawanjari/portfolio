import React from 'react'
import skills from './data/skills.json'
import "./port.css"

const Skills =()=>{
    return(
        <>
            <div className="skills container" id="skills">
                <h1>SKILLS</h1>
                <div className="items-container">
                {skills.map((data)=>(
                    <>
                            <div key={data.id} className="items" data-aos="flip-left" data-aos-duration="1000">
                                <img src={`/assets/${data.imageSrc}`}/>
                                <h4>{data.title}</h4>
                            </div>
                    </>
                ))}
                </div>
            </div>
        </>
    )
}

export default Skills