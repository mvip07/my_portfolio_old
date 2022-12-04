import React, { useEffect, useState } from "react"
import API from "../axios/axios"
import { allSkill } from "../axios/url"

function Skills() {
    const [skill, setSkill] = useState([])
    useEffect(() => {
        API.get(allSkill).then(res => setSkill(res.data))
    }, [])

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <div className="row skills-content d-flex">
                    {
                        skill.map((data) => (
                            <div className="col-lg-6" key={Math.random()}>
                                <div className="progress" >
                                    <span className="skill">{data.skillsName} <i className="val">{data?.skillsPercentage}%</i></span>
                                    <div className="progress-bar-wrap" >
                                        <div className="progress-bar" style={{width: `${data?.skillsPercentage}%`}}  role="progressbar"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Skills