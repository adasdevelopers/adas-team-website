// Import libraries
import React, { useEffect, useState } from "react";
import db from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Import components
import Header from "../components/Header";
import Loader from "../components/Loader";

// Import  assets
import about_image from "../assets/img/PageHeaders/about.svg";

/**
 * Displays information about Ada's Team
 * initiatives and executive team
 */
const About = () => {
	const [initiatives, setInitiatives] = useState(null);
	const [executives, setExecutives] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Set a timeout to wait at least 2 seconds before displaying data
		// (so that spinner is not weird)
		setTimeout(() => {
			setLoading(false);
		}, 3500);

		// Pull in data from Firebase
		// Import initiatives
		db.collection("initiatives")
			.orderBy("order", "asc")
			.get()
			.then((snapshot) => {
				const initiatives = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					initiatives.push(data);
				});
				setInitiatives(initiatives);
			})
			.catch((error) => console.log(error));

		// Import executives
		db.collection("executives")
			.orderBy("order", "asc")
			.get()
			.then((snapshot) => {
				const executives = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					executives.push(data);
				});
				setExecutives(executives);
			})
			.catch((error) => console.log(error));

		// Importing brand icons for social media
		library.add(fab, faEnvelope);
	}, []);

	const Executive = ({ image, role, name, description, contact }) => (
		<div id="executives" className="blue-rect-shadow p-8 flex flex-col md:flex-row lg:mx-36">
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
							<a href={contact.LinkedIn}>
								<FontAwesomeIcon icon={["fab", "linkedin"]} />
							</a>
						</div>
					)}

					{contact.Github && (
						<div className="executive--contact">
							<a href={contact.Github} alt="Github">
								<FontAwesomeIcon icon={["fab", "github"]} />
							</a>
						</div>
					)}

					{contact.Other && (
						<div className="executive--contact">
							<a className="Contact" href={contact.Other} alt="Contact">
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
				{contact["instagram"] !== "" && (
					<a href={contact["instagram"]} className="text-3xl">
						<FontAwesomeIcon icon={["fab", "instagram"]} />
					</a>
				)}
				{contact["email"] !== "" && (
					<a href={contact["email"]} className="text-3xl">
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
				)}
			</div>
		</div>
	);

	return (
		<main id="main-content" className="page animate-fade-in-down font-body">
			<title
				id="about_image"
				className="max-w-3xl lg:mx-auto flex flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down"
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
			<section id="about-goal" className="lg:mt-20 lg:px-36">
				<p className="font-sans font-thin">
					In Ada's Team, our goal is to{" "}
					<b>
						promote diversity in computing science, games, technology, engineering, and mathematics.
					</b>{" "}
					By diversity, we include but are not limited to the following categories: gender, race,
					ethnicity, religion, ability, sexuality, social class, and any other factor of
					discrimination or minority group.
					<br />
					<b>
						We embrace and celebrate your differences, striving to foster an inclusive culture and
						safe space for everyone to collaborate and thrive in.
					</b>
				</p>
			</section>

			<div className="divider-thick hidden lg:mx-36" aria-hidden />

			{/* Initiative block */}
			<section id="initiatives" className="my-12 lg:my-28 lg:mx-36">
				<h2 className="pb-4">OUR INITIATIVES</h2>

				{/* Initiative information */}
				<p className="font-body italic text-sm mb-20">
					Ada's Team hosts many initiatives that help our members thrive academically, socially, and
					professionally. All of our initiatives have their own extraordinary organizing teams, even
					though they are all under the umbrella of Ada's Team!
				</p>

				{/* Initiative grid */}
				<Loader loading={!initiatives || loading}>
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
				</Loader>
			</section>

			{/* Slack and Discord Invite links*/}
			<section
				id="join-links"
				className="flex flex-col space-y-5 lg:py-5 lg:my-32 lg:mx-36 lg:mr-48"
			>
				<div id="adas-tutoring-join" className="flex flex-col w-full lg:mb-10">
					<h3 className="font-title text-black font-semibold">Ada's Tutoring</h3>
					<p className="font-light">
						Get FREE access to virtual one-on-one tutoring sessions, and connect with our students
						through virtual hangouts and study group sessions. There are tutors available to help
						with various CMPUT, MATH and STAT courses.
					</p>
					<a
						className="w-64 flex justify-center items-center self-center py-3 px-10 my-4 bg-blue text-white font-semibold rounded-lg md:self-start hover:text-white hover:bg-pink"
						href="https://join.slack.com/t/adastutoring/shared_invite/zt-rxka4nnk-Ox~fBNx2XgXkU4gk9TLQfw"
						alt="Ada's Team Tutoring Slack Invite Link"
						target="_blank"
						rel="noreferrer"
					>
						<span className="pr-2 text-lg">
							<FontAwesomeIcon icon={["fab", "slack"]} />
						</span>
						Join Ada's Tutoring
					</a>
				</div>

				<div id="adas-base-join" className="flex flex-col w-full">
					<h3 className="font-title text-black font-semibold">Ada's Base</h3>
					<p className="font-light">
						Join the Ada's Base Discord server: an online community of students that share job
						opportunities and hackathons, review resumes, and hold each other accountable with
						virtual coworking sessions.
					</p>
					<a
						className="w-64 flex justify-center items-center self-center py-3 px-10 my-4 bg-blue text-white font-semibold rounded-lg md:self-start hover:text-white hover:bg-pink"
						href="https://discord.gg/7ZhmzHZjc8"
						alt="Ada's Team Discord Invite Link"
						target="_blank"
						rel="noreferrer"
					>
						<span className="pr-2 text-lg">
							<FontAwesomeIcon icon={["fab", "discord"]} />
						</span>
						Join Ada's Base
					</a>
				</div>
			</section>

			{/* Executive information from Firebase */}
			<section id="executive-team">
				<div className="title my-10 lg:mx-36">
					<h2>MEET THE TEAM</h2>
					<h3 className="font-title text-pink text-2xl">2021-2022</h3>
				</div>

				<Loader loading={!executives || loading}>
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
				</Loader>
			</section>
		</main>
	);
};

export default About;
