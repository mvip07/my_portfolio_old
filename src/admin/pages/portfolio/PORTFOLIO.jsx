import React, {useEffect, useState} from 'react';
import AdminNavbar from "../../components/AdminNavbar.jsx";
import API from "../../../axios/axios";
import {allPortfolio, deletePortfolio} from "../../../axios/url";
import {useNavigate} from "react-router-dom";

export const PortfolioDetail = ({ data }) => {
	const navigate = useNavigate()
	
	function  PortfolioDelete (id) {
		API.delete(deletePortfolio+`/`+id)
		.then(res => alert("Sucessfull"))
		.catch(err => alert("Error"))
	}
	return (
		<div className="col-lg-4 col-md-6 portfolio-item filter-css" key={Math.random()}>
			<div className="portfolio-wrap">
				<img src={data?.image} className="img-fluid" alt="" />
				<div className="portfolio-links">
					<a href={data?.githubUrl} target="block" className="venobox"><i className="fab fa-github"></i></a>
					<a href={data?.serverUrl} target="block" title="More Details"><i className="fas fa-link"></i></a>
				</div>
			</div>
			<div className="testimonials mt-5">
				<div className="text-center">
					<button type="submit" onClick={() => navigate(`/portfolio/update/admin/${data?._id}`)}>Update</button>
					<button type="submit" onClick={() => PortfolioDelete(data?._id)}>Delete</button>
				</div>
			</div>
		</div>
	)
}

function Portfolio () {
	const navigate = useNavigate()
	const [portfolio, setportfolio] = useState([])
	const [categoryType, setCategoryType] = useState("DP")
	useEffect(() => {
		API.get(allPortfolio)
			.then(res => setportfolio(res.data))
			.catch(err => alert("Error"))
	}, [])
	
	return (
		<>
			<AdminNavbar />
			<section id="portfolio" className="portfolio">
				<div className="container">
					<div className="row" data-aos="fade-up">
						<div className="col-lg-12 d-flex justify-content-center">
							<ul id="portfolio-flters">
								<li onClick={() => setCategoryType("DP")} className={`${categoryType === "DP" ? "filter-active" : ""}`}>All</li>
								<li onClick={() => setCategoryType("LP")} className={`${categoryType === "LP" ? "filter-active" : ""}`}>Layout Project</li>
								<li onClick={() => setCategoryType("RP")} className={`${categoryType === "RP" ? "filter-active" : ""}`}>Real Project</li>
								<li onClick={() => navigate("/portfolio/create/admin")} className="filter-active" >Create Portfolio</li>
							</ul>
						</div>
					</div>
					
					<div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
						{
							portfolio.filter((item) => categoryType === "DP" ? item : item.category === categoryType).map((data) => (
								<PortfolioDetail data={data} key={Math.random()}/>
							))
						}
					</div>
				</div>
			</section >
		</>
	);
}

export default Portfolio;