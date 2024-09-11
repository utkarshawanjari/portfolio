import React from 'react'
import Education from './data/education.json'
import "./port.css"
const education = () => {
  return (
    <>
      <div className="edu_container" id="education">
        <h1>Education</h1>
        {
            Education.map((data)=>{
                return(
                    <>
                    <div key={data.id} className="edu-items text-center" data-aos="zoom-in" data-aos-duration="1000">
                      <div className="edu-section">
                        <h2>{data.Education}</h2>
                        <h4>{data.PassOut}{" "}{data.University}{" "}{data.Location}</h4>
                        <p>{data.Score}</p>
                      </div>
                    </div>
                    </>
                )
            })
        }
      </div>
    </>
  )
}

export default education
