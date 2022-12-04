import {useEffect, useState} from "react";
import API from "../../axios/axios";
import {allAbout} from "../../axios/url";
import {Link, useNavigate} from "react-router-dom";


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
					<h1 className="text-light"><Link to="/">{user?.fullName}</Link></h1>
					<div className="social-links mt-3 text-center">
						<Link to={user?.telegrLinkmLink} clLinkssName="telegram"><i className="fab fa-telegram-plane"></i></Link>
						<Link to={user?.facebookLink} className="facebook"><i className="fab fa-facebook-f"></i></Link>
						<Link to={user?.instagramLink} className="instagram"><i className="fab fa-instagram"></i></Link>
						<Link to={user?.linkedinLink} className="linkedin"><i className="fab fa-linkedin-in"></i></Link>
					</div>
				</div>
				
				<nav className="nav-menu">
					<ul>
						<li onClick={() => navigate("/about/admin")}><Link to="#"><span>About Main</span></Link></li>
						<li onClick={() => navigate("/education/admin")}><Link to="#"><span>Education Main</span></Link></li>
						<li onClick={() => navigate("/experience/admin")}><Link to="#"><span>Experience Main</span></Link></li>
						<li onClick={() => navigate("/portfolio/admin")}><Link to="#">Portfolio Main</Link></li>
						<li onClick={() => navigate("/skill/admin")}><Link to="#">Skill Main</Link></li>
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