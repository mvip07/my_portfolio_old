import {useEffect, useState} from "react";
import API from "../../axios/axios";
import {allAbout} from "../../axios/url";
import { useNavigate} from "react-router-dom";


const AdminNavbar = () => {
	const navigate = useNavigate()
	const [user, setUser] = useState([])
	const [menu, setMenu] = useState(false)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	
	setInterval(() => {
		setWindowWidth(window.innerWidth)
	}, 1000)
	useEffect(() => {
		API.get(allAbout).then(res => setUser(...res.data))
	}, [])
	
	return (
		<header id="header" style={{left: `${menu === true ? "0" : windowWidth < 1200 ? "-300px" : ""}`}}>
			<div className="d-flex flex-column">
				<div className="profile">
					<img src={user?.image} alt="" className="img-fluid rounded-circle" />
					<h1 className="text-light"><a href="/">{user?.fullName}</a></h1>
					<div className="social-links mt-3 text-center">
						<a target="_blank" href={user?.telegrLinkmLink} className="telegram"><i className="fab fa-telegram-plane"></i></a>
						<a target="_blank" href={user?.facebookLink} className="facebook"><i className="fab fa-facebook-f"></i></a>
						<a target="_blank" href={user?.instagramLink} className="instagram"><i className="fab fa-instagram"></i></a>
						<a target="_blank" href={user?.linkedinLink} className="linkedin"><i className="fab fa-linkedin-in"></i></a>
					</div>
				</div>
				
				<nav className="nav-menu">
					<ul>
						<li onClick={() => navigate("/about/admin")}><a href="#"><span>About Main</span></a></li>
						<li onClick={() => navigate("/education/admin")}><a href="#"><span>Education Main</span></a></li>
						<li onClick={() => navigate("/experience/admin")}><a href="#"><span>Experience Main</span></a></li>
						<li onClick={() => navigate("/portfolio/admin")}><a href="#">Portfolio Main</a></li>
						<li onClick={() => navigate("/skill/admin")}><a href="#">Skill Main</a></li>
					</ul>
				</nav>
				<button type="button" className="mobile-nav-toggle d-xl-none"
						onClick={() => setMenu(menu === false ? true : false)}
				>
					{
						menu === false ?
							<i className="fas fa-bars"></i>
							:
							<i className="fas fa-times"></i>
					}
				</button>
			</div>
		</header>
	)
}

export default AdminNavbar