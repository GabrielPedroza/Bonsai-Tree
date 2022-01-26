import React, { useState } from "react"
import "./navbar.scss"
import logo from "../../../public/bonsai__logo-removebg-preview.png"

const Menu = () => (
	<>
		<a href='#home'>Home</a>
		<a href='#history'>History</a>
		<a href='#benefits'>Benefits</a>
		<a href='#testimonials'>Testimonials</a>
	</>
)

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		!isOpen ? setIsOpen(true) : setIsOpen(false)
	}

	return (
		<div className='c-navbar'>
			<div className='c-navbar__logo'>
				<img src={logo} alt='bonsai tree logo' />
			</div>
			<div className='c-navbar__links'>
				<Menu />
			</div>
			<div className='c-navbar__buttons'>
				<a
					className='c-navbar__buttons c-navbar__buttons--signup'
					href='#signup'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					Sign up
				</a>
				<a
					className='c-navbar__buttons c-navbar__buttons--signin'
					href='#signin'>
					Sign in
				</a>
			</div>
			<div className={`js-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<div className='js-navbar__burger'></div>
			</div>
		</div>
	)
}

export default Navbar
