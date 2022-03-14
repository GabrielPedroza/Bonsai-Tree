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
const react_1 = __importStar(require("react"));
const gsap_1 = __importDefault(require("gsap"));
const ScrollTrigger_1 = __importDefault(require("gsap/ScrollTrigger"));
const gsap_core_1 = __importDefault(require("gsap/gsap-core"));
require("./benefits.scss");
const Benefits = () => {
    gsap_1.default.registerPlugin(ScrollTrigger_1.default);
    (0, react_1.useEffect)(() => {
        gsap_1.default.from(["#l-benefits__ref", "#l-benefits__desc--ref"], {
            scrollTrigger: "#l-benefits__ref",
            y: 30,
            delay: 0.5,
            duration: 0.5,
            opacity: 0,
            ease: gsap_core_1.default.easeInOut,
            stagger: 0.3,
        });
    }, []);
    return (<div className='l-HandB__container'>
			<h3 className='c-header' id='l-benefits__ref'>
				Benefits
			</h3>
			<div className='c-header__container--benefits'>
				<img className='c-img__benefits' id='l-img__benefits' src='/joe-petisce-tree-arts.jpeg' alt='The country of japan'/>
				<p className='c-desc c-desc__benefits' id='l-benefits__desc--ref'>
					The benefits are endless. It is proven to give you peace and
					prosperity when you are surrounded by any bonsai tree. It is also
					proven that it can give you patience because of how time-consuming it
					is to grow and maintain a tree.
				</p>
			</div>
		</div>);
};
exports.default = Benefits;
//# sourceMappingURL=Benefits.js.map