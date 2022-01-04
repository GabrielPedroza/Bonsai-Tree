import React from "react"
import "./header.scss"
import "../../App.scss"

const Header = () => {
	return (
		<div className='l-container'>
			<h1 className='c-header__header'>Sacred Bonsai Tree</h1>
			<p className='c-header__header__desc'>
				{/* incorrect BEM cutting a corner */}
				Fully-matured and healthy, we, <b>Bonsai Premium Design</b>, are selling
				a limited supply of <i>10 unique trees</i>. Being a family-owned
				business, we have strived and achieved a 100% organic business. We are
				committed to providing the highest quality of products and services.
			</p>
		</div>
	)
}

export default Header
