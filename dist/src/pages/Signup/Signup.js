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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./Signup.scss");
const Signup = () => {
    let [username, setUsername] = (0, react_1.useState)("");
    let [password, setPassword] = (0, react_1.useState)("");
    let [email, setEmail] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleChange = (e, type) => {
        if (type === "us")
            return setUsername((username = e.target.value));
        if (type === "pw")
            return setPassword((password = e.target.value));
        if (type === "em")
            return setEmail((email = e.target.value));
        console.error(`input type from param isn't us or pw. Input type ${type}`);
    };
    const handleSubmit = (e) => {
        return (console.log(`username: ${username}, password: ${password}`),
            e.preventDefault(),
            setTimeout(() => {
                navigate("/");
            }, 2000));
    };
    return (<div className='l-signin__container'>
			<form onSubmit={(e) => handleSubmit(e)} className='c-signin__container'>
				<label htmlFor='username' className='l-label'>
					Username:
				</label>
				<input autoFocus minLength='1' required type='text' id='username' className='l-input' onChange={(e) => handleChange(e, "us")}/>
				<label htmlFor='password' className='l-label'>
					Password:
				</label>
				<input type='password' id='password' minLength='1' required className='l-input' onChange={(e) => handleChange(e, "pw")} min={1}/>
				<label htmlFor='email' className='l-label'>
					email:
				</label>
				<input type='email' id='email' minLength='1' required className='l-input' onChange={(e) => handleChange(e, "em")} min={1}/>
				<input value='Log in' id='c-submit' className='l-submit' type='submit' onClick={(e) => (e.target.value = "Loading...")}/>
			</form>
		</div>);
};
exports.default = Signup;
//# sourceMappingURL=Signup.js.map