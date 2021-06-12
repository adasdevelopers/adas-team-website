// Import images
import BigBot from "../assets/img/ada-home-bot.png";

// Import assets
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoIosArrowDown } from "react-icons/io";

// Import components
import JoinForm from "../components/JoinForm";
import Header from "../components/Header";
import db from "../firebase";
import React from "react";

/**
 * Welcome page
 * @returns
 */
AOS.init();

AOS.init({
	easing: "ease", // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});


class Home extends React.Component {
	// Constants
	state = {
		sponsors: null,
	};

	// Pull in data from Firebase
	componentDidMount() {
		db.collection("sponsors")
			.get()
			.then((snapshot) => {
				const sponsors = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					sponsors.push(data);
				});
				this.setState({ sponsors });
			})
			.catch((error) => console.log(error));
	}

	render() {
		const { sponsors } = this.state;

		return (
			<div id="home-page">
				<div id="home-image" className="mx-auto static p-5 md:p-5 relative animate-fade-in-down">
					{/* Bot image */}
					<img
						id="home-bot"
						src={BigBot}
						alt="Ada's Home Bot waving"
						className="absolute inset-y-0 right-0 md:mt-1 z-40 lg:inset-y-0 lg:right-0 "

					></img>

					{/* Welcome title */}
					<div
						id="home-title"
						className="flex flex-col place-items-center inline-block mt-96 w-11/12 lg:mt-72 pt-2 z-30"

					>
						<Header
							title="ADA'S TEAM"
							homepage="true"
							subtitle="Promoting diversity in STEAM with an emphasis on technology."
						/>

						{/* Arrow */}
						<div id="jump-arrow" className="text-5xl py-20 animate-pulse">
							<Link to="home-information" smooth={true}>
								<IoIosArrowDown size="2em" />
							</Link>
						</div>
					</div>
				</div>

				<div id="home-information" className="bg-black w-full py-20">
					<div className="max-w-4xl mx-8 md:mx-24 lg:mx-64 xl:mx-auto">
						<div data-aos="fade-right" data-aos-duration="900" data-aos-easing="ease-in-sine">
							<h2 className="text-2xl font-title font-blue">COVID 19 UPDATE</h2>
							<p className="font-body font-light text-white">
								Due to COVID-19, all Ada's Team events can be assumed to operate in a virtual manner
								until it's officially deemed safe to host in-person events.
							</p>
						</div>
						<div className="divider-thick my-4" />
						<div data-aos="fade-left" data-aos-duration="900" data-aos-easing="ease-in-sine">
							<h2 className="text-2xl font-title mb-4">TREATY 6 ACKNOWLEDGEMENT</h2>
							<p className="font-body font-light text-white">
								We respectfully acknowledge that Ada’s Team is located on Treaty 6 territory, a
								traditional gathering place for diverse Indigenous peoples including the Cree,
								Blackfoot, Metis, Nakota Sioux, Iroquois, Dene, Ojibway/Saulteaux/Anishinaabe,
								Inuit, and many others whose histories, languages, and cultures continue to
								influence our vibrant community.
							</p>
						</div>
					</div>
				</div>

				<div
					id="join-us-form"
					className="max-w-6xl mx-8 md:mx-16 lg:py-24 2xl:mx-auto animate-fade-in-down"
				>
					<div
						data-aos="fade-in"
						data-aos-duration="900"
						data-aos-delay="500"
						data-aos-easing="ease-in-sine"
						className="pt-20 pb-8"
					>
						<h2>Subscribe to our Mailing List</h2>
						<p>
							Join Ada’s Team and receive updates on events, opportunities, scholarships, and more!
						</p>
					</div>

					<JoinForm />

					<div className="divider-thick mt-16 mb-8"></div>

					<div id="sponsors-list">
						<h2>SPONSORS</h2>
						{/** main flex box wrapper **/}
						<div
							className="mb-8 grid grid-cols-2 grid-rows-3 md:grid-cols-3  md:grid-rows-2 lg:my-10"
							data-aos="fade-in"
							data-aos-duration="900"
							data-aos-delay="500"
							data-aos-easing="ease-in-sine"
						>

							{/** divs within flex box **/}
							{sponsors &&
								sponsors.map(({ company_name, image }) => (
									<Sponsor company={company_name} image={image} />
								))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const Sponsor = ({ company, image }) => (
	<div className="flex self-center justify-self-center flex-col items-center justify-between mt-8">
		<img src={image} className="w-32 h-auto md:w-40 md:h-auto" />
		<h4 className="text-base uppercase text-center mt-2">{company}</h4>
	</div>
);

export default Home;
