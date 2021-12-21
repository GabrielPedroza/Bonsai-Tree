import * as THREE from "three"

import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from "./Camera.js"

let instance = null

export default class Experience {
	constructor(_canvas) {
		console.log(_canvas)
		// Singleton
		if (instance) {
			return instance
		}
		instance = this

		// Global access
		window.experience = this

		// Options
		this.canvas = _canvas

		// Setup
		this.sizes = new Sizes()
		this.time = new Time()
		this.scene = new THREE.Scene()
		this.camera = new Camera()
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
		})

		this.rendererProperties()

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
		this.renderer.setSize(this.sizes.width, this.sizes.height)
		this.renderer.setPixelRatio(this.sizes.pixelRatio)
	}

	update() {
		this.camera.update()
		this.renderer.render(this.scene, this.camera.instance)
	}

	rendererProperties() {
		this.renderer.physicallyCorrectLights = true
		this.renderer.outputEncoding = THREE.sRGBEncoding
		this.renderer.toneMapping = THREE.CineonToneMapping
		this.renderer.toneMappingExposure = 1.75
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
		this.renderer.setClearColor("#211d20")
		this.renderer.setSize(this.sizes.width, this.sizes.height)
		this.renderer.setPixelRatio(this.sizes.pixelRatio)
	}
}
