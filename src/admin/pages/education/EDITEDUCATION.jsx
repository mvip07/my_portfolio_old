import React, {useEffect, useState} from "react";
import API from "../../../axios/axios";
import {allEducation, updateEducation} from "../../../axios/url";
import { useParams } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar.jsx";

function UpdateEducation () {
	const { id } = useParams()
	const [alleducation, setAllEducation] = useState([])
	const [education, setEducation] = useState({})
	const [educationName, setEducationName] = useState("")
	const [educationYear, setEducationYear] = useState("")
	const [educationWhere, setEducationWhere] = useState("")
	const [description, setDescription] = useState("")
	
	useEffect(() => {
		API.get(allEducation)
		.then(res => setAllEducation(res.data))
		.catch(err => console.log(err))
	}, [])
	
	setTimeout(() => {for (let i of alleducation) if (i?._id === id ) setEducation(i)}, 1000)
	
	function EducationUpdate (id) {
		API.post(`${updateEducation}/${id}`, {
			"educationName": educationName.trim() === "" ? education?.educationName : educationName,
			"educationYear": educationYear.trim() === "" ? education?.educationYear : educationYear,
			"educationWhere": educationWhere.trim() === "" ? education?.educationWhere : educationWhere,
			"description": description.trim() === "" ? education?.description : description,
		})
			.then(res => alert("Sucessfull"))
			.catch(err => alert("Error"))
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
									   defaultValue={education?.educationName}
									   onChange={({target}) => setEducationName(target.value)}
								/>
								<div className="validate"></div>
							</div>
							<div className="form-group col-md-12">
								<label htmlFor="name">Education Year</label>
								<input type="text" className="form-control"
									   defaultValue={education?.educationYear}
									   onChange={({target}) => setEducationYear(target.value)}
								/>
								<div className="validate"></div>
							</div>
							<div className="form-group col-md-12">
								<label htmlFor="name">Education Where</label>
								<input type="text" className="form-control"
									   defaultValue={education?.educationWhere}
									   onChange={({target}) => setEducationWhere(target.value)}
								/>
								<div className="validate"></div>
							</div>
							<div className="form-group col-md-12">
								<label htmlFor="name">Education Desctrition</label>
								<input type="text" className="form-control"
									   defaultValue={education?.description}
									   onChange={({target}) => setDescription(target.value)}
								/>
								<div className="validate"></div>
							</div>
						</div>
						<div className="testimonials">
							<div className="text-center" onClick={() => EducationUpdate(education?._id)}>
								<button>Update Education</button>
							</div>
						</div>
					</div>
				</div>
		</>
	);
}

export default UpdateEducation;