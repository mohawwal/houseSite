import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package } from "lucide-react";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Message = () => {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const cardsRef = useRef(null);
	const imageRef = useRef(null);
	const serviceCardRef = useRef(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 70%",
					end: "bottom 20%",
					toggleActions: "play none none reverse"
				}
			});

			tl.fromTo(titleRef.current, 
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

			// Animate feature cards with staggered entrance from bottom
			tl.fromTo(cardsRef.current.children,
				{
					y: 80,
					opacity: 0
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.2,
					ease: "power2.out"
				},
				"-=0.5" // Start 0.5s before previous animation ends
			);

			// Animate main image with scale and fade
			tl.fromTo(imageRef.current,
				{
					scale: 0.8,
					opacity: 0,
					rotation: -5
				},
				{
					scale: 1,
					opacity: 1,
					rotation: 0,
					duration: 1.2,
					ease: "power2.out"
				},
				"-=0.8"
			);

			// Animate service card sliding in from right
			tl.fromTo(serviceCardRef.current,
				{
					x: 100,
					opacity: 0,
					scale: 0.9
				},
				{
					x: 0,
					opacity: 1,
					scale: 1,
					duration: 0.8,
					ease: "back.out(1.7)"
				},
				"-=0.4"
			);

			// Add subtle continuous animations
			gsap.to(imageRef.current, {
				y: -10,
				duration: 3,
				repeat: -1,
				yoyo: true,
				ease: "power2.inOut",
				delay: 2
			});

		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={sectionRef} className="bg-blue-50 py-5 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
					<div className="flex-1 lg:w-[62%] space-y-8">
						<h1 
							ref={titleRef}
							className="text-xl sm:text-3xl lg:w-[80%] w-full lg:text-4xl font-extrabold text-blue-950 leading-tight"
						>
							BUY AND SELL HOUSES WITHOUT STRESS
						</h1>

						<div ref={cardsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
							<div className="flex flex-col items-start space-y-3">
								<img
									src={`https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
									alt="Save time and money"
									className="w-10 h-10 rounded-lg"
								/>
								<p className="text-gray-600 text-xs md:text-sm leading-relaxed">
									Save time and money with BLIND's smart TRAVEL Portal network
									for all your delivery needs.
								</p>
							</div>

							<div className="flex flex-col items-start space-y-3">
								<img
									src={`https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
									alt="Avoid missed deliveries"
									className="w-10 h-10 rounded-lg"
								/>
								<p className="text-gray-600 text-xs md:text-sm leading-relaxed">
									Avoid missed deliveries and delays with our scheduled drop-off
									and pickup options, or choose instant Portal access for quick
									and convenient service.
								</p>
							</div>

							<div className="flex flex-col items-start space-y-3">
								<img
									src={`https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
									alt="Reliable infrastructure"
									className="w-10 h-10 rounded-lg"
								/>
								<p className="text-gray-600 text-xs md:text-sm leading-relaxed">
									Give your logistics team peace of mind with our reliable
									Portal infrastructure and multi-location support for seamless
									last-mile delivery.
								</p>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-[38%] lg:flex-shrink-0 relative">
						<img
							ref={imageRef}
							src={`https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
							alt="BLIND TRAVEL Portal system"
							className="w-full h-64 sm:h-80 lg:h-auto object-cover lg:object-contain rounded-lg shadow-lg"
						/>
						<div 
							ref={serviceCardRef}
							className="flex items-center justify-center absolute bottom-0 right-0 m-4 z-50"
						>
							<div className="gap-4 px- bg-white rounded-2xl flex flex-row items-center justify-around h-[40px]">
								<img
									src={`https://images.unsplash.com/photo-1553799296-2da61db672c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
									alt="service"
									className="w-[34px] h-[34px] bg-orange-400 ml-2 rounded-full mb-6 border border-white border-e-2"
								/>
								<div className="leading-tight flex-grow">
									<h1 className="font-poppins font-semibold text-gray-700">
										Secure Handling
									</h1>
									<p className="font-poppins text-xs text-gray-500">
										Sorted at our hub
									</p>
								</div>
								<button className="bg-blue-950 mr-2 ml-5 w-[33px] h-[33px] flex justify-center items-center text-white rounded-full">
									<Package
										color="white"
										width="15px"
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;