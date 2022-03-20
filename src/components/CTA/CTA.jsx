import React from "react"
import { useNavigate } from "react-router-dom"

import "./CTA.scss"

const CTA = () => {
	const navigate = useNavigate()
	return (
		<div className='l-CTA__container'>
			<a className='c-CTA__button' onClick={() => navigate("/buyBonsai")}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				🌲Buy a Bonsai Tree🌲
			</a>
		</div>
	)
}

export default CTA
