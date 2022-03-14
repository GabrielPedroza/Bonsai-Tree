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
class Floor {
    constructor() {
        this.experience = new Experience_js_1.default();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.debug = this.experience.debug;
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder("floor");
        }
        this.setGeometry();
        this.setTextures();
        this.setMaterial();
        this.setMesh();
    }
    setGeometry() {
        this.geometry = new THREE.PlaneGeometry(2.5, 1.5, 100);
    }
    setTextures() {
        this.textures = {};
        this.textures.color = this.resources.items.pebblesColorTexture;
        this.textures.color.encoding = THREE.sRGBEncoding;
        this.textures.color.repeat.set(3, 3);
        this.textures.color.wrapS = THREE.RepeatWrapping;
        this.textures.color.wrapT = THREE.RepeatWrapping;
        this.textures.normal = this.resources.items.pebblesNormalTexture;
        this.textures.normal.repeat.set(3, 3);
        this.textures.normal.wrapS = THREE.RepeatWrapping;
        this.textures.normal.wrapT = THREE.RepeatWrapping;
        this.textures.ao = this.resources.items.pebblesAOTexture;
        this.textures.ao.repeat.set(3, 3);
        this.textures.ao.wrapS = THREE.RepeatWrapping;
        this.textures.ao.wrapT = THREE.RepeatWrapping;
        this.textures.height = this.resources.items.pebblesHeightTexture;
        this.textures.height.repeat.set(3, 3);
        this.textures.height.wrapS = THREE.RepeatWrapping;
        this.textures.height.wrapT = THREE.RepeatWrapping;
        this.textures.roughness = this.resources.items.pebblesRoughnessTexture;
        this.textures.roughness.repeat.set(3, 3);
        this.textures.roughness.wrapS = THREE.RepeatWrapping;
        this.textures.roughness.wrapT = THREE.RepeatWrapping;
    }
    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            normalMap: this.textures.normal,
            aoMap: this.textures.ao,
            displacementMap: this.textures.height,
            displacementScale: 0.14,
            roughnessMap: this.textures.roughness,
            metalness: 0,
        });
    }
    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.rotation.x = -Math.PI * 0.5;
        this.mesh.position.x = -0.286;
        this.mesh.position.y = -0.9;
        this.mesh.position.z = 0.083;
        this.mesh.receiveShadow = true;
        if (this.debug.active) {
            this.debugFolder
                .add(this.mesh.position, "x")
                .min(-5)
                .max(5)
                .step(0.001)
                .name("floorX");
        }
        if (this.debug.active) {
            this.debugFolder
                .add(this.mesh.position, "y")
                .min(-5)
                .max(5)
                .step(0.001)
                .name("floorY");
        }
        if (this.debug.active) {
            this.debugFolder
                .add(this.mesh.position, "z")
                .min(-5)
                .max(5)
                .step(0.001)
                .name("floorZ");
        }
        this.mesh.geometry.setAttribute("uv2", new THREE.Float32BufferAttribute(this.mesh.geometry.attributes.uv.array, 2));
        this.scene.add(this.mesh);
    }
}
exports.default = Floor;
//# sourceMappingURL=Floor.js.map