"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_js_1 = __importDefault(require("./EventEmitter.js"));
class Sizes extends EventEmitter_js_1.default {
    constructor(_canvas) {
        super();
        this.$sizeViewport = _canvas;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
        this.$mq1 = window.matchMedia("(min-width: 1349px)");
        window.addEventListener("resize", () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.trigger("resize");
        });
    }
}
exports.default = Sizes;
//# sourceMappingURL=Sizes.js.map