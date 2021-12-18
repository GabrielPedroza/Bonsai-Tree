import * as THREE from "three"
import EventEmitter from "./Utils/EventEmitter"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default class Camera extends EventEmitter {
	constructor() {
		super()

		this.experience = window.experience
		this.sizes = this.experience.sizes
		this.scene = this.experience.scene
		this.camera = this.experience.camera
		this.canvas = this.experience.canvas

		this.setInstance()
		this.setControls()
	}

	setInstance() {
		this.instance = new THREE.PerspectiveCamera(
			35,
			this.sizes.width / this.sizes.height,
			0.1,
			100
		)
		this.instance.position.set(0, 2, 8)
		this.scene.add(this.instance)
	}

	setControls() {
		this.controls = new OrbitControls(this.instance, this.canvas)
		this.controls.enableDamping = true
	}

	resize() {
		this.sizes = this.experience.sizes
		this.instance.aspect = this.sizes.width / this.sizes.height
		this.instance.updateProjectionMatrix()
	}

	update() {
		this.controls.update()
	}
}
