import Sizes from "./Utils/Sizes"

export default class Experience {
	constructor(canvas) {
		// Gives experience global access
		window.experience = this

		// Options
		this.canvas = canvas

		// Setup
		this.sizes = new Sizes()
	}
}
