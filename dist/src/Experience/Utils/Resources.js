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
const GLTFLoader_js_1 = require("three/examples/jsm/loaders/GLTFLoader.js");
const EventEmitter_js_1 = __importDefault(require("./EventEmitter.js"));
class Resources extends EventEmitter_js_1.default {
    constructor(sources) {
        super();
        this.sources = sources;
        this.items = {};
        this.toLoad = this.sources.length;
        this.loaded = 0;
        this.setLoaders();
        this.startLoading();
    }
    setLoaders() {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader_js_1.GLTFLoader();
        this.loaders.textureLoader = new THREE.TextureLoader();
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
    }
    startLoading() {
        var _a, _b, _c, _d, _e, _f;
        for (const source of this.sources) {
            if (source.type === "gltfModel" || source.type === "glbModel") {
                (_b = (_a = this.loaders.gltfLoader) === null || _a === void 0 ? void 0 : _a.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                })) !== null && _b !== void 0 ? _b : console.error("GLTFLoader not found");
            }
            else if (source.type === "texture") {
                (_d = (_c = this.loaders.textureLoader) === null || _c === void 0 ? void 0 : _c.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                })) !== null && _d !== void 0 ? _d : console.error("TextureLoader not found");
            }
            else if (source.type === "cubeTexture") {
                (_f = (_e = this.loaders.cubeTextureLoader) === null || _e === void 0 ? void 0 : _e.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                })) !== null && _f !== void 0 ? _f : console.error("CubeTextureLoader not found");
            }
        }
    }
    sourceLoaded(source, file) {
        this.items[source.name] = file;
        this.loaded++;
        if (this.loaded === this.toLoad) {
            this.trigger("ready");
        }
    }
}
exports.default = Resources;
//# sourceMappingURL=Resources.js.map