import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import adh1 from ".../../../assets/adh/adh1.webp";
import adh2 from ".../../../assets/adh/adh2.webp";
import adh3 from ".../../../assets/adh/adh3.webp";
import adh4 from ".../../../assets/adh/adh4.webp";
import adh5 from ".../../../assets/adh/adh5.webp";
import adh6 from ".../../../assets/adh/adh6.webp";
import adh7 from ".../../../assets/adh/adh7.webp";
import adh8 from ".../../../assets/adh/adh8.webp";
import adh9 from ".../../../assets/adh/adh9.webp";
import adh10 from ".../../../assets/adh/adh10.webp";

export default function ADHPage() {
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState("");

	const galleryTab = [
		// you can add more images if you want
		{
			imageUrl: adh1.src,
		},
		{
			imageUrl: adh2.src,
		},
		{
			imageUrl: adh3.src,
		},
		{
			imageUrl: adh4.src,
		},
        {
			imageUrl: adh5.src,
		},
        {
			imageUrl: adh6.src,
		},
        {
			imageUrl: adh7.src,
		},
        {
			imageUrl: adh8.src,
		},
        {
			imageUrl: adh9.src,
		},
        {
			imageUrl: adh10.src,
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
		<section className="bg-tan-900  pb-12">
			<div className="max-w-screen-xl mx-auto bg-tan-900 ">
				<div className=" bg-tan-900 ">
					<h2 className="py-8 text-4xl tracking-tight font-extrabold text-gray-900 bg-tan-900  text-center">
						Aadhya
					</h2>
					<div className="flex flex-col md:grid md:grid-cols-2 h-full gap-4 flex-wrap mx-2 md:mx-0 bg-transparent ">
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

