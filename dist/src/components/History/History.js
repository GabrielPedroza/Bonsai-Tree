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
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
const gsap_core_1 = __importDefault(require("gsap/gsap-core"));
require("./history.scss");
const History = () => {
    gsap_1.default.registerPlugin(ScrollTrigger_1.ScrollTrigger);
    (0, react_1.useEffect)(() => {
        gsap_1.default.from(["#l-header__ref", "#l-header__desc--ref"], {
            scrollTrigger: "#l-header__ref",
            y: 30,
            delay: 0.5,
            duration: 0.5,
            opacity: 0,
            ease: gsap_core_1.default.easeInOut,
            stagger: 0.3,
        });
    }, []);
    return (<div className='l-HandB__container'>
			<h3 className='c-header' id='l-header__ref'>
				History
			</h3>
			<div className='c-header__container'>
				<img className='c-img__history' src='/TkUR4G.jpeg' alt='The country of japan'/>
				<p className='c-desc' id='l-header__desc--ref'>
					Bonsai is a Japanese word meaning "tree" and is a Japanese plant that
					is native to Japan. It is a type of flowering plant with a large,
					upright stem and a large, round fruit. The flowers are usually white,
					but can also be yellow or orange. There are rare occurrences when
					flowers are pink.
				</p>
			</div>
		</div>);
};
exports.default = History;
//# sourceMappingURL=History.js.map