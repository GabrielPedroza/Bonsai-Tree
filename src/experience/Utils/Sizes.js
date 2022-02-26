import EventEmitter from "./EventEmitter.js"

export default class Sizes extends EventEmitter {
	constructor(_canvas) {
		super()

		// Setup
		this.$sizeViewport = _canvas
		this.width = window.innerWidth
		this.height = window.innerHeight
		this.pixelRatio = Math.min(window.devicePixelRatio, 2)
		this.$mq1 = window.matchMedia("(min-width: 1349px)")

		// Resize event
		window.addEventListener("resize", () => {
			this.width = window.innerWidth
			this.height = window.innerHeight
			this.pixelRatio = Math.min(window.devicePixelRatio, 2)

			this.trigger("resize")
		})
	}
}

/*
export default class Sizes extends EventEmitter {
	constructor(_canvas) {
		super()

		// Setup
		this.pixelRatio = Math.min(window.devicePixelRatio, 2)
		this.$sizeViewport = _canvas
		this.$mq1 = window.matchMedia("(min-width: 650px)")

		this.canvasQuery()

		// Resize event
		window.addEventListener("resize", () => this.resize())
	}

	resize() {
		this.canvasQuery()
		this.pixelRatio = Math.min(window.devicePixelRatio, 2)
		this.trigger("resize")
	}

	canvasQuery() {
		this.width
		this.height

		if (this.$mq1.matches) {
			this.width = this.$sizeViewport.style.width = "50%"
			this.height = this.$sizeViewport.style.height = "25em"
			this.$sizeViewport.style.margin = "0 1rem"
			this.$sizeViewport.style.float = "left"
			this.$sizeViewport.style.display = "block"
			this.$sizeViewport.style.borderRadius = "5px"
		} else {
			this.width = this.$sizeViewport.style.width = "100%"
			this.height = this.$sizeViewport.style.height = "67vh"
			this.$sizeViewport.style.margin = "0 auto"
			this.$sizeViewport.style.borderRadius = "5px"
		}
	}
}
 */
