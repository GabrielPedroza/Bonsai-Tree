import React from "react"
import { Header, History, Footer } from "./containers"
import { Navbar, Benefits, CTA, Testimonials } from "./components"
import "./App.scss"

const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<History />
			<Benefits />
			<Testimonials />
			<CTA />
			<Footer />
		</div>
	)
}

export default App
