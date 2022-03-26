"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const BuyBonsai = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<div>
			<h1>BuyBonsai</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta
				aut praesentium animi doloribus blanditiis modi obcaecati consequuntur,
				itaque aliquid, porro, optio corrupti omnis assumenda? Sequi, accusamus
				voluptatum! Minima, laborum.
			</p>
			<a onClick={() => navigate("/")}>Home</a>
		</div>);
};
exports.default = BuyBonsai;
//# sourceMappingURL=BuyBonsai.js.map