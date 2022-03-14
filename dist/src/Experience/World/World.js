"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Experience_js_1 = __importDefault(require("../Experience.js"));
const Environment_js_1 = __importDefault(require("./Environment.js"));
const Floor_js_1 = __importDefault(require("./Floor.js"));
const Bonsai_js_1 = __importDefault(require("./Bonsai.js"));
class World {
    constructor() {
        this.experience = new Experience_js_1.default();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.resources.on("ready", () => {
            this.floor = new Floor_js_1.default();
            this.Bonsai = new Bonsai_js_1.default();
            this.environment = new Environment_js_1.default();
        });
    }
}
exports.default = World;
//# sourceMappingURL=World.js.map