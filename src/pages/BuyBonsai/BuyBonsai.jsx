import React from "react"
import { useNavigate } from "react-router-dom"
import "./BuyBonsai.scss"

const BuyBonsai = () => {
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		setTimeout(() => {
			navigate("/")
			location.reload() // dirty fix for having gltf painted on the screen
		}, 3500)
	}

	const handleHome = (e) => {
		e.preventDefault()
		navigate("/")
		location.reload() // dirty fix for having gltf painted on the screen
	}

	return (
		<div className='l-bonsai__container'>
			<div className='l-flex-header'>
				<a href='' onClick={(e) => handleHome(e)} className='c-return__home'>
					GO TO HOME
				</a>
				<h1 className='l-bonsai__title'>Checkout Section</h1>
			</div>
			<form onSubmit={(e) => handleSubmit(e)} className='l-form__container'>
				<input
					placeholder='Cardholder name'
					autoFocus
					minLength='1'
					required
					className='l-bonsai__input'
				/>
				<input
					placeholder='Email'
					autoFocus
					minLength='1'
					required
					type='email'
					className='l-bonsai__input'
				/>
				<input
					id='ccn'
					type='tel'
					inputMode='numeric'
					pattern='[0-9\s]{13,19}' // Credit card number numbers (between 13-19 in total length) can have spaces in them
					autoComplete='cc-number'
					className='l-bonsai__input'
					maxLength='19'
					placeholder='xxxx xxxx xxxx xxxx'
				/>
				<input
					value='Confirm purchase'
					id='c-bonsai__submit'
					className='l-submit'
					type='submit'
					onClick={(e) => (e.target.value = "Loading...")}
				/>
			</form>
		</div>
	)
}

export default BuyBonsai
