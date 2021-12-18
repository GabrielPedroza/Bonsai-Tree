import * as THREE from "three"
import Sizes from "./Utils/Sizes"
import EventEmitter from "./Utils/EventEmitter"
import Time from "./Utils/Time"
import Camera from "./Camera"

export default class Experience extends EventEmitter {
	constructor(canvas) {
		super()

		// Gave experience global access.
		// If you do not like this, you can pass the *this* keyword in the parameter of whichever class you wish to use it and that will gain you access.
		// If you do not like neither, you can use a singleton.

		window.experience = this

		// Options
		this.canvas = canvas

		// Setup
		this.sizes = new Sizes()
		this.time = new Time()
		this.scene = new THREE.Scene()
		this.camera = new Camera()

		this.sizes.on("resize", () => {
			this.resize()
		})

		this.time.on("tick", () => {
			this.update()
		})
	}

	resize() {
		this.camera.resize()
	}

	update() {
		this.camera.update()
	}
}
