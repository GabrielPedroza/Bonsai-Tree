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
const gsap_core_1 = __importDefault(require("gsap/gsap-core"));
require("./navbar.scss");
const Screen_Shot_2022_02_23_at_1_15_36_PM_removebg_preview_png_1 = __importDefault(require("../../../public/Screen_Shot_2022-02-23_at_1.15.36_PM-removebg-preview.png"));
const react_router_dom_1 = require("react-router-dom");
const Menu = () => {
    let ref = (0, react_1.useRef)(null);
    let ref2 = (0, react_1.useRef)(null);
    let ref3 = (0, react_1.useRef)(null);
    let ref4 = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        gsap_1.default.from([ref, ref2, ref3, ref4], {
            y: 30,
            delay: 0.2,
            duration: 0.3,
            opacity: 0,
            ease: gsap_core_1.default.easeInOut,
            stagger: 0.2,
        });
    }, []);
    return (<>
			<a ref={(el) => (ref = el)} href='#home'>
				Home
			</a>
			<a ref={(el) => (ref2 = el)} href='#history'>
				History
			</a>
			<a ref={(el) => (ref3 = el)} href='#benefits'>
				Benefits
			</a>
			<a ref={(el) => (ref4 = el)} href='#testimonials'>
				Testimonials
			</a>
		</>);
};
const Navbar = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const signinNavigate = (0, react_router_dom_1.useNavigate)();
    const signupNavigate = (0, react_router_dom_1.useNavigate)();
    let signupRef = (0, react_1.useRef)(null);
    let signinRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        gsap_1.default.from([signupRef, signinRef], {
            x: 30,
            delay: 1.1,
            duration: 0.3,
            opacity: 0,
            ease: gsap_core_1.default.easeInOut,
            stagger: 0.2,
        });
    }, []);
    const toggleMenu = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false);
    };
    return (<div className='c-navbar'>
			<div className='c-navbar__logo'>
				<img src={Screen_Shot_2022_02_23_at_1_15_36_PM_removebg_preview_png_1.default} alt='bonsai tree logo'/>
			</div>
			<div className='c-navbar__links'>
				<Menu />
			</div>
			<div className='c-navbar__buttons'>
				<a className='c-navbar__buttons c-navbar__buttons--signup' ref={(el) => (signupRef = el)} onClick={() => signupNavigate("/signup")}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Sign up
				</a>
				<a className='c-navbar__buttons c-navbar__buttons--signin' ref={(el) => (signinRef = el)} onClick={() => signinNavigate("/signin")}>
					Sign in
				</a>
			</div>
			<div className={`js-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<div className='js-navbar__burger'></div>
			</div>
		</div>);
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map