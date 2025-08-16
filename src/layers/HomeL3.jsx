import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BLINDServices = [
	{
		title: "TRAVEL Delivery & Pickup",
		context:
			"BLIND offers flexible TRAVEL delivery options tailored to your needs. Choose between doorstep delivery or secure smart Portals located throughout the city. For instance, delivering a package to a customer in Ikeja may cost ₦2000 for doorstep service, while using a Portal at Shoprite costs just ₦500. Recipients can collect their TRAVELs at their convenience, especially if they pass the Portal on their daily route. BLIND also provides home and business pickups, eliminating the hassle of visiting a drop-off center. Whether you're sending a gift to a friend or shipping an item across town, BLIND makes delivery simple, affordable, and dependable.",
		image: "Staff2",
	},
	{
		title: "Secure Delivery for High-Value Items",
		context:
			"Many people hesitate to ship valuable items like phones, laptops, or other electronics due to theft concerns. At BLIND, we understand that trust and security are non-negotiable. That's why our smart Portals are an ideal solution for high-value deliveries. Only the recipient has access to the Portal via a unique code or mobile app authorization, ensuring that sensitive items remain untouched until retrieved. Whether you're a vendor sending a new iPhone or a customer expecting a premium gadget, you can count on BLIND's Portals to provide private, secure, and tamper-proof delivery.",
		image: "Portal4",
	},
	{
		title: "Support for Social Vendors",
		context:
			"BLIND supports small businesses and online vendors operating through WhatsApp, Instagram, and other social platforms. With just a few taps, vendors can schedule pickups directly from their home or store. Once confirmed, our logistics team collects the TRAVEL and delivers it to the customer's doorstep or a nearby Portal. This streamlined process saves time, reduces logistics stress, and allows vendors to focus on engaging with customers and growing their brand. Every delivery is fast, safe, and fully trackable.",
		image: "Staff3",
	},
	{
		title: "Business Integration via API",
		context:
			"Businesses can integrate BLIND's delivery network seamlessly into their platforms using our powerful API. Whether you run an e-commerce website or a physical store with online orders, you can automate delivery scheduling, pickups, and real-time tracking. Customers benefit from options like Portal delivery and time-specific drop-offs, while your brand delivers a professional, tech-driven experience. It's logistics made smart and scalable.",
		image: "Staff7",
	},
	{
		title: "Scheduled & Tracked Deliveries",
		context:
			"BLIND lets you take control of when and how deliveries happen. Need a package dropped off after work or early in the morning before leaving home? No problem. You can schedule both Portal and doorstep deliveries to fit your lifestyle. Plus, with real-time tracking via our mobile app, you'll always know where your TRAVEL is. This transparency builds trust and ensures every delivery meets your expectations.",
		image: "Staff1",
	},
	{
		title: "Citywide Coverage Across Lagos",
		context:
			"BLIND operates a robust and growing delivery network throughout Lagos — from residential estates in Lekki and Yaba to bustling business hubs like Ikeja and Victoria Island. Our strategically placed Portals in malls and major transit points, combined with experienced riders, ensure quick and accessible deliveries across the city. Whether you're a business sending out daily orders or a resident shipping a gift, BLIND brings reliable logistics closer to you.",
		image: "Staff4",
	},
];

