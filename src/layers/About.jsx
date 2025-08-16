import state from "../assets/images/state.jpg";
import PassportIdCard from "../components/PassportIdCard";
import {
	Package,
	Truck,
	Zap,
	Leaf,
	Clock,
	Star,
	ArrowRight,
} from "lucide-react";

const benefits = [
	{
		title: "Comprehensive Business Solutions",
		description:
			"BLIND empowers every type of seller—from e-commerce stores to logistics providers—with intelligent tools designed to accelerate growth. Property owners can monetize their spaces by hosting smart Portals and earning passive income.",
	},
	{
		title: "Enhanced Customer Satisfaction",
		description:
			"Deliver exceptional experiences through secure Portal networks, instant pickup notifications, and flexible cash-on-delivery options. Build lasting customer relationships with reliable, trackable deliveries that exceed expectations.",
	},
	{
		title: "Optimized Delivery Operations",
		description:
			"Revolutionary AI-powered routing and strategic Portal placement dramatically reduce operational costs while eliminating failed deliveries. Provide customers with maximum convenience and delivery flexibility.",
	},
	{
		title: "Pioneer Africa's Logistics Revolution",
		description:
			"Join BLIND in transforming Nigeria's delivery landscape with cutting-edge logistics infrastructure. Partner with us to achieve faster deliveries, accelerate business growth, and spearhead the future of African e-commerce.",
	},
];

const About = () => {
	return (
		<div>
			<div className="py-10 flex items-center flex-col justify-center">
				<h1
					className="text-black font-extrabold text-center break-words leading-tight max-w-[95vw] mx-auto
					text-7xl sm:text-8xl xl:text-9xl"
				>
					Beyond <br /> The <br /> <span className="text-orange-500">Box</span>
				</h1>
				<div className="relative w-full min-h-[300px] sm:min-h-[320px] overflow-hidden bg-gray-50 p-4">
					<div className="bg-white">
						<PassportIdCard />
					</div>
					<section className="relative bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden opacity-10">
							<div className="absolute top-10 left-8 text-blue-600 rotate-12">
								<Package size={80} />
							</div>
							<div className="absolute top-20 right-12 text-orange-500 -rotate-45">
								<Truck size={120} />
							</div>
							<div className="absolute top-32 right-1/4 text-purple-500 rotate-90">
								<Zap size={90} />
							</div>
							<div className="absolute top-1/2 left-4 text-green-600 rotate-180">
								<Leaf size={85} />
							</div>
							<div className="absolute top-16 left-1/3 text-purple-600 -rotate-30">
								<Clock size={75} />
							</div>
							<div className="absolute bottom-40 left-2/2 text-blue-400 rotate-60">
								<Star size={70} />
							</div>
							<div className="absolute top-40 right-1/3 text-green-400 -rotate-60">
								<ArrowRight size={65} />
							</div>
						</div>

						<div className="relative max-w-4xl mx-auto">
							<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
								About BLIND
							</h2>

							<div className="space-y-4">
								<p className="text-gray-700 leading-relaxed text-sm sm:text-base">
									Founded in{" "}
									<span className="text-orange-700 font-medium">
										Lagos in 2025
									</span>
									, <strong className="text-gray-800">BLIND</strong> is a new
									kind of logistics company, designed to make e-commerce
									deliveries <strong>fast</strong>, <strong>reliable</strong>,
									and <strong>sustainable</strong>. We combine smart Portals,
									AI-driven delivery, and payment-on-pickup flexibility to solve
									the biggest pain points in African last-mile logistics:{" "}
									<em>missed deliveries</em>, <em>cash-on-delivery risks</em>,
									and <em>address challenges</em>.
								</p>

								<p className="text-gray-700 leading-relaxed text-sm sm:text-base">
									We are proud to own our entire experience—from building our
									Portal network to developing our mobile apps and AI systems.
									BLIND is powered by passionate engineers, drivers, customer
									success agents, and product teams who all believe in one
									mission:
									<span className="text-orange-600 font-medium">
										{" "}
										making delivery smarter and greener for everyone.
									</span>
								</p>
							</div>
						</div>
					</section>

					<div className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
						<div className="max-w-7xl mx-auto">
							<div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
								{benefits.map((item, index) => (
									<div
										key={index}
										className="flex flex-col sm:flex-row lg:flex-col items-start gap-3 sm:gap-4 p-4 sm:p-6 lg:p-4 rounded-lg transition-colors duration-200"
									>
										<div className="flex-shrink-0 mb-2 sm:mb-0 lg:mb-3">
											<img
												src={state}
												alt={item.title}
												className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 rounded-full object-cover"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="text-sm sm:text-base lg:text-sm font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-2 leading-tight">
												{item.title}
											</h3>
											<p className="text-xs sm:text-sm lg:text-xs text-gray-600 leading-relaxed">
												{item.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
