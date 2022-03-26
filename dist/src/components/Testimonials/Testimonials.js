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
require("./testimonials.scss");
const Testimonial = ({ name, photo, review, displayNone }) => {
    return (<div className={`${displayNone} l-testimonial__container`}>
			<img className='c-testimonial__img' src={photo} alt='Image of person'/>
			<h3 className='c-testimonial__name'>{`${name} says...`}</h3>
			<p className='c-testimonial__review'>{review}</p>
			<span className='span-1'></span>
			<span className='span-2'></span>
			<span className='span-3'></span>
			<span className='span-4'></span>
		</div>);
};
Testimonial.defaultProps = {
    photo: "/random-person1.jpg",
    name: "Bob",
    review: "Love this! something is very cool and it is awesome but it may be so nice to own this and take care of this beautiful bonsai tree",
};
const Testimonials = () => {
    let ref = (0, react_1.useRef)();
    gsap_1.default.registerPlugin(ScrollTrigger_1.default);
    (0, react_1.useEffect)(() => {
        gsap_1.default.from(ref, {
            scrollTrigger: ref,
            y: 30,
            delay: 0.4,
            duration: 0.5,
            opacity: 0,
            ease: gsap_core_1.default.easeInOut,
        });
    }, []);
    return (<>
			<div className='l-testimonials__container'>
				<h2 ref={(el) => (ref = el)} className='c-testimonials__title'>
					Testimonials
				</h2>
				<div className='c-testimonials__container'>
					
					
					<Testimonial photo='/random-person1.jpg' name='John' review='This is an extraordinary tree that brings peace to me constantly when I am stressed out.' displayNone='l-testimonial__removed'/>
					<Testimonial photo='/random-person2.jpeg' name='Elon' review="This bonsai tree is amazing. This will be the first thing I send to Mars. I'm about to post this on twitter!"/>
					<Testimonial photo='/random-person3.jpeg' name='Andrew' review='This bonsai tree made me run for president and I successfully did it! I am the only president to be a veteran of both the Revolutionary War and the War of 1812!' displayNone='l-testimonial__removed'/>
					<Testimonial photo='/random-person4.jpeg' name='Barack' review='Let me be clear folks... this product... is genuinely amazing. God bless america for this creation.' displayNone='l-testimonial__removed'/>
					<Testimonial photo='/random-person5.jpeg' name='Ben' review="Ho ho ho! Yes! This is what I've been looking for in the newspaper!!!" displayNone='l-testimonial__removed'/>
					<Testimonial photo='/random-person6.jpeg' name='Doge' review='Woof woof woof! Woof woof woof woof woof woof woof. To the moon!'/>
					<Testimonial photo='/random-person7.jpeg' name='Shiba' review='I pretty much agree with everything Doge said but I am going to the moon with the bonsai tree instead.'/>
				</div>
			</div>
		</>);
};
exports.default = Testimonials;
//# sourceMappingURL=Testimonials.js.map