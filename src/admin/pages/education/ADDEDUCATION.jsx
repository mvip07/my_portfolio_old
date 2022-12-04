import React, { useState } from "react"
import API from "../../../axios/axios"
import { createEducation } from "../../../axios/url"
import AdminNavbar from "../../components/AdminNavbar";

function EducationAdmin () {
    const [educationName, setEducationName] = useState("")
    const [educationYear, setEducationYear] = useState("")
    const [educationWhere, setEducationWhere] = useState("")
    const [description, setDescription] = useState("")

    function EducationSubmit () {
        if (
            educationName.trim() !== "" &&
            educationYear.trim() !== "" &&
            educationWhere.trim() !== "" &&
            description.trim() !== ""
        ) {
            API.post(createEducation, {
                "educationName": educationName,
                "educationYear": educationYear,
                "educationWhere": educationWhere,
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
                <div  className="php-email-form">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Education Name</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setEducationName(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Education Year</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setEducationYear(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Education Where</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setEducationWhere(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Education Desctrition</label>
                            <input type="text" className="form-control"
                                   onChange={({target}) => setDescription(target.value)}
                            />
                            <div className="validate"></div>
                        </div>
                    </div>
    
                    <div className="testimonials">
                        <div className="text-center" onClick={() => EducationSubmit()}>
                            <button>Create Education</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default EducationAdmin