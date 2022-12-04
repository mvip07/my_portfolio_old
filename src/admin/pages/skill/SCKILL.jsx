import React, {useEffect, useState} from 'react';
import AdminNavbar from "../../components/AdminNavbar.jsx";
import API from "../../../axios/axios";
import {allSkill, deleteSkill} from "../../../axios/url";
import {useNavigate} from "react-router-dom";

function Skill () {
	const navigate = useNavigate()
	const [skill, setSkill] = useState([])
	
	useEffect(() => {
		API.get(allSkill)
		.then(res => setSkill(res.data))
		.catch(err => alert("Error"))
	}, [])
	
	function SkillDelete (id) {
		API.delete(`${deleteSkill}/${id}`).then(res => alert("Sucessfull")).catch(err => alert("Error"))
	}
	
	return (
		<>
			<AdminNavbar />
			<section id="skills" className="skills">
				<div className="testimonials">
					<div className="text-center">
						<button type="submit" onClick={() => navigate(`/skill/create/admin`)}>Create Skill</button>
					</div>
				</div>
				<div className="container">
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
									<div className="testimonials">
										<div className="text-center">
											<button type="submit" onClick={() => navigate(`/skill/update/admin/${data?._id}`)}>Update</button>
											<button type="submit" onClick={() => SkillDelete(data?._id)}>Delete</button>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</section>
		</>
	);
}

export default Skill;