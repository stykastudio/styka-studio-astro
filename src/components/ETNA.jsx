import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import ETNA1 from "./assets/etna/etna1.webp";
import ETNA2 from "./assets/etna/etna2.webp";
import ETNA3 from "./assets/etna/etna3.webp";
import ETNA4 from "./assets/etna/etna4.webp";
import ETNA5 from "./assets/etna/etna5.webp";
import ETNA6 from "./assets/etna/etna6.webp";
import ETNA7 from "./assets/etna/etna7.webp";
import ETNA8 from "./assets/etna/etna8.webp";
import ETNA9 from "./assets/etna/etna9.webp";
import ETNA10 from "./assets/etna/etna10.webp";
import ETNA11 from "./assets/etna/etna11.webp";
import ETNA12 from "./assets/etna/etna12.webp";
import ETNA13 from "./assets/etna/etna13.webp";
import ETNA14 from "./assets/etna/etna14.webp";

export default function ETNAPage() {
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState("");

	const galleryTab = [
		// you can add more images if you want
		{
			imageUrl: ETNA1.src,
		},
		{
			imageUrl: ETNA2.src,
		},
		{
			imageUrl: ETNA3.src,
		},
		{
			imageUrl: ETNA4.src,
		},
		{
			imageUrl: ETNA5.src,
		},
		{
			imageUrl: ETNA6.src,
		},
		{
			imageUrl: ETNA7.src,
		},
		{
			imageUrl: ETNA8.src,
		},
		{
			imageUrl: ETNA9.src,
		},
		{
			imageUrl: ETNA10.src,
		},
		{
			imageUrl: ETNA11.src,
		},
		{
			imageUrl: ETNA12.src,
		},
		{
			imageUrl: ETNA13.src,
		},
		{
			imageUrl: ETNA14.src,
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
						Eterna 1503
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

