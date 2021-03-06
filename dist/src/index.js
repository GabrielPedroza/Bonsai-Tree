"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const App_jsx_1 = __importDefault(require("./App.jsx"));
const Signin_jsx_1 = __importDefault(require("./pages/Signin/Signin.jsx"));
const Signup_jsx_1 = __importDefault(require("./pages/Signup/Signup.jsx"));
const Error_jsx_1 = __importDefault(require("./pages/Error/Error.jsx"));
const BuyBonsai_jsx_1 = __importDefault(require("./pages/BuyBonsai/BuyBonsai.jsx"));
react_dom_1.default.render(<>
		<react_1.default.StrictMode>
			<react_router_dom_1.BrowserRouter>
				<react_router_dom_1.Routes>
					<react_router_dom_1.Route path='/' element={<App_jsx_1.default />}/>
					<react_router_dom_1.Route path='/signin' element={<Signin_jsx_1.default />}/>
					<react_router_dom_1.Route path='/signup' element={<Signup_jsx_1.default />}/>
					<react_router_dom_1.Route path='/buyBonsai' element={<BuyBonsai_jsx_1.default />}/>
					<react_router_dom_1.Route path='*' element={<Error_jsx_1.default />}/> /* 404 on any query that's not
					the Routed above */
				</react_router_dom_1.Routes>
			</react_router_dom_1.BrowserRouter>
		</react_1.default.StrictMode>
	</>, document.getElementById("root"));
//# sourceMappingURL=index.js.map