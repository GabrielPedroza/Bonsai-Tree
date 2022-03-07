import React, { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import Power3 from "gsap/gsap-core"
import "./navbar.scss"
import logo from "../../../public/Screen_Shot_2022-02-23_at_1.15.36_PM-removebg-preview.png"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

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

	return (
		<div className='c-navbar'>
			<div className='c-navbar__logo'>
				<img src={logo} alt='bonsai tree logo' />
			</div>
			<div className='c-navbar__links'>
				<>
					<a ref={(el) => (ref = el)} href='#home'>
						Home
					</a>
					<a ref={(el) => (ref2 = el)} href='#history'>
						History
					</a>
					<a ref={(el) => (ref3 = el)} href='#benefits'>
						Benefits
					</a>
					<a ref={(el) => (ref4 = el)} href='#testimonials'>
						Testimonials
					</a>
				</>
			</div>
			<div className='c-navbar__buttons'>
				<a
					className='c-navbar__buttons c-navbar__buttons--signup'
					ref={(el) => signupRef = el}
					href='#signup'>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Sign up
				</a>
				<a
					className='c-navbar__buttons c-navbar__buttons--signin'
					ref={(el) => signinRef = el}
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

// const Menu = () => (
// 	<>
// 		<a ref={(el) => (ref = el)} href='#home'>
// 			Home
// 		</a>
// 		<a ref={(el) => (ref = el)} href='#history'>
// 			History
// 		</a>
// 		<a ref={(el) => (ref = el)} href='#benefits'>
// 			Benefits
// 		</a>
// 		<a ref={(el) => (ref = el)} href='#testimonials'>
// 			Testimonials
// 		</a>
// 	</>
// )
export default Navbar
