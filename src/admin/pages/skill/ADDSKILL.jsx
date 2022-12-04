import React, { useState } from "react"
import API from "../../../axios/axios"
import { createSkill } from "../../../axios/url"
import AdminNavbar from "../../components/AdminNavbar";

function SkillAdmin () {

    const [skillsName, setSkillsName] = useState("")
    const [skillsPercentage, setSkillsPercentage] = useState("")

    function SkillSubmit() {
        if (skillsName.trim() !== "" && skillsPercentage.trim() !== "") {
            API.post(createSkill, {
                "skillsName": skillsName,
                "skillsPercentage": skillsPercentage,
            }).then(res => alert("Sucessfull")).catch(err => alert("Error"))
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className="col-lg-12 col-md-12 mt-5 py-5">
                <div className="php-email-form">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Skill Name</label>
                            <input type="text" className="form-control"
                                   onChange={({ target }) => setSkillsName(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Skill Percentage (max 100)</label>
                            <input type="number" className="form-control"
                                   onChange={({ target }) => setSkillsPercentage(target.value > 100 ? 100 : target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                    </div>
                    <div className="testimonials">
                        <div className="text-center" onClick={() => SkillSubmit()}>
                            <button type="submit">Create Skill</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default SkillAdmin