// Import icons from libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import { AiFillLinkedin } from "react-icons/ai";


// Import initiative assets
import about_image from "../assets/img/about.svg";
import dev_image from "../assets/img/ada_bot_scarf.png";
import student_image from "../assets/img/ada_bot_sleepy.png";
import mentor_image from "../assets/img/ada_bot_hands_up.png";
import podcast_image from "../assets/img/ada_bot_hat1.png";
import blank_user from "../assets/img/blank-user.png";
import React from "react";
import db from "../firebase";

/**
 * Displays information about Ada's Team
 * initiatives and executive team
 */
class About extends React.Component {
	// Constants
	state = {
		initiatives: null,
		executives: null,
	};

	// Pull in data from Firebase
	componentDidMount() {
		console.log("mounted");
		db.collection("executives")
			.get()
			.then((snapshot) => {
				const executives = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					executives.push(data);
				});
				this.setState({ executives: executives });
				console.log(executives);
			})
			.catch((error) => console.log(error));

		db.collection("initiatives")
			.orderBy("order", "asc")
			.get()
			.then((snapshot) => {
				const initiatives = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					initiatives.push(data);
				});
				this.setState({ initiatives: initiatives });
				console.log(initiatives);
			})
			.catch((error) => console.log(error));
	}

	render() {
		library.add(fab, faEnvelope); //importing brand icons for social-media
		const images = {
			"Ada's Developers": dev_image,
			"Ada's Students": student_image,
			"Ada's Mentors": mentor_image,
			"Ada's Podcast": podcast_image,
		};

		return (
			<div className="page animate-fade-in-down font-body">
				<div
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
				</div>

				{/* Title Intro */}
				<div id="about-goal" className="lg:mt-20 lg:px-36">
					<p className="font-sans font-thin">
						In Ada's Team, our goal is to{" "}
						<b>
							promote diversity in computing science, games, technology, engineering, and
							mathematics.
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
				</div>

				<div className="divider-thick hidden lg:mx-36 "></div>

				{/* Initiative block */}
				<div id="initiatives" className="my-12 lg:my-28 lg:mx-36">

					<h2 className="pb-4">OUR INITIATIVES</h2>
					{/* Initiative information */}
					<p className="font-body italic text-sm mb-20">
						Integer auctor at proin posuere etiam integer amet sed. Ut pellentesque nullam et
						adipiscing ultrices amet, interdum eu vel.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-y-10">
						{this.state.initiatives &&
							this.state.initiatives.map(({ name, description, contact }, i) => (
								<Initiative
									name={name}
									description={description}
									contact={contact}
									image={images[name]}
								/>
							))}
					</div>
				</div>

				{/* Slack and Discord Invite links*/}
				<div id="join-links" className="flex flex-col space-y-5 lg:py-5 lg:my-32 lg:mx-36 lg:mr-48">
					<div id="adas-tutoring-join" className="flex flex-col w-full">
						<h3 className="font-title text-black font-semibold">Ada's Tutoring</h3>
						<p className="font-light">
							Get FREE access to virtual one-on-one tutoring sessions, and connect with our students
							through virtual hangouts and study group sessions. There are tutors available to help
							with various CMPUT, MATH and STAT courses.
						</p>
						<button className="w-64 self-center">
							<a
								href="https://join.slack.com/t/adastutoring/shared_invite/zt-rxka4nnk-Ox~fBNx2XgXkU4gk9TLQfw"
								alt="Ada's Team Tutoring Slack Invite Link"
							>
								<span className="mt-1 pr-2 text-lg">
									<FontAwesomeIcon icon={["fab", "slack"]} />
								</span>
								Join Ada's Tutoring
							</a>
						</button>
					</div>
					<div id="adas-base-join" className="flex flex-col w-full">
						<h3 className="font-title text-black font-semibold">Ada's Base</h3>
						<p className="font-light">
							Join the Ada's Base Discord server: an online community of students that share job
							opportunities and hackathons, review resumes, and hold each other accountable with
							virtual coworking sessions.
						</p>
						<button className="w-64 self-center">
							<a
								href="https://discord.gg/7ZhmzHZjc8"
								alt="Ada's Team Discord Invite Link"
								className="font-body"
							>
								<span className="pr-2 text-lg font-body">
									<FontAwesomeIcon icon={["fab", "discord"]} />
								</span>
								Join Ada's Base
							</a>
						</button>
					</div>
				</div>

				{/* Executive information from Firebase */}
				<div id="executive-team">
					<div className="title my-10 lg:mx-36">
						<h2>MEET THE TEAM</h2>
						<h3 className="font-title text-pink text-2xl">2020-2021</h3>
					</div>


					{this.state.executives &&
						this.state.executives.map(({ image, role, name, description, contact }, i) => (
							<Executive
								image={image}
								role={role}
								name={name}
								description={description}
								contact={contact}
							/>
						))}
				</div>
			</div>
		);
	}
}

const Executive = ({ image, role, name, description, contact }) => (
	<div id="executives" className="blue-rect-shadow p-8 flex flex-col md:flex-row lg:mx-36 h-full">
		{/* <div className="rounded-full w-full h-auto overflow-hidden"> */}
		<div className="flex self-center md:mr-8" style={{ maxWidth: "240px", height: "auto" }}>
			<img
				src={image == "" ? blank_user : image}
				alt="Image of an executive of Ada's Team"
				className="rounded-full mb-8 md:mb-0 flex-1"
			/>
		</div>
		<div className="flex justify-between flex-col my-2">

			<div id="executive-information">
				<div className="font-title font-bold text-xl">{name}</div>
				<div className="mb-2 uppercase">
					<p>
						<em>{role}</em>
					</p>
				</div>
				<div>
					<p className="font-body font-thin">{description}</p>
				</div>
			</div>

			{/* Executive Contact Information */}
			<div id="executive-contact" className="mt-4 flex self-end space-x-2 text-xl">
				{contact.LinkedIn && (
					<div className="executive--contact">
						<a href={contact.LinkedIn}>
							<FontAwesomeIcon icon={["fab", "linkedin"]} />
							{/* <AiFillLinkedin /> */}
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

		<div className="initiative-social-media" className="my-2 space-x-4">
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

export default About;
