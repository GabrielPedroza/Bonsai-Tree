import EventEmitter from "./EventEmitter.js"
export default class Sizes extends EventEmitter {
	constructor(_canvas) {
		super()

		// Viewport size
		this.viewport = {}
		this.root = document.documentElement
		this.$sizeViewport = _canvas
		this.$mq1 = window.matchMedia("(min-width: 650px)")

		// this.getComputedStyles()
		this.canvasQuery()

		// Resize event
		window.addEventListener("resize", () => this.resize())
	}

	/**
	 * Resize
	 */
	resize() {
		// this.getComputedStyles()
		this.canvasQuery()

		this.trigger("resize")
	}

	canvasQuery() {
		if (this.$mq1.matches) {
			this.$sizeViewport.style.width = "50%"
			this.$sizeViewport.style.height = "25em"
			this.$sizeViewport.style.margin = "0 1rem"
			this.$sizeViewport.style.float = "left"
			this.$sizeViewport.style.display = "block"
			this.$sizeViewport.style.borderRadius = "5px"
		} else {
			this.$sizeViewport.style.width = "93%"
			this.$sizeViewport.style.height = "67vh"
			this.$sizeViewport.style.margin = "0 auto"
			this.$sizeViewport.style.borderRadius = "5px"
		}
	}

	getComputedStyles() {
		/* unused method; kept for reference */
		let getCanvasWidth = getComputedStyle(this.root).getPropertyValue(
			variables.canvasWidth
		)
		let getCanvasHeight = getComputedStyle(this.root).getPropertyValue(
			variables.canvasHeight
		)
		let getCanvasMargin = getComputedStyle(this.root).getPropertyValue(
			variables.canvasMargin
		)
		this.root.style.setProperty(
			getCanvasWidth,
			this.$sizeViewport.style.width + "%"
		)
		this.root.style.setProperty(
			getCanvasHeight,
			this.$sizeViewport.style.height + "vh"
		)
		this.root.style.setProperty(
			getCanvasMargin,
			this.$sizeViewport.style.margin
		)
	}
}
