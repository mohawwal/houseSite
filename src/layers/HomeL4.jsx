import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const HomeL4 = () => {
	const sectionRef = useRef(null);
	const leftCardRef = useRef(null);
	const rightCardRef = useRef(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(leftCardRef.current,
				{
					opacity: 0,
					y: 40
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: "power2.out",
					scrollTrigger: {
						trigger: leftCardRef.current,
						start: "top 70%",
						toggleActions: "play none none reverse"
					}
				}
			);

			gsap.fromTo(rightCardRef.current,
				{
					opacity: 0,
					y: 40
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: "power2.out",
					scrollTrigger: {
						trigger: rightCardRef.current,
						start: "top 70%",
						toggleActions: "play none none reverse"
					}
				}
			);

			leftCardRef.current.addEventListener('mouseenter', () => {
				gsap.to(leftCardRef.current, {
					scale: 1.02,
					duration: 0.3,
					ease: "power2.out"
				});
			});

			leftCardRef.current.addEventListener('mouseleave', () => {
				gsap.to(leftCardRef.current, {
					scale: 1,
					duration: 0.3,
					ease: "power2.out"
				});
			});

			rightCardRef.current.addEventListener('mouseenter', () => {
				gsap.to(rightCardRef.current, {
					scale: 1.02,
					duration: 0.3,
					ease: "power2.out"
				});
			});

			rightCardRef.current.addEventListener('mouseleave', () => {
				gsap.to(rightCardRef.current, {
					scale: 1,
					duration: 0.3,
					ease: "power2.out"
				});
			});

		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={sectionRef} className="w-full p-4 bg-gray-200">
			<div className="mx-auto">
				<div className="w-full min-h-[50vh] flex flex-col lg:flex-row gap-6">
					<div
						ref={leftCardRef}
						className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl group"
					>
						<div className="absolute inset-0">
							<img
								src={`https://plus.unsplash.com/premium_photo-1678172258976-4d793f083b55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
								alt="Diverse business solutions"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-pink-700 bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>
						</div>

						<div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12 text-white">
							<h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
								Built to be
								<span className="block text-yellow-300">Diverse</span>
							</h2>
							<p className="text-sm lg:text-base leading-relaxed font-medium opacity-95 max-w-md">
								Whether you're a social seller, online store, retail brand, or logistics company,
								<span className="font-semibold text-yellow-200">
									{" "}
									BLIND gives you the tools to scale smarter.
								</span>{" "}
								We welcome real estate owners and community hubs to host Portals and grow with us.
							</p>
						</div>
					</div>

					<div
						ref={rightCardRef}
						className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl group"
					>
						<div className="absolute inset-0">
							<img
								src={`https://plus.unsplash.com/premium_photo-1678172259039-ecdde7744c17?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
								alt="Fast delivery service"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-green-800 bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>
						</div>

						<div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12 text-white lg:text-right">
							<h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
								Lightning
								<span className="block text-yellow-300">Fast Delivery</span>
							</h2>
							<p className="text-sm lg:text-base leading-relaxed font-medium opacity-95 max-w-md lg:ml-auto">
								Get packages to customers quickly through
								<span className="font-semibold text-yellow-200">
									{" "}
									doorstep delivery or convenient TRAVEL Portals.
								</span>{" "}
								We prioritize speed without compromising reliability.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeL4;