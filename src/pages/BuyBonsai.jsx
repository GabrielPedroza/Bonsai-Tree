import React from "react"
import { useNavigate } from "react-router-dom"

const BuyBonsai = () => {
	const navigate = useNavigate()

	return (
		<div>
			<h1>BuyBonsai</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta
				aut praesentium animi doloribus blanditiis modi obcaecati consequuntur,
				itaque aliquid, porro, optio corrupti omnis assumenda? Sequi, accusamus
				voluptatum! Minima, laborum.
			</p>
			<a onClick={() => navigate("/")}>Home</a>
		</div>
	)
}

export default BuyBonsai
