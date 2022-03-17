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
const Debug_js_1 = __importDefault(require("./Utils/Debug.js"));
const Sizes_js_1 = __importDefault(require("./Utils/Sizes.js"));
const Time_js_1 = __importDefault(require("./Utils/Time.js"));
const Camera_js_1 = __importDefault(require("./Camera.js"));
const Renderer_js_1 = __importDefault(require("./Renderer.js"));
const World_js_1 = __importDefault(require("./World/World.js"));
const Resources_js_1 = __importDefault(require("./Utils/Resources.js"));
const sources_1 = __importDefault(require("./sources"));
let instance = null;
class Experience {
    constructor(_canvas) {
        if (instance) {
            return instance;
        }
        instance = this;
        window.experience = this;
        this.canvas = _canvas;
        this.debug = new Debug_js_1.default();
        this.sizes = new Sizes_js_1.default(_canvas);
        this.time = new Time_js_1.default();
        this.scene = new THREE.Scene();
        this.resources = new Resources_js_1.default(sources_1.default);
        this.camera = new Camera_js_1.default();
        this.renderer = new Renderer_js_1.default();
        this.world = new World_js_1.default();
        this.sizes.on("resize", () => {
            this.resize();
        });
        this.time.on("tick", () => {
            this.update();
        });
    }
    resize() {
        this.camera.resize();
        this.renderer.resize();
    }
    update() {
        this.camera.update();
        this.renderer.update();
    }
    destroy() {
        var _a, _b, _c, _d, _e, _f;
        this.sizes.off("resize");
        this.time.off("tick");
        this.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose();
                for (const key in child.material) {
                    const value = child.material[key];
                    if (value && typeof value.dispose === "function") {
                        value.dispose();
                    }
                }
            }
        });
        (_b = (_a = this.camera.controls) === null || _a === void 0 ? void 0 : _a.dispose()) !== null && _b !== void 0 ? _b : console.error("Controls not found on dispose");
        (_d = (_c = this.renderer.instance) === null || _c === void 0 ? void 0 : _c.dispose()) !== null && _d !== void 0 ? _d : console.error("Renderer not found on dispose");
        if (this.debug.active)
            (_f = (_e = this.debug.ui) === null || _e === void 0 ? void 0 : _e.destroy()) !== null && _f !== void 0 ? _f : console.error("Debug UI not found on dispose");
    }
}
exports.default = Experience;
//# sourceMappingURL=Experience.js.map