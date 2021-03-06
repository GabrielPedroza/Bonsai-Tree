import * as React from "react"
import gsap from "gsap"
import { Footer } from "./containers"
import { Navbar, Benefits, CTA, Testimonials, History } from "./components"
import Experience from "./Experience/Experience"
import "./App.scss"

const WebGLExperience = () => {
	let canvas = React.useRef()

	React.useLayoutEffect(() => {
		canvas = new Experience(canvas.current)
	})

	return <canvas ref={canvas} />
}

const App = () => {
	let ref = React.useRef(null)

	React.useEffect(() => {
		gsap.to(ref, {
			duration: 0,
			css: {
				visibility: "visible",
			},
		})
	}, [])

	return (
		<div ref={(el) => (ref = el)} className='l-main-container'>
			<div className='l-background-color'>
				<Navbar />
				<WebGLExperience />
			</div>
			<div className='l-flex__info l-container__info'>
				<History />
				<Benefits />
			</div>
			<Testimonials />
			<CTA />
			<Footer />
		</div>
	)
}

export default App
