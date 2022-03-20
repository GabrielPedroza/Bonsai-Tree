import React from "react"
import { useNavigate } from "react-router-dom"

function Error() {
	const navigate = useNavigate()
	return (
		<div>
			<h1>Error</h1>
			<p>
				Sorry, an error has occurred. Please head back to{" "}
				<a
					style={{ cursor: "pointer", color: "red" }}
					onClick={() => navigate("/")}>
					home
				</a>{" "}
				and try again.
			</p>
		</div>
	)
}

export default Error
