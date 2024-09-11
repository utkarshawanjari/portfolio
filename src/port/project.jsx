import React from 'react'
import project from './data/projects.json'
import "./port.css"

const Project = () => {
    return (
        <>
            <div classNameName="container project my-3" id="project">
                <h1>Projects</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    {project.map((data) => (
                        <>
                            <div key={data.id} className="my-3 mx-3 col-sm-6 col-md-4 col-lg-3">
                                <div className="card bg-black text-light my-3" style={{ width:"18rem",height:"20rem" }} data-aos="flip-right" data-aos-duration="1000">
                                    <div className="card-body py-2">
                                        <h5 className="card-title text-center">{data.title}</h5>
                                        <p className="card-text">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Project