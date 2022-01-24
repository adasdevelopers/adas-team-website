// Import libraries
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Import components
import Header from "../components/Header";

// Import assets
import connect_image from "../assets/img/PageHeaders/connect.svg";
import ConnectForm from "../components/ConnectForm";

/**
 *
 * @returns
 */
const Connect = () => {
	// Importing icons
	library.add(fab, faEnvelope);

	const contactInformation = [
		{
			name: "Email",
			handle: "adasteam@ualberta.ca",
			link: "mailto:adasteam@ualberta.ca",
			icon: faEnvelope,
		},
		{
			name: "Facebook",
			handle: "AdasTeamFB",
			link: "https://www.facebook.com/AdasTeamFB/",
			icon: ["fab", "facebook"],
		},
		{
			name: "Twitter",
			handle: "@adas_team",
			link: "https://twitter.com/adas_team?lang=en",
			icon: ["fab", "twitter"],
		},
		{
			name: "Instagram",
			handle: "@adas_team",
			link: "https://www.instagram.com/adas_team/",
			icon: ["fab", "instagram"],
		},
		{
			name: "LinkedIn",
			handle: "adas-team",
			link: "https://www.linkedin.com/company/adas-team/",
			icon: ["fab", "linkedin"],
		},
		{
			name: "GitHub",
			handle: "adas-team",
			link: "https://github.com/adas-team",
			icon: ["fab", "github"],
		},
	];

	return (
		<main id="main-content" className="page max-w-6xl mx-auto animate-fade-in-down">
			<title
				id="connect_image"
				className="flex flex-col items-center justify-between
						lg:flex-row-reverse animate-fade-in-down"
			>
				{/* Connect image */}
				<img
					id="connect"
					src={connect_image}
					alt="person sending paper airplane"
					className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72"
				/>

				<Header
					title="Connect With Us"
					subtitle="We'd love to get in touch with you! Connect with us through email 
							or any of our social media."
				/>
			</title>

			{/* Contact form section */}
			<section>
				<div className="divider-thick" aria-hidden />
				<h3 className="my-6">SEND A MESSAGE</h3>

				<div
					id="connect-form"
					className="bg-light-blue p-5 rounded-lg mx-18 max-w-6xl lg:mx-auto md:16 lg:mb-10"
				>
					<ConnectForm />
				</div>
			</section>

			{/* Contact information section */}
			<section className="my-12">
				<div className="divider-thick" aria-hidden />
				<h3 className="my-6">MORE PLACES TO FIND US</h3>

				<ul id="social-media-grid" className="md:grid md:grid-cols-2">
					{contactInformation.map(({ name, handle, link, icon }, i) => (
						<li id={name} key={`platform${i}`} className="flex items-center my-2">
							<div
								className="w-8 h-8 inline-block bg-blue rounded-full flex 
									items-center justify-center mr-2"
							>
								<FontAwesomeIcon icon={icon} className="text-xl text-white" />
							</div>
							<span className="font-bold mr-2">{name}:</span>
							<a href={link} className="font-normal">
								{handle}
							</a>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default Connect;
