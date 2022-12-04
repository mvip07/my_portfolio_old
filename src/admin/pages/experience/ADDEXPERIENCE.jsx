import React, { useState } from "react"
import API from "../../../axios/axios"
import { createExperience } from "../../../axios/url"
import AdminNavbar from "../../components/AdminNavbar";

export const ExperienceAdmin = () => {
    const [experienceName, setExperienceName] = useState("")
    const [experienceYear, setExperienceYear] = useState("")
    const [experienceWhere, setExperienceWhere] = useState("")
    const [description, setDescription] = useState("")

    function ExperienceSubmit () {
        if (
            experienceName.trim() !== "" &&
            experienceYear.trim() !== "" &&
            experienceWhere.trim() !== "" &&
            description.trim() !== ""
        ) {
            API.post(createExperience, {
                "experienceName": experienceName,
                "experienceYear": experienceYear,
                "experienceWhere": experienceWhere,
                "description": description,
            })
                .then(res => alert("Sucessfull"))
                .catch(err => alert("Error"))
        }
    }

    return (
        <>
            <AdminNavbar />
            <div className="col-lg-12 col-md-12 mt-5 py-5">
                <div className="php-email-form">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Experience Name</label>
                            <input type="text" className="form-control"
                                   onChange={({ target }) => setExperienceName(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Experience Year</label>
                            <input type="text" className="form-control"
                                   onChange={({ target }) => setExperienceYear(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Experience Where</label>
                            <input type="text" className="form-control"
                                   onChange={({ target }) => setExperienceWhere(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Experience Desctrition</label>
                            <input type="text" className="form-control"
                                   onChange={({ target }) => setDescription(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                    </div>
                    <div className="testimonials">
                        <div className="text-center" onClick={() => ExperienceSubmit()}>
                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
       
    )
} 