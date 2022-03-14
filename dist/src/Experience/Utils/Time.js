"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_js_1 = __importDefault(require("./EventEmitter.js"));
class Time extends EventEmitter_js_1.default {
    constructor() {
        super();
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;
        window.requestAnimationFrame(() => {
            this.tick();
        });
    }
    tick() {
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;
        this.trigger("tick");
        window.requestAnimationFrame(() => {
            this.tick();
        });
    }
}
exports.default = Time;
//# sourceMappingURL=Time.js.map