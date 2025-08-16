import { Mail, ArrowRight } from "lucide-react";

export default function WaitList() {
	return (
		<div className="bg-black flex items-center justify-center px-4 pt-6 pb-10 relative overflow-hidden">
			<div className="relative z-10 max-w-2xl mx-auto text-center py-14">
				<h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
					Build The Revolution
				</h1>

				<p className="text-sm sm:text-base text-slate-300 mb-4 max-w-lg mx-auto leading-relaxed">
					Be among the first to experience the future. Get exclusive early
					access, special perks, and insider updates on BLIND.
				</p>

				<div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-5 border border-white border-opacity-20 shadow-2xl">
					<div className="space-y-5">
						<div className="relative">
							<Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
							<input
								type="email"
								placeholder="Enter your email address"
								className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-sm"
								required
							/>
						</div>

            <div className="font-mono opacity-50 text-xs text-left text-white">
              Google Capture
            </div>

						<button
							type="button"
							className="w-full relative group bg-gradient-to-r from-blue-700 to-orange-400 hover:from-blue-600 hover:to-pink-600 text-white font-semibold py-3 px-7 rounded-xl transition-all duration-300 transform hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
						>
							<span className="flex items-center justify-center gap-2 text-sm">
								Join Waitlist
								<ArrowRight
									className={`w-4 h-4 transition-transform duration-300`}
								/>
							</span>
						</button>
					</div>

					<div className="mt-5 pt-5 border-t border-white border-opacity-20">
						<div className="flex items-center justify-center gap-2 text-slate-400">
							
							<span className="text-xs font-mono">
								Join 000,10 others waiting
							</span>
						</div>
					</div>
				</div>

				<div className="hidden mt-12 base:grid grid-cols-1 sm:grid-cols-3 gap-6">
					{[
						{ title: "Early Access", desc: "Be first to try new features" },
						{ title: "Exclusive Perks", desc: "Special discounts & bonuses" },
						{ title: "VIP Support", desc: "Priority customer service" },
					].map((feature, idx) => (
						<div
							key={idx}
							className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
						>
							<h3 className="text-white font-semibold mb-2">{feature.title}</h3>
							<p className="text-slate-400 text-xs">{feature.desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
