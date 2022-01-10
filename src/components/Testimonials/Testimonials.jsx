import React from "react"
import "./testimonials.scss"

const Testimonial = ({ name, photo, review }) =>
	/* random default "verified" review */
	{
		return (
			<div className='l-testimonial__container'>
				<img className='c-testimonial__img' src={photo} alt='Image of person' />
				<h3 className='c-testimonial__name'>{name}</h3>
				<p className='c-testimonial__review'>{review}</p>
			</div>
		)
	}

Testimonial.defaultProps = {
	photo: "/random-person1.jpg",
	name: "Bob",
	review:
		"Love this! something is very cool and it is awesome but it may be so nice to own this and take care of this beautiful bonsai tree",
}

const Testimonials = () => {
	return (
		<div className='l-testimonials__container'>
			<Testimonial
				photo='/random-person2.jpeg'
				name='John'
				review='This is cool'
			/>
			<Testimonial
				photo='/random-person2.jpeg'
				name='John'
				review='This is also cool'
			/>
		</div>
	)
}

export default Testimonials
