import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "../css/koan.css";
import FeatureCard from "../components/feature-card";
import { featuresData, socialsLinks } from "../constants";
import SocialsCard from "../components/socialslink-card";
// import "./index.module.css"

function Homepage() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<>
			<div
				className={` min-h-[30rem] w-full relative flex flex-col items-center dark:bg-black dark:bg-dot-white/[0.4] bg-white/80 bg-dot-black/[0.8]`}>
				<div
					className={` bg-white dark:bg-black absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}></div>
				<p className="text-4xl font-bold  py-8 my-8">Koan Protcol Docs</p>

				<div className="grid lg:grid-cols-3 z-10 w-[85%] lg:w-[75%]  gap-6 mb-12 mt-3">
					{featuresData.map((items, index) => {
						return (
							<FeatureCard
								key={index}
								title={items.title}
								href={items.href}
								description={items.description}
								Icon={items.Icon}
							/>
						);
					})}
				</div>
			</div>
			<main className="w-full  flex flex-col items-center justify-center border-t border-gray-900 dark:border-gray-300">
				<div className="grid  lg:grid-cols-3 z-10 w-[85%] lg:w-[75%]  gap-6 my-12 items-center justify-center">
					{socialsLinks.map((items, i) => {
						return (
							<div key={i}>
								<SocialsCard
									name={items.name}
									href={items.href}
									Icon={items.Icon}
								/>
							</div>
						);
					})}
				</div>
			</main>
		</>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />">
			<div className="dark:bg-[#010002] ">
				<Homepage />
			</div>
		</Layout>
	);
}
