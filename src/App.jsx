import * as React from "react"
import { Header, History, Footer } from "./containers"
import { Navbar, Benefits, CTA, Testimonials } from "./components"
import Experience from "./experience/Experience"
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
			<Navbar />
			<div className='l-flex'>
				<WebGLExperience className='webgl l-container__component' />
				<Header />
			</div>
			<History />
			<Benefits />
			<Testimonials />
			<CTA />
			<Footer />
		</>
	)
}

export default App
