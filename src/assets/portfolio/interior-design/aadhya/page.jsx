"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import ADH1 from "../../../../public/adh/adh1.webp";
import ADH2 from "../../../../public/adh/adh2.webp";
import ADH3 from "../../../../public/adh/adh3.webp";
import ADH4 from "../../../../public/adh/adh4.webp";
import ADH5 from "../../../../public/adh/adh5.webp";
import ADH6 from "../../../../public/adh/adh6.webp";
import ADH7 from "../../../../public/adh/adh7.webp";
import ADH8 from "../../../../public/adh/adh8.webp";
import ADH9 from "../../../../public/adh/adh9.webp";
import ADH10 from "../../../../public/adh/adh10.webp";

const ADHPage = () => {
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState("");

	const galleryTab = [
		// you can add more images if you want
		{
			imageUrl: ADH1.src,
		},
		{
			imageUrl: ADH2.src,
		},
		{
			imageUrl: ADH3.src,
		},
		{
			imageUrl: ADH4.src,
		},
		{
			imageUrl: ADH5.src,
		},
		{
			imageUrl: ADH6.src,
		},
		{
			imageUrl: ADH7.src,
		},
		{
			imageUrl: ADH8.src,
		},
		{
			imageUrl: ADH9.src,
		},
		{
			imageUrl: ADH10.src,
		},
	];

	const slides = galleryTab.map((item) => ({
		src: item.imageUrl,
		width: 3840,
		height: 2560,
		srcSet: [
			{ src: item.imageUrl, width: 320, height: 213 },
			{ src: item.imageUrl, width: 640, height: 426 },
			{ src: item.imageUrl, width: 1200, height: 800 },
			{ src: item.imageUrl, width: 2048, height: 1365 },
			{ src: item.imageUrl, width: 3840, height: 2560 },
		],
	}));

	return (
		<section className="bg-tan-900 dark:bg-jet pb-12">
			<div className="max-w-screen-xl mx-auto bg-tan-900 dark:bg-jet">
				<div className=" bg-tan-900 dark:bg-jet ">
					<h2 className="py-8 text-4xl tracking-tight font-extrabold text-gray-900 bg-tan-900 dark:bg-jet dark:text-white text-center">
						Aadhya
					</h2>
					<div className="flex flex-col md:grid md:grid-cols-2 h-full gap-4 flex-wrap mx-2 md:mx-0 bg-tan-900 dark:bg-jet">
						{galleryTab.map((x, index) => {
							return (
								<div key={index} className=" relative">
									<div className="group h-96">
										<div
											className="bg-cover bg-center h-full w-full  bg-no-repeat"
											style={{ backgroundImage: `url("${x.imageUrl}")` }}
										>
											{/* <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
											<div>{x.type}</div>
											<div>{x.title}</div>
										</div> */}
										</div>
										<div
											className=" group-hover:opacity-20 cursor-zoom-in absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
											onClick={() => {
												setOpen(true);
												setImage(x.imageUrl);
											}}
										>
											{/* <p className="text-white">
												<AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
											</p> */}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					plugins={[Zoom]}
					showPrevNext={false}
					slides={slides}
				/>
			</div>
		</section>
	);
};

export default ADHPage;
