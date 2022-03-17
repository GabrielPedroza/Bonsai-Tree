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
const React = __importStar(require("react"));
const gsap_1 = __importDefault(require("gsap"));
const containers_1 = require("./containers");
const components_1 = require("./components");
const Experience_1 = __importDefault(require("./Experience/Experience"));
require("./App.scss");
require("./containers/Header/header.scss");
const WebGLExperience = () => {
    const canvas = React.useRef();
    React.useEffect(() => {
        let scheduledFrame;
        const experience = new Experience_1.default(canvas.current);
        const animate = () => {
            scheduledFrame = requestAnimationFrame(animate);
            experience.update();
        };
        requestAnimationFrame(animate);
        return () => {
            var _a, _b;
            cancelAnimationFrame(scheduledFrame);
            (_b = (_a = experience.dispose) === null || _a === void 0 ? void 0 : _a.call(experience)) !== null && _b !== void 0 ? _b : console.error("The experience was not able to dispose on render");
        };
    }, []);
    return <canvas ref={canvas}/>;
};
const App = () => {
    let ref = React.useRef(null);
    React.useEffect(() => {
        gsap_1.default.to(ref, {
            duration: 0,
            css: {
                visibility: "visible",
            },
        });
    }, []);
    return (<div ref={(el) => (ref = el)} className='l-main-container'>
			<div className='l-background-color'>
				<components_1.Navbar />
				<WebGLExperience />
			</div>
			
			<div className='l-flex__info l-container__info'>
				<components_1.History />
				<components_1.Benefits />
			</div>
			<components_1.Testimonials />
			<components_1.CTA />
			<containers_1.Footer />
		</div>);
};
exports.default = App;
//# sourceMappingURL=App.js.map