import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TableCellsMerge } from "lucide-react";
import DeliveryAnimation from "../components/DeliveryAnimation";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const sectionRef = useRef(null);
	const leftPanelRef = useRef(null);
	const rightPanelRef = useRef(null);
	const overlayRef = useRef(null);
	const textMobileRef = useRef(null);
	const textDesktopRef = useRef(null);
	const serviceCardRef = useRef(null);
	const deliveryAnimationMobileRef = useRef(null);
	const deliveryAnimationDesktopRef = useRef(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			// Create main timeline
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
					end: "bottom 25%",
					toggleActions: "play none none reverse"
				}
			});

			// Animate left panel sliding in from left
			tl.fromTo(leftPanelRef.current,
				{
					x: -100,
					opacity: 0
				},
				{
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}
			);

			// Animate right panel sliding in from right
			tl.fromTo(rightPanelRef.current,
				{
					x: 100,
					opacity: 0
				},
				{
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				},
				"-=0.7" // Start 0.7s before previous animation ends
			);

			// Animate overlay fade in
			tl.fromTo(overlayRef.current,
				{
					opacity: 0
				},
				{
					opacity: 1,
					duration: 0.8,
					ease: "power2.out"
				},
				"-=0.5"
			);

			// Animate mobile text with typing effect
			if (textMobileRef.current) {
				tl.fromTo(textMobileRef.current,
					{
						opacity: 0,
						y: 30,
						scale: 0.9
					},
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 1,
						ease: "back.out(1.7)"
					},
					"-=0.3"
				);
			}

			// Animate desktop text with slide up effect
			if (textDesktopRef.current) {
				tl.fromTo(textDesktopRef.current,
					{
						opacity: 0,
						y: 50,
						scale: 0.95
					},
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 1.2,
						ease: "power2.out"
					},
					"-=0.5"
				);
			}

			// Animate delivery animations with simple fade
			if (deliveryAnimationMobileRef.current) {
				tl.fromTo(deliveryAnimationMobileRef.current,
					{
						opacity: 0
					},
					{
						opacity: 1,
						duration: 0.8,
						ease: "power2.out"
					},
					"-=0.5"
				);
			}

			if (deliveryAnimationDesktopRef.current) {
				tl.fromTo(deliveryAnimationDesktopRef.current,
					{
						opacity: 0
					},
					{
						opacity: 1,
						duration: 0.8,
						ease: "power2.out"
					},
					"-=0.5"
				);
			}

			// Animate service card with slide and bounce
			tl.fromTo(serviceCardRef.current,
				{
					x: -120,
					y: 50,
					opacity: 0,
					scale: 0.8
				},
				{
					x: 0,
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 1,
					ease: "back.out(1.7)"
				},
				"-=0.4"
			);

			// Add subtle service card floating animation only
			gsap.to(serviceCardRef.current, {
				y: -3,
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: "power2.inOut",
				delay: 2
			});

		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={sectionRef} className="w-full h-[50vh] relative">
			<div className="w-full h-full flex flex-col md:flex-row font-poppins">
				<div ref={leftPanelRef} className="relative w-full md:w-1/2 h-[50vh] md:h-full">
					<img
						src={`https://plus.unsplash.com/premium_photo-1748729621135-57a3168c9fbd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
						alt="layer1"
						className="w-full h-full object-cover"
					/>
					<div ref={overlayRef} className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>

					<div className="absolute inset-0 bg-blue-950 bg-opacity-50 flex items-center justify-center md:hidden">
						<DeliveryAnimation />
						<p ref={textMobileRef} className="text-white text-center font-bold text-[18px] px-12">
							BLIND delivers your online orders to secure smart Portals across
							Lagos, giving you the freedom to pick up your package at your
							convenience, without address issues or missed riders.
						</p>
					</div>
				</div>

				<div ref={rightPanelRef} className="hidden md:flex w-1/2 h-full bg-orange-400 items-center justify-center relative">
					<DeliveryAnimation />

					<p ref={textDesktopRef} className="text-center md:px-20 px-7 text-blue-100 font-bold text-[20px] font-roboto z-10 relative">
						BLIND delivers your online orders to secure smart Portals across
						Lagos, giving you the freedom to pick up your package at your
						convenience, without address issues or missed riders.
					</p>
				</div>
			</div>
			<div ref={serviceCardRef} className="flex items-center justify-center shadow-sm absolute bottom-0 left-0 m-4 z-20">
				<div className="gap-4 px- bg-white rounded-2xl flex flex-row items-center justify-around h-[40px]">
					<img
						src={`https://plus.unsplash.com/premium_photo-1747602999654-f706f3a3133e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
						alt="service"
						className="w-[34px] h-[34px] bg-orange-500 ml-2 rounded-full mb-6 border border-white border-e-2"
					/>
					<div className="leading-tight flex-grow">
						<h1 className="font-poppins font-semibold text-gray-700">
							Seamless Drop-off
						</h1>
						<p className="font-poppins text-xs text-gray-500">
							Sent to Portal station
						</p>
					</div>
					<button className="bg-blue-950 mr-2 ml-5 w-[33px] h-[33px] flex justify-center items-center text-white rounded-full">
						<TableCellsMerge
							color="white"
							width="15px"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;