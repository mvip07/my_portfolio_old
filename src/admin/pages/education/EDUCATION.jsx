import React, {useEffect, useState} from 'react';
import AdminNavbar from "../../components/AdminNavbar";
import API from "../../../axios/axios";
import {allEducation, deleteEducation} from "../../../axios/url";
import {useNavigate} from "react-router-dom";

function Education () {
	const navigate = useNavigate()
	const [education, setEducation] = useState([])
	
	useEffect(() => {
		API.get(allEducation).then(res => setEducation(res.data))
	}, [])
	
	function EducationDelete(id) {
		API.delete(deleteEducation+`/`+id)
		.then(res => alert("Sucessfull"))
		.catch(err => alert("Error"))
	}
	
	return (
		<>
			<AdminNavbar />
			<div className="col-lg-12" data-aos="fade-up">
				<div className="testimonials">
					<div className="text-center" onClick={() => navigate("/education/create/admin")}>
						<button>Create Education</button>
					</div>
				</div>
				<h2>Education</h2>
				{
					education.map((data) => (
						<div key={Math.random()}>
							<h3 className="resume-title text-center">{data?.educationName}</h3>
							<div className="resume-item text-center">
								<h4>{data?.educationWhere}</h4>
								<h5>{data?.educationYear}</h5>
								<p>{data?.description}</p>
							</div>
							<div className="testimonials">
								<div className="text-center">
									<button onClick={() => navigate(`/education/update/admin/${data?._id}`)}>Update</button>
									<button onClick={() => EducationDelete(data?._id)}>Delete</button>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</>
	)
}

export default Education;