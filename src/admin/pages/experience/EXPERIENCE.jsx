import AdminNavbar from "../../components/AdminNavbar.jsx";
import React, {useEffect, useState} from "react";
import API from "../../../axios/axios";
import {allExperience, deleteExperience} from "../../../axios/url";
import {useNavigate} from "react-router-dom";

function Experience () {
	const navigate = useNavigate()
	const [experience, setExperience] = useState([])
	
	useEffect(() => {
		API.get(allExperience)
		.then(res => setExperience(res.data))
		.catch(err => alert("Error"))
	}, [])
	
	function ExperienceDelete (id) {
		API.delete(`${deleteExperience}/${id}`)
			.then(res => alert("Sucessfull"))
			.catch(err => alert("Error"))
	}
	
	return (
		<>
			<AdminNavbar />
			<div className="testimonials">
				<div className="text-center">
					<button onClick={() => navigate(`/experience/create/admin`)}>Create Experience</button>
				</div>
			</div>
			<div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
				<h3 className="resume-title">Professional Experience</h3>
				{
					experience.map((data) => (
						<div key={Math.random()}>
							<div className="resume-item">
								<h4>{data?.experinceName}</h4>
								<h5>{data?.experinceYear}</h5>
								<p><em>{data?.experienceWhere}</em></p>
								<ul><li>{data?.description}</li></ul>
							</div>
							
							<div className="testimonials">
								<div className="text-center">
									<button onClick={() => navigate(`/experience/update/admin/${data?._id}`)}>Update</button>
									<button onClick={() => ExperienceDelete(data?._id)}>Delete</button>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</>
	);
}

export default Experience;