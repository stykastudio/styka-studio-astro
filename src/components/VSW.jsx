import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import VSW1 from "../assets/vsw/vsw1.webp";
import VSW2 from "../assets/vsw/vsw2.webp";
import VSW3 from "../assets/vsw/vsw3.webp";
import VSW4 from "../assets/vsw/vsw4.webp";
import VSW5 from "../assets/vsw/vsw5.webp";
import VSW6 from "../assets/vsw/vsw6.webp";
import VSW7 from "../assets/vsw/vsw7.webp";
import VSW8 from "../assets/vsw/vsw8.webp";
import VSW9 from "../assets/vsw/vsw9.webp";
import VSW10 from "../assets/vsw/vsw10.webp";
import VSW11 from "../assets/vsw/vsw11.webp";
import VSW12 from "../assets/vsw/vsw12.webp";
import VSW13 from "../assets/vsw/vsw13.webp";
import VSW14 from "../assets/vsw/vsw14.webp";
import VSW15 from "../assets/vsw/vsw15.webp";
import VSW16 from "../assets/vsw/vsw16.webp";
import VSW17 from "../assets/vsw/vsw17.webp";
import VSW18 from "../assets/vsw/vsw18.webp";
import VSW19 from "../assets/vsw/vsw19.webp";
import VSW20 from "../assets/vsw/vsw20.webp";
import VSW21 from "../assets/vsw/vsw21.webp";
import VSW22 from "../assets/vsw/vsw22.webp";
import VSW23 from "../assets/vsw/vsw23.webp";

export default function MNHPage() {
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState("");

	const galleryTab = [
		// you can add more images if you want
		{
			imageUrl: VSW1.src,
		},
		{
			imageUrl: VSW2.src,
		},
		{
			imageUrl: VSW3.src,
		},
		{
			imageUrl: VSW4.src,
		},
		{
			imageUrl: VSW5.src,
		},
		{
			imageUrl: VSW6.src,
		},
		{
			imageUrl: VSW7.src,
		},
		{
			imageUrl: VSW8.src,
		},
		{
			imageUrl: VSW9.src,
		},
		{
			imageUrl: VSW10.src,
		},
		{
			imageUrl: VSW11.src,
		},
		{
			imageUrl: VSW12.src,
		},
		{
			imageUrl: VSW13.src,
		},
		{
			imageUrl: VSW14.src,
		},
		{
			imageUrl: VSW15.src,
		},
		{
			imageUrl: VSW16.src,
		},
		{
			imageUrl: VSW17.src,
		},
		{
			imageUrl: VSW18.src,
		},
		{
			imageUrl: VSW19.src,
		},
		{
			imageUrl: VSW20.src,
		},
		{
			imageUrl: VSW21.src,
		},
		{
			imageUrl: VSW22.src,
		},
		{
			imageUrl: VSW23.src,
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
						Vesella Woods
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

