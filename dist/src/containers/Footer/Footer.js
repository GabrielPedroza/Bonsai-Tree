"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./footer.scss");
const Footer = () => {
    return (<div className='l-footer__container'>
			<div className='c-footer__phone-number'>
				Questions? Call <span className='c-phone-number'>1-800-456-7890</span>
			</div>
			<div className='l-footer__info'>
				<a className='c-footer__info--hover' href='#faq'>
					FAQ
				</a>
				<a className='c-footer__info--hover' href='#account'>
					Account
				</a>
				<a className='c-footer__info--hover' href='#privacy-policy'>
					Privacy Policy
				</a>
				<a className='c-footer__info--hover' href='#terms'>
					Terms
				</a>
				<a className='c-footer__info--hover' href='#contact-us'>
					Contact Us
				</a>
				<a className='c-footer__info--hover' href='#help-center'>
					Help Center
				</a>
				<a className='c-footer__info--hover' href='#corporate-information'>
					Corporate Information
				</a>
				<a className='c-footer__info--hover' href='#careers'>
					Careers
				</a>
				<a className='c-footer__info--hover' href='#advertise'>
					Advertise
				</a>
				<a className='c-footer__info--hover' href='#legal-notice'>
					Legal Notice
				</a>
				<a className='c-footer__info--hover' href='#buy-gift-cards'>
					Buy Gift cards
				</a>
				<a className='c-footer__info--hover' href='#redeem-gift-cards'>
					Redeem Gift cards
				</a>
			</div>
		</div>);
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map