const Services = () => {
	const imageMap = {
		Staff1: `https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
		Staff4: `https://plus.unsplash.com/premium_photo-1689609950069-2961f80b1e70?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
		Staff2: `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
		Staff3: `https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
		Staff7: `https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
		Portal4: `https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
	};

	const [expandedCards, setExpandedCards] = useState({});
	const scrollContainerRef = useRef(null);
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const cardsRef = useRef(null);
	const buttonsRef = useRef(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse"
				}
			});

			// Simple title fade up
			tl.fromTo(titleRef.current,
				{
					y: 30,
					opacity: 0
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: "power2.out"
				}
			);

			// Cards slide in from bottom with stagger
			tl.fromTo(cardsRef.current.children,
				{
					y: 50,
					opacity: 0
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.1,
					ease: "power2.out"
				},
				"-=0.4"
			);

			// Buttons fade in
			tl.fromTo(buttonsRef.current,
				{
					opacity: 0
				},
				{
					opacity: 1,
					duration: 0.5,
					ease: "power2.out"
				},
				"-=0.2"
			);

		}, sectionRef);

		return () => ctx.revert();
	}, []);

	const toggleExpanded = (index) => {
		setExpandedCards((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const scroll = (direction) => {
		if (scrollContainerRef.current) {
			const scrollAmount = 320;
			scrollContainerRef.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth'
			});
		}
	};

	const shouldShowLearnMore = (text) => text.length > 150;

	return (
		<div ref={sectionRef} className="w-full min-h-[80vh] relative bg-black">
			<style jsx>{`
				/* CSS Animations */
				.service-card {
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}
				
				.service-card:hover {
					transform: scale(1.05) translateY(-8px);
					box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
				}
				
				.service-image {
					transition: transform 0.3s ease;
				}
				
				.service-card:hover .service-image {
					transform: scale(1.05);
				}
				
				.service-title {
					transition: color 0.2s ease;
				}
				
				.service-card:hover .service-title {
					color: #172554;
				}
				
				.learn-more-btn {
					transition: color 0.2s ease, transform 0.2s ease;
				}
				
				.learn-more-btn:hover {
					color: #1d4ed8;
					transform: translateX(4px);
				}
				
				.scroll-btn {
					transition: all 0.3s ease;
				}
				
				.scroll-btn:hover {
					transform: scale(1.1);
					box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
				}
				
				.scroll-btn-icon {
					transition: color 0.2s ease;
				}
				
				.scroll-btn:hover .scroll-btn-icon {
					color: #2563eb;
				}
				
				/* Hide scrollbar */
				.scrollbar-hide {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}
			`}</style>

			<div className="max-w-7xl mx-auto py-16">
				<div className="text-center mb-5 py-6">
					<h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white mb-4 font-roboto">
						OUR SERVICES
					</h1>
				</div>

				<div className="relative">
					<div 
						ref={scrollContainerRef}
						className="overflow-x-auto scrollbar-hide pb-4 px-4"
					>
						<div ref={cardsRef} className="flex gap-6 w-max">
							{BLINDServices.map((service, index) => {
								const isExpanded = expandedCards[index];
								const truncatedText = service.context.substring(0, 150);
								const showLearnMore = shouldShowLearnMore(service.context);

								return (
									<div
										key={index}
										className="service-card group relative sm:w-80 w-[290px] h-auto min-h-96 rounded-2xl flex-shrink-0"
									>
										<div className="relative h-full flex flex-col bg-white rounded-3xl shadow-lg">
											<div className="service-image">
												<img
													src={imageMap[service.image]}
													alt={service.title}
													className="h-[150px] w-full object-cover rounded-3xl"
													loading="lazy"
												/>
											</div>

											<div className="p-4 pt-6 flex-1 flex flex-col">
												<h3 className="service-title text-xl font-bold text-black mb-4">
													{service.title}
												</h3>

												<p className="text-gray-600 text-xs leading-relaxed flex-grow">
													{isExpanded
														? service.context
														: showLearnMore
														? `${truncatedText}...`
														: service.context}
												</p>

												{showLearnMore && (
													<button
														className="px-2 py-5 text-start"
														onClick={() => toggleExpanded(index)}
													>
														<p className="learn-more-btn text-blue-950 font-medium">
															{isExpanded ? "Show Less" : "Learn More"}
														</p>
													</button>
												)}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div ref={buttonsRef} className="flex justify-center items-center mt-6 gap-4">
						<button
							onClick={() => scroll('left')}
							className="scroll-btn flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg"
						>
							<ChevronLeft 
								className="scroll-btn-icon w-6 h-6 text-gray-700" 
							/>
						</button>

						<button
							onClick={() => scroll('right')}
							className="scroll-btn flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg"
						>
							<ChevronRight 
								className="scroll-btn-icon w-6 h-6 text-gray-700" 
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;