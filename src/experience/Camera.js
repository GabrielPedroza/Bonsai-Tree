import * as THREE from "three"
import Experience from "./Experience.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export default class Camera {
	constructor() {
		this.experience = new Experience()
		this.sizes = this.experience.sizes
		this.scene = this.experience.scene
		this.canvas = this.experience.canvas
		this.debug = this.experience.debug

		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder("camera")
		}

		this.setInstance()
		this.setControls()
	}

	setInstance() {
		this.instance = new THREE.PerspectiveCamera(
			35,
			this.sizes.width / this.sizes.height,
			0.1,
			100000
		)

		this.instance.position.set(3, 2, 10)
		this.scene.add(this.instance)

		if (this.debug.active) {
			this.debugFolder
				.add(this.instance.position, "x")
				.name("cameraPositionX")
				.min(-30)
				.max(30)
				.step(1)
		}
		if (this.debug.active) {
			this.debugFolder
				.add(this.instance.position, "y")
				.name("cameraPositionY")
				.min(-30)
				.max(30)
				.step(1)
		}
		if (this.debug.active) {
			this.debugFolder
				.add(this.instance.position, "z")
				.name("cameraPositionZ")
				.min(-30)
				.max(30)
				.step(1)
		}
	}

	setControls() {
		this.controls = new OrbitControls(this.instance, this.canvas)
		this.controls.enableDamping = true
		this.controls.enableZoom = false
	}

	resize() {
		this.instance.aspect = this.sizes.width / this.sizes.height
		this.instance.updateProjectionMatrix()
	}

	update() {
		this.controls.update()
	}
}
