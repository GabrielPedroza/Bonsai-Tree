import * as THREE from "three"

import Debug from "./Utils/Debug.js"
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from "./Camera.js"
import Renderer from "./Renderer.js"
import World from "./World/World.js"
import Resources from "./Utils/Resources.js"
import type { ResourceStructure } from "./Utils/Resources"

import sources from "./sources"

let instance: Experience | null = null

declare global {
	interface Window {
		experience: Experience
	}
}

export default class Experience {
	canvas: HTMLCanvasElement
	debug: Debug
	sizes: Sizes
	time: Time
	scene: THREE.Scene
	resources: Resources
	camera: Camera
	renderer: Renderer
	world: World
	sources: ResourceStructure

	experience: Experience

	constructor(_canvas: any) {
		// Singleton
		if (instance) {
			return instance
		}
		instance = this

		// global access
		window.experience = this

		this.canvas = _canvas

		this.debug = new Debug()
		this.sizes = new Sizes(_canvas)
		this.time = new Time()
		this.scene = new THREE.Scene()
		this.resources = new Resources(sources)
		this.camera = new Camera()
		this.renderer = new Renderer()
		this.world = new World()

		this.sizes.on("resize", () => {
			this.resize()
		})

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

	dispose() {
		this.sizes.off("resize")
		this.time.off("tick")

		this.scene.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.geometry.dispose()

				// Loop through the material properties
				for (const key in child.material) {
					const value = child.material[key]
					value.dispose?.()
				}
			}
		})

		this.camera.controls?.dispose() ??
			console.error("Controls not found on dispose")
		this.renderer.instance?.dispose() ??
			console.error("Renderer not found on dispose")

		if (this.debug.active)
			this.debug.ui?.destroy() ?? console.error("Debug UI not found on dispose")
	}
}
