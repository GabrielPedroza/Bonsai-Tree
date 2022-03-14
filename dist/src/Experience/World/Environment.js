"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = __importStar(require("three"));
const Experience_js_1 = __importDefault(require("../Experience.js"));
class Environment {
    constructor() {
        this.experience = new Experience_js_1.default();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.debug = this.experience.debug;
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder("environment");
        }
        this.setSunLight();
    }
    setSunLight() {
        this.sunLight = new THREE.DirectionalLight("#ffffff", 2.3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 15;
        this.sunLight.shadow.mapSize.set(1024, 1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(2, 4, -1.25);
        this.scene.add(this.sunLight);
        this.setAmbientLight = new THREE.AmbientLight("#eaddca", 1.5);
        this.scene.add(this.setAmbientLight);
        if (this.debug.active) {
            this.debugFolder
                .add(this.sunLight, "intensity")
                .name("sunLightIntensity")
                .min(0)
                .max(10)
                .step(0.001);
            this.debugFolder
                .add(this.sunLight.position, "x")
                .name("sunLightX")
                .min(-5)
                .max(5)
                .step(0.001);
            this.debugFolder
                .add(this.sunLight.position, "y")
                .name("sunLightY")
                .min(-5)
                .max(5)
                .step(0.001);
            this.debugFolder
                .add(this.sunLight.position, "z")
                .name("sunLightZ")
                .min(-5)
                .max(5)
                .step(0.001);
        }
    }
}
exports.default = Environment;
//# sourceMappingURL=Environment.js.map