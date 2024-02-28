import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import MNHINT1 from "../assets/mnh/int/mnhint1.webp";
import MNHINT2 from "../assets/mnh/int/mnhint2.webp";
import MNHINT3 from "../assets/mnh/int/mnhint3.webp";
import MNHINT4 from "../assets/mnh/int/mnhint4.webp";
import MNHINT5 from "../assets/mnh/int/mnhint5.webp";
import MNHINT6 from "../assets/mnh/int/mnhint6.webp";
import MNHINT7 from "../assets/mnh/int/mnhint7.webp";
import MNHINT8 from "../assets/mnh/int/mnhint8.webp";
import MNHINT9 from "../assets/mnh/int/mnhint9.webp";
import MNHINT10 from "../assets/mnh/int/mnhint10.webp";
import MNHINT11 from "../assets/mnh/int/mnhint11.webp";
import MNHINT12 from "../assets/mnh/int/mnhint12.webp";
import MNHINT13 from "../assets/mnh/int/mnhint13.webp";
import MNHINT14 from "../assets/mnh/int/mnhint14.webp";
import MNHINT15 from "../assets/mnh/int/mnhint15.webp";
import MNHINT16 from "../assets/mnh/int/mnhint16.webp";
import MNHINT17 from "../assets/mnh/int/mnhint17.webp";
import MNHINT18 from "../assets/mnh/int/mnhint18.webp";
import MNHINT19 from "../assets/mnh/int/mnhint19.webp";

export default function MNHPage() {
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState("");

	const galleryTab = [
		// you can add more images if you want
		{
			imageUrl: MNHINT1.src,
		},
		{
			imageUrl: MNHINT2.src,
		},
		{
			imageUrl: MNHINT3.src,
		},
		{
			imageUrl: MNHINT4.src,
		},
		{
			imageUrl: MNHINT5.src,
		},
		{
			imageUrl: MNHINT6.src,
		},
		{
			imageUrl: MNHINT7.src,
		},
		{
			imageUrl: MNHINT8.src,
		},
		{
			imageUrl: MNHINT9.src,
		},
		{
			imageUrl: MNHINT10.src,
		},
		{
			imageUrl: MNHINT11.src,
		},
		{
			imageUrl: MNHINT12.src,
		},
		{
			imageUrl: MNHINT13.src,
		},
		{
			imageUrl: MNHINT14.src,
		},
		{
			imageUrl: MNHINT15.src,
		},
		{
			imageUrl: MNHINT16.src,
		},
		{
			imageUrl: MNHINT17.src,
		},
		{
			imageUrl: MNHINT18.src,
		},
		{
			imageUrl: MNHINT19.src,
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
						Manne House
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

