import React, {useEffect, useState} from 'react';
import API from "../../../axios/axios";
import {allAbout, deleteAbout} from "../../../axios/url";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

function About () {
	const navigate = useNavigate()
	const [user, setUser] = useState([])
	
	useEffect(() => {
		API.get(allAbout).then(res => setUser(...res.data))
	}, [])
	
	function AboutDelete(id) {
		API.delete(`${deleteAbout}/${id}`)
			.then(res => alert("Sucessfull"))
			.catch(err => alert("Error"))
	}
	
	return (
		<>
			<AdminNavbar />
			<div className="testimonials">
				<div className="text-center" onClick={() => navigate("/about/create/admin")}>
					<button>Create About</button>
				</div>
			</div>
			<section id="about" className="about" key={Math.random()}>
						<div className="container">
							<div className="section-title">
								<h2>About</h2>
							</div>
							
							<div className="row">
								<div className="col-lg-4" data-aos="fade-right">
									<img src={user?.image} className="img-fluid" alt="" />
								</div>
								<div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
									<h3>{user?.job}</h3>
									<div className="row">
										<div className="col-lg-6">
											<ul>
												<li><i className="fas fa-chevron-right"></i> <strong>Birthday:</strong> {user?.birthday}</li>
												<li><i className="fas fa-chevron-right"></i> <strong>Job:</strong> {user?.job}</li>
												<li><i className="fas fa-chevron-right"></i> <strong>Phone:</strong> {user?.phone}</li>
												<li><i className="fas fa-chevron-right"></i> <strong>City:</strong> {user?.city}</li>
											</ul>
										</div>
										<div className="col-lg-6">
											<ul>
												<li><i className="fas fa-chevron-right"></i> <strong>Age:</strong> {user?.age}</li>
												<li><i className="fas fa-chevron-right"></i> <strong>Level:</strong> {user?.degree}</li>
												<li><i className="fas fa-chevron-right"></i> <strong>Email:</strong> {user?.email}</li>
												<li><i className="fas fa-chevron-right"></i> <strong>Interesting:</strong> {user?.interesting}</li>
											</ul>
										</div>
									</div>
									<p>{user?.description}</p>
								</div>
							</div>
						</div>
						<div className="testimonials">
							<div className="text-center">
								<button onClick={() => navigate("/about/update/admin")}>Update</button>
								<button onClick={() => AboutDelete(user?._id)}>Delete</button>
							</div>
						</div>
					</section>
		</>
	)
}

export default About;