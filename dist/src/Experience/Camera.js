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
const Experience_js_1 = __importDefault(require("./Experience.js"));
const OrbitControls_js_1 = require("three/examples/jsm/controls/OrbitControls.js");
class Camera {
    constructor() {
        this.experience = new Experience_js_1.default();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.debug = this.experience.debug;
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder("camera");
        }
        this.setInstance();
        this.setControls();
    }
    setInstance() {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100);
        this.instance.position.set(3, 2, 11);
        this.scene.add(this.instance);
        if (this.debug.active) {
            this.debugFolder
                .add(this.instance.position, "x")
                .name("cameraPositionX")
                .min(-30)
                .max(30)
                .step(1);
        }
        if (this.debug.active) {
            this.debugFolder
                .add(this.instance.position, "y")
                .name("cameraPositionY")
                .min(-30)
                .max(30)
                .step(1);
        }
        if (this.debug.active) {
            this.debugFolder
                .add(this.instance.position, "z")
                .name("cameraPositionZ")
                .min(-30)
                .max(30)
                .step(1);
        }
    }
    setControls() {
        this.controls = new OrbitControls_js_1.OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;
    }
    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }
    update() {
        this.controls.update();
    }
}
exports.default = Camera;
//# sourceMappingURL=Camera.js.map