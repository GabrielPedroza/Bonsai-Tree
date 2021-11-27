import React from "react"
import { Header, History, Footer } from "./containers"
import { Navbar, Benefits, CTA, Testimonials } from "./components"
import "./App.scss"

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
