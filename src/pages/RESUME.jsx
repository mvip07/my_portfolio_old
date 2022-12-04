import { useEffect, useState } from "react"
import API from "../axios/axios"
import { allEducation, allExperience } from "../axios/url"

function Resume() {
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])
    useEffect(() => {
        API.get(allEducation).then(res => setEducation(res.data))
        API.get(allExperience).then(res => setExperience(res.data))
    }, [])

    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>
                        I want to be a Full Stack programmer in the future. My goals are to work as a Full Stack programmer in the largest companies in the world. I want to not only work for the biggest companies in the world, maybe also start my own IT company. My goal is to make my IT company one of the best in the world.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h2>Education</h2>
                        {
                            education.map((data) => (
                                <div key={Math.random()}>
                                    <h3 className="resume-title">{data?.educationName}</h3>
                                    <div className="resume-item">
                                        <h4>{data?.educationWhere}</h4>
                                        <h5>{data?.educationYear}</h5>
                                        <p>{data?.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        {
                            experience.map((data) => (
                                <div key={Math.random()}>
                                    <div className="resume-item">
                                        <h4>{data?.experienceName}</h4>
                                        <h5>{data?.experienceYear}</h5>
                                        <p><em>{data?.experienceWhere}</em></p>
                                        <ul><li>{data?.description}</li></ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume