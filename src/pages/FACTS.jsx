import {useEffect, useState} from "react"
import API from "../axios/axios"
import { allPortfolio, allTestimonial, allView } from "../axios/url"

function Facts () {
	const [testimonials, setTestimonials] = useState(0)
	const [portfolio, setPortfolio] = useState(0)
	const [view, setView] = useState(0)
	
	useEffect(() => {
		API.get(allTestimonial).then((res) => setTestimonials(res.data.length))
		API.get(allPortfolio).then((res) => setPortfolio(res.data.length))
		API.get(allView).then((res) => setView(res.data.length))
	}, [testimonials, portfolio, view])

	return (
		<section id="facts" className="facts">
			<div className="container">

				<div className="section-title">
					<h2>Facts</h2>
					<p>You can see three columns in the buyer. 1) Comments left by people. 2) I located a large number of small projects. 3) The number of visitors to my site is located.</p>
				</div>

				<div className="row no-gutters">

					<div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
						<div className="count-box">
						<i className="far fa-smile-wink"></i>
							<span data-toggle="counter-up">{testimonials}</span>
							<p><strong>Number of Comments</strong></p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
						<div className="count-box">
							<i className="fas fa-tasks"></i>
							<span data-toggle="counter-up">{portfolio}</span>
							<p><strong>Projects</strong></p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
						<div className="count-box">
						<i className="fas fa-users"></i>
							<span data-toggle="counter-up">{view}</span>
							<p><strong>Number of Views</strong></p>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Facts