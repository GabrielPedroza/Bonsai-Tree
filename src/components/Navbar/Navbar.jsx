import React, { useState } from "react"
import "./navbar.scss"
import logo from "../../../public/bonsai__logo-removebg-preview.png"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

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
				{isOpen && (
					<div className='l-navbar__menu--container swing-left-fwd'>
						<div className='c-navbar__menu--links'>
							<Menu />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
