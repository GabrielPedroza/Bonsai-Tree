import React, { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import Power3 from "gsap/gsap-core"
import "./navbar.scss"
import logo from "../../../public/Screen_Shot_2022-02-23_at_1.15.36_PM-removebg-preview.png"
import { useNavigate } from "react-router-dom"

const Menu = () => {
	let ref = useRef(null)
	let ref2 = useRef(null)
	let ref3 = useRef(null)
	let ref4 = useRef(null)

	useEffect(() => {
		gsap.from([ref, ref2, ref3, ref4], {
			y: 30,
			delay: 0.2,
			duration: 0.3,
			opacity: 0,
			ease: Power3.easeInOut,
			stagger: 0.2,
		})
	}, [])

	return (
		<>
			<div ref={(el) => (ref = el)}>
				<a className='l-individual__animation' href='#home'>
					Home
				</a>
			</div>
			<div ref={(el) => (ref2 = el)}>
				<a className='l-individual__animation' href='#history'>
					History
				</a>
			</div>
			<div ref={(el) => (ref3 = el)}>
				<a className='l-individual__animation' href='#benefits'>
					Benefits
				</a>
			</div>
			<div ref={(el) => (ref4 = el)}>
				<a className='l-individual__animation' href='#testimonials'>
					Testimonials
				</a>
			</div>
		</>
	)
}

const NavbarWithMenu = () => {
	let ref2 = useRef(null)
	let ref3 = useRef(null)
	let ref4 = useRef(null)

	const signinNavigate = useNavigate()
	const signupNavigate = useNavigate()

	let signupRef = useRef(null)
	let signinRef = useRef(null)

	useEffect(() => {
		gsap.from([ref2, ref3, ref4, signupRef, signinRef], {
			y: 30,
			delay: 0.4,
			duration: 0.5,
			opacity: 0,
			ease: Power3.easeInOut,
			stagger: 0.2,
		})
	}, [])

	return (
		<>
			<div ref={(el) => (ref2 = el)} className='l-menu__component'>
				<a href='#history' className='c-menu__component'>
					History
				</a>
			</div>
			<div ref={(el) => (ref3 = el)}>
				<a href='#benefits' className='c-menu__component'>
					Benefits
				</a>
			</div>

			<div ref={(el) => (ref4 = el)}>
				<a href='#testimonials' className='c-menu__component'>
					Testimonials
				</a>
			</div>

			<div ref={(el) => (signupRef = el)}>
				<a
					className='c-menu__component'
					onClick={() => signupNavigate("/signup")}>
					Signup
				</a>
			</div>

			<div ref={(el) => (signinRef = el)}>
				<a
					className='c-menu__component'
					onClick={() => signinNavigate("/signin")}>
					Signin
				</a>
			</div>
		</>
	)
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const signinNavigate = useNavigate()
	const signupNavigate = useNavigate()

	let signupRef = useRef(null)
	let signinRef = useRef(null)

	useEffect(() => {
		gsap.from([signupRef, signinRef], {
			x: 30,
			delay: 1.1,
			duration: 0.3,
			opacity: 0,
			ease: Power3.easeInOut,
			stagger: 0.2,
		})
	}, [])

	const toggleMenu = () => {
		!isOpen ? setIsOpen(true) : setIsOpen(false)
	}

	const onMenuClick = () => setIsOpen(false)

	return (
		<>
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
						ref={(el) => (signupRef = el)}
						onClick={() => signupNavigate("/signup")}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Sign up
					</a>
					<a
						className='c-navbar__buttons c-navbar__buttons--signin'
						ref={(el) => (signinRef = el)}
						onClick={() => signinNavigate("/signin")}>
						Sign in
					</a>
				</div>
				<div className={`js-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
					<div className='js-navbar__burger'></div>
				</div>
			</div>
			{isOpen && (
				<div className='l-isOpen__container'>
					<div className='l-menu' onClick={onMenuClick}>
						<div className='l-menu__open'>
							<div className='l-menu__container'>
								<NavbarWithMenu />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Navbar
