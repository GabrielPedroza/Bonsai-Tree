import EventEmitter from "./EventEmitter.js"

export default class Sizes extends EventEmitter {
	constructor(_canvas) {
		super()

		// Viewport size
		this.viewport = {}
		this.$sizeViewport = _canvas
		this.$sizeViewport.style.width = "40vw"
		this.$sizeViewport.style.height = "40vh"

		// Resize event
		window.addEventListener("resize", () => this.resize)

		this.resize()
	}

	/**
	 * Resize
	 */
	resize() {
		this.viewport.width = this.$sizeViewport.offsetWidth
		this.viewport.height = this.$sizeViewport.offsetHeight

		this.trigger("resize")
	}
}
