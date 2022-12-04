import React, {useEffect, useState} from 'react';
import AdminNavbar from "../../components/AdminNavbar";
import {useParams} from "react-router-dom";
import API from "../../../axios/axios";
import {updateSkill, allSkill} from "../../../axios/url";

function UpdateSkills () {
	
	const { id } = useParams()
	const [allSkills, setAllSkill] = useState([])
	const [selectSkill, setSelectSkill] = useState({})
	const [skillsName, setSkillsName] = useState("")
	const [skillsPercentage, setSkillsPercentage] = useState("")
	
	useEffect(() => {
		API.get(allSkill)
		.then(res => setAllSkill(res.data))
		.catch(err => alert("Error"))
	}, [])
	
	setTimeout(() => {for (let i of allSkills) if (i?._id === id ) setSelectSkill(i)}, 1000)

	function SkillUpdate (id) {
		API.post(`${updateSkill}/${id}`, {
			"skillsName": skillsName.trim() === "" ? selectSkill.skillsName : skillsName,
			"skillsPercentage": skillsPercentage.trim() === "" ? selectSkill.skillsPercentage : skillsPercentage,
		}).then(res => alert("Sucessfull"))
		  .catch(err => alert("Error"))
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
								   defaultValue={selectSkill.skillsName}
								   onChange={({ target }) => setSkillsName(target.value)}
							/>
							<div className="validate"></div>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="name">Skill Percentage (max 100)</label>
							<input type="number" className="form-control"
								   defaultValue={selectSkill.skillsPercentage}
								   onChange={({ target }) => setSkillsPercentage(target.value > 100 ? 100 : target.value)}
							/>
							<div className="validate"></div>
						</div>
					</div>
					<div className="testimonials">
						<div className="text-center" onClick={() => SkillUpdate(selectSkill?._id)}>
							<button type="submit">Update Skill</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdateSkills;