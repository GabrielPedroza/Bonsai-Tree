import React, { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Power3 from "gsap/gsap-core"
import "./history.scss"

const History = () => {
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		gsap.from(["#l-header__ref", "#l-header__desc--ref"], {
			scrollTrigger: "#l-header__ref",
			y: 30,
			delay: 0.5,
			duration: 0.5,
			opacity: 0,
			ease: Power3.easeInOut,
			stagger: 0.3,
		})
	}, [])
	return (
		<div className='l-HandB__container'>
			<h3 className='c-header' id='l-header__ref'>
				History
			</h3>
			<div className='c-header__container'>
				<img className='c-img__history' src='/TkUR4G.jpeg' alt='The country of japan' />
				<p className='c-desc' id='l-header__desc--ref'>
					Bonsai is a Japanese word meaning "tree" and is a Japanese plant that
					is native to Japan. It is a type of flowering plant with a large,
					upright stem and a large, round fruit. The flowers are usually white,
					but can also be yellow or orange. There are rare occurrences when
					flowers are pink.
				</p>
			</div>
		</div>
	)
}

export default History
