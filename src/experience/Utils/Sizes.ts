import EventEmitter from "./EventEmitter.js"

export default class Sizes extends EventEmitter {

	$sizeViewport: HTMLCanvasElement
	width: number
	height: number
	pixelRatio: number
	$mq1: MediaQueryList

	constructor(_canvas: HTMLCanvasElement) {
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
