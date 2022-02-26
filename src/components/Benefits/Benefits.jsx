import React from "react"
import "./benefits.scss"

const Benefits = () => {
	return (
		<div className='l-HandB__container'>
			<h3 className='c-header'>Benefits</h3>
			<div className='c-header__container'>
				<img
					className='c-img l-img__benefits'
					src='/joe-petisce-tree-arts.jpeg'
					alt='The country of japan'
				/>
				<p className='c-desc c-desc__benefits'>
					The benefits are endless. It is proven to give you peace and
					prosperity when you are surrounded by any bonsai tree. It is also
					proven that it can give you patience because of how time-consuming it
					is to grow and maintain a tree.
				</p>
			</div>
		</div>
	)
}

export default Benefits
