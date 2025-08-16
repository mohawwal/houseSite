import { useRef } from "react";
import { gsap } from "gsap";
// import Wall from "../assets/images/Hero.png";
import PickUp1 from "../assets/images/Pickup1.png";
import RandomShapes from "../hooks/RandomShapes";
import { Building } from "lucide-react";
import HomeL1 from "../layers/HomeL1";
import HomeL3 from "../layers/HomeL3";
import HomeL2 from "../layers/HomeL2";
import HomeL4 from "../layers/HomeL4";
// import About from "../layers/About";
import WaitList from "../layers/WaitList";
import { useGSAP } from "@gsap/react";

const Home = () => {
	const TypingText = ({ text }) => {
		const textRef = useRef(null);
		const letters = Array.from(text);

		useGSAP(() => {
			if (textRef.current) {
				const spans = textRef.current.querySelectorAll('.letter');
				
				// Set initial state
				gsap.set(spans, { 
					opacity: 0, 
					y: '0.25em' 
				});

				// Animate letters with stagger
				gsap.to(spans, {
					opacity: 1,
					y: '0em',
					duration: 0.3,
					stagger: 0.05,
					ease: "power2.out"
				});
			}
		}, [text]);

		return (
			<p
				ref={textRef}
				className="font-poppins font-normal text-xs text-white w-[90%] max-w-[400px] px-4 mx-auto text-center"
			>
				{letters.map((char, index) => (
					<span
						key={index}
						className="letter"
						style={{ display: "inline-block" }}
					>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</p>
		);
	};

	const heroRef = useRef(null);
	const titleRef = useRef(null);
	const serviceCardRef = useRef(null);
	const arrowRef = useRef(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			// Hero section fade in
			gsap.fromTo(heroRef.current, 
				{ 
					opacity: 0 
				},
				{ 
					opacity: 1, 
					duration: 1,
					ease: "power2.out"
				}
			);

			// Title animation
			gsap.fromTo(titleRef.current,
				{
					opacity: 0,
					y: 50
				},
				{
					opacity: 1,
					y: 0,
					duration: 1,
					delay: 0.3,
					ease: "power2.out"
				}
			);

			gsap.fromTo(serviceCardRef.current,
				{
					x: 100,
					opacity: 0
				},
				{
					x: 0,
					opacity: 1,
					duration: 0.8,
					delay: 0.8,
					ease: "power2.out"
				}
			);

			if (arrowRef.current) {
				gsap.to(arrowRef.current, {
					y: 10,
					duration: 1,
					repeat: -1,
					yoyo: true,
					ease: "power2.inOut",
					delay: 1.2
				});
			}
		});

		return () => ctx.revert();
	}, []);

	return (
		<div>
			<div className="rounded-lg">
				<div ref={heroRef} className="relative w-full overflow-hidden">
					<img
						src={`https://plus.unsplash.com/premium_photo-1710104938455-33e4f4ebbee3?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
						alt="Hero"
						className="w-full object-cover md:h-[100vh] h-[80vh]"
					/>

					<div className="absolute inset-0 bg-blue-950 bg-opacity-50 z-10"></div>
					<RandomShapes count={25} />

					<div className="absolute inset-0 flex items-center flex-col gap-7 md:mt-[34vh] mt-[25vh] z-20 px-4 text-center">
						<h1 
							ref={titleRef}
							className="text-white lg:px-56 font-roboto font-semibold text-3xl md:text-5xl lg:text-[58px] tracking-wide leading-snug whitespace-pre-line"
						>
							SMARTER ESTATE <br /> SERVICE FOR YOUR .BUILD .PAY .
							<span className="text-orange-500">MOVE</span>
						</h1>
						<TypingText text="-- Experience a seamless way to send, receive, and pay all through BLIND's secure TRAVEL Portal network. --" />
						<div ref={arrowRef} className="hidden md:block mt-32">
							<svg
								className="w-6 h-6 text-orange-500"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</div>
					<div 
						ref={serviceCardRef}
						className="flex items-center justify-center absolute bottom-0 right-0 m-4 z-50"
					>
						<div className="gap-4 px- bg-white rounded-2xl flex flex-row items-center justify-around h-[40px]">
							<img
								src={PickUp1}
								alt="service"
								className="w-[34px] h-[34px] bg-orange-400 ml-2 rounded-full mb-6 border border-white border-e-2"
							/>
							<div className="leading-tight flex-grow">
								<h1 className="font-poppins font-semibold text-gray-700">
									Swift Collection
								</h1>
								<p className="font-poppins text-xs text-gray-500">
									Picked up from the seller
								</p>
							</div>
							<button className="bg-blue-950 mr-2 ml-5 w-[33px] h-[33px] flex justify-center items-center text-white rounded-full">
								<Building
									color="white"
									width="15px"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>

			<HomeL1 />

			<HomeL2 />

			<HomeL3 />

			<HomeL4 />

			{/* <section id="about">
				<About />
			</section> */}
			<section id="waitList">
				<WaitList />
			</section>
		</div>
	);
};

export default Home;