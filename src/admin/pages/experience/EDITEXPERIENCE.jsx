import AdminNavbar from "../../components/AdminNavbar";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import API from "../../../axios/axios";
import {allExperience, updateExperience} from "../../../axios/url";

function UpdateExperience () {
	const { id } = useParams()
	const [experience,setExperience] = useState([])
	const [selectExperience, setSelectExperience] = useState({})
	const [experienceName, setExperienceName] = useState("")
	const [experienceYear, setExperienceYear] = useState("")
	const [experienceWhere, setExperienceWhere] = useState("")
	const [description, setDescription] = useState("")
	
	useEffect(() => {
		API.get(allExperience)
		.then(res => setExperience(res.data))
		.catch(err => alert("Error"))
	}, [])
	
	setTimeout(() => { for (let i of experience) if (i?._id === id ) setSelectExperience(i) }, 1000)
	
	function ExperienceUpdate (id) {
		API.post(`${updateExperience}/${id}`	, {
			"experienceName": experienceName.trim() === "" ? selectExperience.experienceName : experienceName,
			"experienceYear": experienceYear.trim() === "" ? selectExperience.experienceYear : experienceYear,
			"experienceWhere": experienceWhere.trim() === "" ? selectExperience.experienceWhere : experienceWhere,
			"description": description.trim() === "" ? selectExperience.description : description ,
		})
			.then(res => alert("Sucessfull"))
			.catch(err => alert("Error"))
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
								   defaultValue={selectExperience.experienceName}
								   onChange={({ target }) => setExperienceName(target.value)}
							/>
							<div className="validate"></div>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="name">Experience Year</label>
							<input type="text" className="form-control"
								   defaultValue={selectExperience.experienceYear}
								   onChange={({ target }) => setExperienceYear(target.value)}
							/>
							<div className="validate"></div>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="name">Experience Where</label>
							<input type="text" className="form-control"
								   defaultValue={selectExperience.experienceWhere}
								   onChange={({ target }) => setExperienceWhere(target.value)}
							/>
							<div className="validate"></div>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="name">Experience Desctrition</label>
							<input type="text" className="form-control"
								   defaultValue={selectExperience.description}
								   onChange={({ target }) => setDescription(target.value)}
							/>
							<div className="validate"></div>
						</div>
					</div>
					<div className="testimonials">
						<div className="text-center" onClick={() => ExperienceUpdate(selectExperience?._id)}>
							<button type="submit">Update Experience</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdateExperience;