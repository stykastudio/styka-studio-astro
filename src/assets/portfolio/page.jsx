import React from "react";
import Link from "next/link";
import GCFH from "../../public/gcfh/gcfh1.webp";
import KFH from "../../public/kfh/kfh1.webp";
import MNH from "../../public/mnh/mnh2.webp";
import SPM from "../../public/spm/spm2.webp";
import AZGC from "../../public/azgc/azgc2.webp";
import ADH from "../../public/adh/adh2.webp";
import ETNA from "../../public/etna/etna3.webp";
import MNHINT from "../../public/mnh/int/mnhint4.webp";
import VSW from "../../public/vsw/vsw15.webp";

const PortfolioPage = () => {
	return (
		<section className="bg-tan-900 dark:bg-jet">
			<div className="container px-6 py-10 mx-auto max-w-screen-xl">
				<h1 className="text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
					Our Portfolio
				</h1>

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
					<Link href="/portfolio/architecture/gandipet-container-farmhouse">
						<div
							className="flex items-end overflow-hidden bg-cover bg-center rounded-lg h-96"
							style={{
								// use the src property of the image object
								backgroundImage: `url(${GCFH.src})`,
								// other styles
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								width: "100%",
								height: "40vh",
							}}
						>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-base font-semibold text-gray-800 capitalize dark:text-white">
									Gandipet Container Farmhouse
								</h2>
								<p className="mt-2 text-sm tracking-wider text-tan-200 uppercase dark:text-tan-500 ">
									Architecture
								</p>
							</div>
						</div>
					</Link>
					<Link href="/portfolio/architecture/keesara-farmhouse">
						<div
							className="flex items-end overflow-hidden bg-cover bg-center rounded-lg h-96"
							style={{
								// use the src property of the image object
								backgroundImage: `url(${KFH.src})`,
								// other styles
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								width: "100%",
								height: "40vh",
							}}
						>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-base font-semibold text-gray-800 capitalize dark:text-white">
									Keesara Farmhouse
								</h2>
								<p className="mt-2 text-sm tracking-wider text-tan-200 uppercase dark:text-tan-500 ">
									Architecture
								</p>
							</div>
						</div>
					</Link>
					<Link href="/portfolio/architecture/manne-house">
						<div
							className="flex items-end overflow-hidden bg-cover bg-center rounded-lg h-96"
							style={{
								// use the src property of the image object
								backgroundImage: `url(${MNH.src})`,
								// other styles
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								width: "100%",
								height: "40vh",
							}}
						>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-base font-semibold text-gray-800 capitalize dark:text-white">
									Manne House
								</h2>
								<p className="mt-2 text-sm tracking-wider text-tan-200 uppercase dark:text-tan-500 ">
									Architecture
								</p>
							</div>
						</div>
					</Link>
					<Link href="/portfolio/architecture/sripuram">
						<div
							className="flex items-end overflow-hidden bg-cover bg-center rounded-lg h-96"
							style={{
								// use the src property of the image object
								backgroundImage: `url(${SPM.src})`,
								// other styles
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								width: "100%",
								height: "40vh",
							}}
						>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-base font-semibold text-gray-800 capitalize dark:text-white">
									Sripuram
								</h2>
								<p className="mt-2 text-sm tracking-wider text-tan-200 uppercase dark:text-tan-500 ">
									Architecture
								</p>
							</div>
						</div>
					</Link>
					<Link href="/portfolio/architecture/aziznagar-gated-community">
						<div
							className="flex items-end overflow-hidden bg-cover bg-center rounded-lg h-96"
							style={{
								// use the src property of the image object
								backgroundImage: `url(${AZGC.src})`,
								// other styles
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								width: "100%",
								height: "40vh",
							}}
						>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-base font-semibold text-gray-800 capitalize dark:text-white">
									Aziznagar Gated Community
								</h2>
								<p className="mt-2 text-sm tracking-wider text-tan-200 uppercase dark:text-tan-500 ">
									Architecture
								</p>
							</div>
						</div>
					</Link>
					<Link href="/portfolio/interior-design/aadhya">
						<div
							className="flex items-end overflow-hidden bg-cover bg-center rounded-lg h-96"
							style={{
								// use the src property of the image object
								backgroundImage: `url(${ADH.src})`,
								// other styles
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								width: "100%",
								height: "40vh",
							}}
						>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-base font-semibold text-gray-800 capitalize dark:text-white">
									Aadhya
								</h2>
								<p className="mt-2 text-sm tracking-wider text-tan-200 uppercase dark:text-tan-500 ">
									Interior Design
								</p>
							</div>
						</div>
					</Link>
					<Link href="/portfolio/interior-design/eterna-1503">
						<div
							className="flex items-end overflow-hidden bg-cover bg-center rounded-lg h-96"
							style={{
								// use the src property of the image object
								backgroundImage: `url(${ETNA.src})`,
								// other styles
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								width: "100%",
								height: "40vh",
							}}
						>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-base font-semibold text-gray-800 capitalize dark:text-white">
									Eterna 1503
								</h2>
								<p className="mt-2 text-sm tracking-wider text-tan-200 uppercase dark:text-tan-500 ">
									Interior Design
								</p>
							</div>
						</div>
					</Link>
					<Link href="/portfolio/interior-design/manne-house">
						<div
							className="flex items-end overflow-hidden bg-cover bg-center rounded-lg h-96"
							style={{
								// use the src property of the image object
								backgroundImage: `url(${MNHINT.src})`,
								// other styles
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								width: "100%",
								height: "40vh",
							}}
						>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-base font-semibold text-gray-800 capitalize dark:text-white">
									Manne House
								</h2>
								<p className="mt-2 text-sm tracking-wider text-tan-200 uppercase dark:text-tan-500 ">
									Interior Design
								</p>
							</div>
						</div>
					</Link>
					<Link href="/portfolio/interior-design/vesella-woods">
						<div
							className="flex items-end overflow-hidden bg-cover bg-center rounded-lg h-96"
							style={{
								// use the src property of the image object
								backgroundImage: `url(${VSW.src})`,
								// other styles
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								width: "100%",
								height: "40vh",
							}}
						>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-base font-semibold text-gray-800 capitalize dark:text-white">
									Vesella Woods
								</h2>
								<p className="mt-2 text-sm tracking-wider text-tan-200 uppercase dark:text-tan-500 ">
									Interior Design
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PortfolioPage;
