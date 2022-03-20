import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from "./App.jsx"
import Signin from "./pages/Signin.js"
import Signup from "./pages/Signup.js"
import Error from "./pages/Error.js"
import BuyBonsai from "./pages/BuyBonsai.jsx"

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/buyBonsai' element={<BuyBonsai />} />
				<Route path='*' element={<Error />} /> /* 404 on any query that's not
				the Routed above */
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
)
