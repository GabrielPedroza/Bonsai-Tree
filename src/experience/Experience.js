import * as THREE from "three"
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from "./Camera.js"
import Renderer from "./Renderer"
import World from "./World/World.js"

let instance = null
export default class Experience {
	constructor(_canvas) {
		// Global access
		window.experience = this

		// Options
		this.canvas = _canvas

		// Setup
		this.sizes = new Sizes(_canvas)
		this.time = new Time()
		this.scene = new THREE.Scene()
		this.camera = new Camera()
		this.renderer = new Renderer()
		this.world = new World()

		// Resize event
		this.sizes.on("resize", () => {
			this.resize()
		})

		// Time tick event
		this.time.on("tick", () => {
			this.update()
		})
	}

	resize() {
		this.camera.resize()
		this.renderer.resize()
	}

	update() {
		this.camera.update()
		this.renderer.update()
	}
}
