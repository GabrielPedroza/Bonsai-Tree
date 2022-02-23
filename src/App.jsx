import * as React from "react"
import { Header, Footer } from "./containers"
import { Navbar, Benefits, CTA, Testimonials, History } from "./components"
import Experience from "./Experience/Experience"
import "./App.scss"
import "./containers/Header/header.scss"

const WebGLExperience = () => {
	const canvas = React.useRef()

	React.useEffect(() => {
		let scheduledFrame
		const experience = new Experience(canvas.current)

		const animate = () => {
			scheduledFrame = requestAnimationFrame(animate)
			experience.update()
		}
		requestAnimationFrame(animate)

		return () => {
			cancelAnimationFrame(scheduledFrame)
			experience.dispose?.() /* optional chaining to make sure method is a function */
		}
	}, [])

	return <canvas ref={canvas} />
}

const App = () => {
	return (
		<>
			{/* <div className='l-flex__header'> */}
			<Navbar />
			<WebGLExperience />
			{/* <Header /> */}
			{/* </div> */}
			<div className='l-flex__info l-container__info'>
				<History />
				<Benefits />
			</div>
			<Testimonials />
			<CTA />
			<Footer />
		</>
	)
}

export default App
