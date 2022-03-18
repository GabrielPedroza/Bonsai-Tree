import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Power3 from "gsap/gsap-core"
import "./testimonials.scss"

const Testimonial = ({ name, photo, review, displayNone }) => {
	return (
		<div className={`${displayNone} l-testimonial__container`}>
			<img className='c-testimonial__img' src={photo} alt='Image of person' />
			<h3 className='c-testimonial__name'>{`${name} says...`}</h3>
			<p className='c-testimonial__review'>{review}</p>
			<span className='span-1'></span>
			<span className='span-2'></span>
			<span className='span-3'></span>
			<span className='span-4'></span>
		</div>
	)
}

/* random default "verified" review && all props has to be string */

Testimonial.defaultProps = {
	photo: "/random-person1.jpg",
	name: "Bob",
	review:
		"Love this! something is very cool and it is awesome but it may be so nice to own this and take care of this beautiful bonsai tree",
}

const Testimonials = () => {
	let ref = useRef()

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		gsap.from(ref, {
			scrollTrigger: ref,
			y: 30,
			delay: 0.4,
			duration: 0.5,
			opacity: 0,
			ease: Power3.easeInOut,
		})
	}, [])
	return (
		<>
			<div className='l-testimonials__container'>
				<h2
					ref={(el) => (ref = el)}
					className='c-testimonials__title'>
					Testimonials
				</h2>
				<div className='c-testimonials__container'>
					{/* no using an array of objects in json and mapping over it, its static data */}
					{/* if it was dynamic data, i would add overflow-y: scroll to the review with scroll-behavior: smooth. possibly add word limit */}
					<Testimonial
						photo='/random-person1.jpg'
						name='John'
						review='This is an extraordinary tree that brings peace to me constantly when I am stressed out.'
						displayNone='l-testimonial__removed'
					/>
					<Testimonial
						photo='/random-person2.jpeg'
						name='Elon'
						review="This bonsai tree is amazing. This will be the first thing I send to Mars. I'm about to post this on twitter!"
					/>
					<Testimonial
						photo='/random-person3.jpeg'
						name='Andrew'
						review='This bonsai tree made me run for president and I successfully did it! I am the only president to be a veteran of both the Revolutionary War and the War of 1812!'
						displayNone='l-testimonial__removed'
					/>
					<Testimonial
						photo='/random-person4.jpeg'
						name='Barack'
						review='Let me be clear folks... this product... is genuinely amazing. God bless america for this creation.'
						displayNone='l-testimonial__removed'
					/>
					<Testimonial
						photo='/random-person5.jpeg'
						name='Ben'
						review="Ho ho ho! Yes! This is what I've been looking for in the newspaper!!!"
						displayNone='l-testimonial__removed'
					/>
					<Testimonial
						photo='/random-person6.jpeg'
						name='Doge'
						review='Woof woof woof! Woof woof woof woof woof woof woof. To the moon!'
					/>
					<Testimonial
						photo='/random-person7.jpeg'
						name='Shiba'
						review='I pretty much agree with everything Doge said but I am going to the moon with the bonsai tree instead.'
					/>
				</div>
			</div>
		</>
	)
}

export default Testimonials
