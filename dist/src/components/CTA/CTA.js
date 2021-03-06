"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./CTA.scss");
const CTA = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<div className='l-CTA__container'>
			<a className='c-CTA__button' onClick={() => navigate("/buyBonsai")}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				🌲Buy a Bonsai Tree🌲
			</a>
		</div>);
};
exports.default = CTA;
//# sourceMappingURL=CTA.js.map