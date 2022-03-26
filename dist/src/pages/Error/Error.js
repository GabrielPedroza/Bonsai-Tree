"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Error() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<div>
			<h1>Error</h1>
			<p>
				Sorry, an error has occurred. Please head back to{" "}
				<a style={{ cursor: "pointer", color: "red" }} onClick={() => navigate("/")}>
					home
				</a>{" "}
				and try again.
			</p>
		</div>);
}
exports.default = Error;
//# sourceMappingURL=Error.js.map