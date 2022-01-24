// Import libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";

// Import components
import Header from "../components/Header";

// Import  assets
import about_image from "../assets/img/PageHeaders/about.svg";

// Import static files
import initiatives from "../static/initiatives.json";
import executives from "../static/executives.json";

/**
 * Displays information about Ada's Team
 * initiatives and executive team
 */
const About = () => {
	// Import icons
	library.add(fab, faEnvelope);
  
	return (
		<main id="main-content" className="page max-w-6xl mx-auto font-body animate-fade-in-down">
			<title
				id="about_image"
				className="flex flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down"
			>
				{/* About image */}
				<img
					id="about"
					src={about_image}
					alt="people sitting on infographics"
					className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72"
				/>

				<Header title="About" subtitle="Learn more about Ada's Team." />
			</title>

			{/* Title Intro */}
			<section id="about-goal" className="lg:mt-20">
				<p className="font-body font-light">
					At Ada's Team, our goal is to{" "}
					<span className="font-bold">
						promote diversity in computing science, games, technology, engineering, and mathematics.
					</span>{" "}
					By diversity, we include but are not limited to the following categories: gender, race,
					ethnicity, religion, ability, sexuality, social class, and any other factor of
					discrimination or minority group.
				</p>

				<p className="font-body mt-4 font-bold">
					We embrace and celebrate your differences, striving to foster an inclusive culture and
					safe space for everyone to collaborate and thrive in.
				</p>
			</section>

			<div className="divider-thick hidden" aria-hidden />

			{/* Initiative block */}
			<section id="initiatives">
				<div className="divider-thick mt-16 mb-8" aria-hidden />
				<h2 className="pb-4">OUR INITIATIVES</h2>

				{/* Initiative information */}
				<p className="font-body italic text-sm mb-20">
					Ada's Team hosts many initiatives that help our members thrive academically, socially, and
					professionally. All of our initiatives have their own extraordinary organizing teams, even
					though they are all under the umbrella of Ada's Team!
				</p>

				{/* Initiative grid */}

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-y-10">
					{initiatives &&
						initiatives.map(({ name, description, contact, image }) => (
							<Initiative
								name={name}
								description={description}
								contact={contact}
								image={image}
								key={name}
							/>
						))}
				</div>
			</section>

			{/* Executive information from Firebase */}
			<section id="executive-team">
				<div className="divider-thick mt-16 mb-8" aria-hidden />
				<h2>MEET THE TEAM</h2>
				<p className="font-title text-pink text-2xl mb-8">2021-2022</p>

				<div>
					{executives &&
						executives.map(({ image, role, name, description, contact }, i) => (
							<Executive
								image={image}
								role={role}
								name={name}
								description={description}
								contact={contact}
								key={role}
							/>
						))}
				</div>
			</section>
		</main>
	);
};

const Executive = ({ image, role, name, description, contact }) => (
	<div id="executives" className="blue-rect-shadow p-8 flex flex-col md:flex-row">
		<div
			className="executive-image self-center md:mr-8"
			style={{ backgroundImage: `url(${image})`, backgroundColor: "black" }}
			alt="executive of Ada's Team"
		/>

		<div className="flex justify-between flex-col my-2">
			<div id="executive-information">
				<h4 className="font-title font-bold text-xl">{name}</h4>
				<p className="mb-2 uppercase">
					<em>{role}</em>
				</p>
				<p className="font-body font-thin">{description}</p>
			</div>

			{/* Executive Contact Information */}
			<div id="executive-contact" className="mt-4 flex self-end space-x-2 text-xl">
				{contact.LinkedIn && (
					<div className="executive--contact">
						<a href={contact.LinkedIn} rel="noreferrer" target="_blank">
							<FontAwesomeIcon icon={["fab", "linkedin"]} />
						</a>
					</div>
				)}

				{contact.Github && (
					<div className="executive--contact">
						<a href={contact.Github} alt="Github" rel="noreferrer" target="_blank">
							<FontAwesomeIcon icon={["fab", "github"]} />
						</a>
					</div>
				)}

				{contact.Other && (
					<div className="executive--contact">
						<a
							className="Contact"
							href={contact.Other}
							alt="Contact"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</div>
				)}
			</div>
		</div>
	</div>
);

const Initiative = ({ name, image, description, contact }) => (
	<div className="grid justify-items-left">
		<div className="initiative-image justify-self-center">
			{image !== "" && <img src={image} alt="adas-team-bot" className="h-40 w-30 pb-3" />}
		</div>

		<h4 className="font-title text-2xl text-left">{name}</h4>

		<div className="description text-left font-light">
			<p>{description}</p>
		</div>

		<div className="initiative-social-media my-2 space-x-4">
			{contact["instagram"] && (
				<a href={contact["instagram"]} className="text-3xl" rel="noreferrer" target="_blank">
					<FontAwesomeIcon icon={["fab", "instagram"]} />
				</a>
			)}

			{contact["slack"] && (
				<a href={contact["slack"]} className="text-3xl" rel="noreferrer" target="_blank">
					<FontAwesomeIcon icon={["fab", "slack"]} />
				</a>
			)}

			{contact["other"] && (
				<a href={contact["other"]} className="text-2xl" rel="noreferrer" target="_blank">
					<FontAwesomeIcon icon={faLink} />
				</a>
			)}

			{contact["email"] && (
				<a href={contact["email"]} className="text-3xl" rel="noreferrer" target="_blank">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			)}
		</div>
	</div>
);

export default About;
