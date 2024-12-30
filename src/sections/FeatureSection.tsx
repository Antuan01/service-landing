import { features } from "../data/Feature";

const FeatureSection = () => {
	return (
		<section className="relative mt-20 border-b border-neutral-800 min-h-[800px]" id="features">
			<div className="text-center">
				<span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
					{/* Feature */}{" "}
				</span>
				<h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
					Easily Build, Create, Scale, Manage{" "}
					<span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
						your business.
					</span>
				</h2>
				{/* <p className="text-md text-neutral-500"> "More leads, more CHEESE!" </p> */}
			</div>
			<div className="flex flex-wrap mt-12 lg:mt-20">
				{features.map((feature, index) => (
					<div key={index} className="w-full sm:w-1/2 lg:w-1/3">
						<div className="flex">
							<div className="flex mx-5 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
								{feature.icon}
							</div>
							<div>
								<h5 className="mt-2 mb-7 text-xl">{feature.text}</h5>
								<p className="text-md mb-20 text-neutral-500">
									{feature.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeatureSection;
