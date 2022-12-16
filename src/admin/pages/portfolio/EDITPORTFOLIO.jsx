import React, {useEffect, useState} from 'react';
import AdminNavbar from "../../components/AdminNavbar";
import {useParams} from "react-router-dom";
import API from "../../../axios/axios";
import {allPortfolio, updatePortfolio} from "../../../axios/url";
import {comeimages, send} from "../../../axios/firebaseSend";

function UpdatePortfolio () {
	const { id } = useParams()
	const [portfolio, setPortfolio] = useState([])
	const [selectPortfolio, setSelectPortfolio] = useState({})
	const [category, setCategory] = useState("")
	const [githubUrl, setGithubUrl] = useState("")
	const [serverUrl, setServerUrl] = useState("")
	const [image, setImage] = useState("")
	
	useEffect(() => {
		API.get(allPortfolio)
		.then(res => setPortfolio(res.data))
		.catch(err => alert("Error"))
	}, [])
	
	setTimeout(() => {for (let i of portfolio) if (i?._id === id ) setSelectPortfolio(i)}, 1000)
	
	function PortfolioUpdate (id) {
		send(image)		
		setTimeout (() => {
			API.post(`${updatePortfolio}/${id}`, {
				"category": category.trim() === "" ? selectPortfolio.category : category,
				"githubUrl": githubUrl.trim() === "" ? selectPortfolio.githubUrl : githubUrl,
				"serverUrl": serverUrl.trim() === "" ? selectPortfolio.serverUrl : serverUrl,
				"image": image === "" ? selectPortfolio.image : comeimages,
			})
				.then(res => alert("Sucessfull"))
				.catch(err => alert("Error"))
		}, 3000)
	}
	return (
		<>
			<AdminNavbar />
			<div className="col-lg-12 col-md-12 mt-5 py-5">
				<div className="php-email-form">
					<div className="form-row">
						<div className="form-group col-md-12">
							<label htmlFor="name">Category</label>
							<input type="text" className="form-control"
								   defaultValue={selectPortfolio.category}
								   onChange={({ target }) => setCategory(target.value)}
							/>
							<div className="validate"></div>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="name">Git Hub Link</label>
							<input type="text" className="form-control"
								   defaultValue={selectPortfolio.githubUrl}
								   onChange={({ target }) => setGithubUrl(target.value)}
							/>
							<div className="validate"></div>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="name">Server Link</label>
							<input type="text" className="form-control"
								   defaultValue={selectPortfolio.serverUrl}
								   onChange={({ target }) => setServerUrl(target.value)}
							/>
							<div className="validate"></div>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="name">Old Image</label>
							<br />
							<img src={selectPortfolio.image} alt="" width="200px"/>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="name">Image</label>
							<input type="file" className="form-control"
								   onChange={({target}) => setImage(target.files[0])}
							/>
							<div className="validate"></div>
						</div>
					</div>
					<div className="testimonials">
						<div className="text-center" onClick={() => PortfolioUpdate(selectPortfolio?._id)}>
							<button type="submit">Update Portfolio</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdatePortfolio;