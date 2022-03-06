import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Power3 from "gsap/gsap-core"
import "./benefits.scss"

const Benefits = () => {
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		gsap.from(["#l-benefits__ref", "#l-benefits__desc--ref"], {
			scrollTrigger: "#l-benefits__ref",
			y: 30,
			delay: 0.4,
			duration: 0.5,
			opacity: 0,
			ease: Power3.easeInOut,
			stagger: 0.3,
		})
	}, [])

	return (
		<div className='l-HandB__container'>
			<h3 className='c-header' id='l-benefits__ref'>
				Benefits
			</h3>
			<div className='c-header__container'>
				<p className='c-desc c-desc__benefits' id='l-benefits__desc--ref'>
					The benefits are endless. It is proven to give you peace and
					prosperity when you are surrounded by any bonsai tree. It is also
					proven that it can give you patience because of how time-consuming it
					is to grow and maintain a tree.
				</p>
				<img
					className='c-img' id='l-img__benefits'
					src='/joe-petisce-tree-arts.jpeg'
					alt='The country of japan'
				/>
			</div>
		</div>
	)
}

export default Benefits
