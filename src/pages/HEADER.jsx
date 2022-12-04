import { useState } from "react"

function Header ({user}) {
	const [menu, setMenu] = useState(false)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	setInterval(() => {
		setWindowWidth(window.innerWidth)
	}, 1000)

	return (
		<header id="header" style={{left: `${menu === true ? "0" : windowWidth < 1200 ? "-300px" : ""}`}}>
			<div className="d-flex flex-column">
				<div className="profile">
					<img src={user?.image} alt="" className="img-fluid rounded-circle" />
					<h1 className="text-light"><a href="index.html">{user?.fullName}</a></h1>
					<div className="social-links mt-3 text-center">
						<a href={user?.telegramLink} className="telegram"><i className="fab fa-telegram-plane"></i></a>
						<a href={user?.facabookLink} className="facebook"><i className="fab fa-facebook-f"></i></a>
						<a href={user?.instagramLink} className="instagram"><i className="fab fa-instagram"></i></a>
						<a href={user?.linkedinLink} className="linkedin"><i className="fab fa-linkedin-in"></i></a>
					</div>
				</div>

				<nav className="nav-menu">
					<ul>
						<li><a href="#hero"><i className="fas fa-home"></i> <span>Home</span></a></li>
						<li><a href="#about"><i className="fas fa-user"></i> <span>About</span></a></li>
						<li><a href="#facts"><i className="fas fa-check"></i> <span>Facts</span></a></li>
						<li><a href="#resume"><i className="fas fa-file"></i> <span>Resume</span></a></li>
						<li><a href="#portfolio"><i className="fas fa-portrait"></i> Portfolio</a></li>
						<li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
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

export default Header