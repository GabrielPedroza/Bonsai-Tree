import * as THREE from "three"

export default class World {
	constructor() {
		this.experience = window.experience
		this.scene = this.experience.scene
		this.setInstance()
	}

	setInstance() {
		const materialProps = {
			color: 0xffffff,
		}

		const mesh = new THREE.Mesh(
			new THREE.BoxGeometry(1, 1, 1),
			new THREE.MeshBasicMaterial(materialProps)
		)

		this.scene.add(mesh)
	}
}
