import React from "react"
import "./navbar.scss"
import logo from "../../../public/bonsai__logo-removebg-preview.png"

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<img src={logo} alt='bonsai tree logo' />
			</div>
			<div className='navbar__links'>
				<a href='#home'>Home</a>
				<a href='#history'>History</a>
				<a href='#benefits'>Benefits</a>
				<a href='#testimonials'>Testimonials</a>
				<div className='navbar__links__buttons'>
					<button className='navbar__links__buttons--primary'>
						<a href='#signup'>Sign up</a>
					</button>
					<button className='navbar__links__buttons--accent'>
						<a href='#signin'>Sign in</a>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
