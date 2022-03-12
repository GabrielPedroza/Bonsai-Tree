import * as THREE from "three"
import Experience from "../Experience.js"

export default class Bonsai {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		this.debug = this.experience.debug

		// Resource
		this.resource = this.resources.items.bonsaiTree

		this.setModel()
	}

	setModel() {
		this.model = this.resource.scene
		this.model.scale.set(1.2, 1.2, 1.2)
		this.model.position.set(0, -1, 0)
		this.scene.add(this.model)

		this.model.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.castShadow = true
			}
		})
	}
}
