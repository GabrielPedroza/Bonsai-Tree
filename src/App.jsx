import React from "react"
import { Header, History, Footer } from "./containers"
import { Navbar, Benefits, CTA, Testimonials } from "./components"
import Experience from "./experience/Experience"
import "./App.scss"

const experience = new Experience(document.querySelector("#canvas"))

const App = () => {
	return (
		<div>
			<div className='hero__container'>
				<Navbar />
				<Header />
			</div>
			<History />
			<Benefits />
			<Testimonials />
			<CTA />
			<Footer />
		</div>
	)
}

export default App
