import React, { useState } from "react"
import "./navbar.scss"
import logo from "../../../public/bonsai__logo-removebg-preview.png"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className='c-navbar'>
			<div className='c-navbar__logo'>
				<img src={logo} alt='bonsai tree logo' />
			</div>
			<div className='c-navbar__links'>
				<a href='#home'>Home</a>
				<a href='#history'>History</a>
				<a href='#benefits'>Benefits</a>
				<a href='#testimonials'>Testimonials</a>
			</div>
			<div className='c-navbar__buttons'>
				<a
					className='c-navbar__buttons c-navbar__buttons--signup'
					href='#signup'>
					Sign up
				</a>
				<a
					className='c-navbar__buttons c-navbar__buttons--signin'
					href='#signin'>
					Sign in
				</a>
			</div>
			<div className='js-navbar__menu'>
				{isOpen ? (
					<CloseIcon onClick={() => setIsOpen(false)} />
				) : (
					<MenuIcon onClick={() => setIsOpen(true)} />
				)}
			</div>
		</div>
	)
}

export default Navbar
