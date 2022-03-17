import Experience from "../Experience.js"
import Environment from "./Environment.js"
import Floor from "./Floor.js"
import Bonsai from "./Bonsai.js"

export default class World {

	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		// Wait for resources
		this.resources.on("ready", () => {
			// Setup
			this.floor = new Floor()
			this.Bonsai = new Bonsai()
			this.environment = new Environment()
		})
	}
}
