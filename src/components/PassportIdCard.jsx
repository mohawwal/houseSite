import { HandHeart, MapPin, Calendar, Star, Diamond } from "lucide-react";
import Profile from "../assets/images/Pickup3.png";
import Pickup5 from "../assets/images/Pickup5.jpg";

export default function PassportIdCard() {
	return (
		<div className="relative w-full h-[380px] overflow-hidden">
			<div className="relative z-10 mt-8 mx-auto max-w-lg">
				<div className="bg-black rounded-2xl p-6 shadow-2xl border border-white">
					<div className="flex items-center justify-between mb-4">
						<p className="text-yellow-500 text-xs font-normal tracking-wider">
							PREMIUM-ID
						</p>
						<div className="text-right">
							<p className="text-slate-300 text-xs font-mono">
								VERIFIED MEMBER
							</p>
						</div>
					</div>

					<div className="flex items-start gap-6">
						<div className="relative">
							<div className="w-20 h-20 flex items-center justify-center shadow-lg">
								<img
									src={Profile}
									alt=""
									className="object-cover w-full h-full rounded-2xl"
								/>
							</div>
							<div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
								<div className="w-2 h-2 bg-white rounded-full"></div>
							</div>
						</div>
						<div className="flex-1 space-y-3">
							<div>
								<h2 className="text-white text-sm font-bold tracking-wide">
									BLIND CARD
								</h2>
								<p className="text-slate-400 text-xs">Premium Member</p>
							</div>

							<div className="grid grid-cols-2 gap-3 text-sm">
								<div className="flex items-center gap-2">
									<Calendar className="w-4 h-4 text-blue-400" />
									<div>
										<p className="text-slate-400 w-full text-xs">Member Since</p>
										<p className="text-white font-medium text-xs">Jan 2025</p>
									</div>
								</div>
								<div className="hidden sm:flex items-center gap-2">
									<MapPin className="w-4 h-4 text-blue-400" />
									<div>
										<p className="text-slate-400 text-xs">Location</p>
										<p className="text-white font-medium text-xs">Lagos NG</p>
									</div>
								</div>
							</div>

							<div className="hidden sm:flex items-center justify-between pt-2">
								<div className="flex items-center gap-2">
									<Star className="w-4 h-4 text-yellow-400 fill-current" />
									<span className="text-white font-semibold">5.0</span>
									<span className="text-slate-400 text-xs">Rating</span>
								</div>
								<div className="px-3 py-1 bg-orange-500 rounded-full">
									<span className="text-white text-xs font-normal">
										VERIFIED
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-4 pt-3 border-t border-slate-600 flex items-center justify-between">
						<div className="text-slate-400 text-xs font-mono">
							ID: #BLIND2024-001
						</div>
						<div className="flex items-center gap-1">
							<Diamond className="w-3 h-3 text-purple-400" />
							<span className="text-purple-400 text-xs font-semibold">
								ELITE STATUS
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 right-0 mb-4 z-20 flex items-center justify-center shadow-sm">
				<div className="flex flex-row items-center justify-around gap-4 px-2 bg-white rounded-2xl h-[40px] shadow-lg">
					<div className="w-[34px] h-[34px] rounded-full ml-2 mb-6 border-2 border-white flex items-center justify-center">
						<img
							src={Pickup5}
							alt="class img"
							className="object-cover w-full h-full rounded-full"
						/>
					</div>

					<div className="leading-tight flex-grow">
						<h1 className="font-semibold text-gray-700 text-xs">
							Ready for Pickup
						</h1>
						<p className="text-xs text-gray-500 xs font-mono">
							Customer gets notified
						</p>
					</div>

					<div className="w-[33px] h-[33px] mr-2 ml-5 flex justify-center items-center text-white bg-blue-950 rounded-full">
						<HandHeart
							color="white"
							size={15}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
