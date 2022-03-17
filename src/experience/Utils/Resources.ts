import * as THREE from "three"
import { CubeTextureLoader, TextureLoader } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import EventEmitter from "./EventEmitter.js"

export type ResourceStructure = Array<{
	name: string
	type: "texture" | "glbModel" | "cubeTexture" | "gltfModel"
	path: any /* should be type string; used (string & string[]) to solve but doesn't make sense and breaks code from other files*/
}>

export default class Resources extends EventEmitter {
	sources: ResourceStructure

	items: { [name: string]: { [k: string]: any } }

	toLoad: number
	loaded: number

	loaders: { [name: string]: GLTFLoader | TextureLoader | CubeTextureLoader }

	constructor(sources: ResourceStructure) {
		super()

		this.sources = sources

		this.items = {}
		this.toLoad = this.sources.length
		this.loaded = 0

		this.setLoaders()
		this.startLoading()
	}

	setLoaders() {
		this.loaders = {}
		this.loaders.gltfLoader = new GLTFLoader()
		this.loaders.textureLoader = new THREE.TextureLoader()
		this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
	}

	startLoading() {
		for (const source of this.sources) {
			if (source.type === "gltfModel") {
				this.loaders.gltfLoader?.load(
					source.path,
					(file: { [k: string]: any }) => {
						this.sourceLoaded(source, file)
					}
				) ?? console.error("GLTFLoader not found")
			} else if (source.type === "texture") {
				this.loaders.textureLoader?.load(
					source.path,
					(file: { [k: string]: any }) => {
						this.sourceLoaded(source, file)
					}
				) ?? console.error("TextureLoader not found")
			} else if (source.type === "cubeTexture") {
				this.loaders.cubeTextureLoader?.load(
					source.path,
					(file: { [k: string]: any }) => {
						this.sourceLoaded(source, file)
					}
				) ?? console.error("CubeTextureLoader not found")
			}
		}
	}

	sourceLoaded(source: { name: string }, file: { [k: string]: any }) {
		this.items[source.name] = file

		this.loaded++

		if (this.loaded === this.toLoad) {
			this.trigger("ready")
		}
	}
}
