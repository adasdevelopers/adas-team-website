// Import libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Import components
import JoinForm from "../components/JoinForm";
import Header from "../components/Header";

// Import assets
import main_icon from "../assets/img/AdaBot/icon_head.png";
import student_icon from "../assets/img/AdaBot/adas_students_icon.png";
import join_image from "../assets/img/PageHeaders/join.svg";

/**
 * Displays a form that allows the users to subscribe
 * to the mailing list
 * @returns
 */
const Join = () => {
	// importing brand icons
	library.add(fab);

	return (
		<main id="main-content" className="page">
			<title
				id="join"
				className="max-w-6xl mx-auto flex flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down"
			>
				{/* Join image */}
				<img
					id="join_image"
					src={join_image}
					alt="person standing next to envelope"
					className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72"
				/>
				<Header
					title="Join Us"
					subtitle="Join the Ada's Team community to stay updated and get involved!"
				/>
			</title>

			<div className="max-w-6xl mx-auto">
				<div className="divider-thick my-8" aria-hidden />

				<div className="title">
					<h2>JOIN OUR MAILING LIST</h2>
				</div>

				<p className="my-5">
					Subscribe to our mailing list to receive updates on events, opportunities, scholarships,
					and more!
				</p>
			</div>

			<JoinForm />

			<div className="divider-thick my-8" aria-hidden />

			<div className="title mb-8">
				<h2>JOIN OUR NETWORKS</h2>
			</div>

			{/* Ada's Students Slack Invite*/}
			<section id="ada-team-info" className="max-w-6xl mx-auto">
				<img
					src={student_icon}
					alt="Ada's Team icon"
					className="hidden lg:block px-2 w-36 pl-4 pr-9 pb-28 float-left"
				/>

				<div id="discord-invite">
					<h4 className="uppercase lg:normal-case">Ada's Students Slack</h4>
					<div className="container py-3 font-body font-light">
						<p className="block lg:hidden">
							Get FREE access to virtual one-on-one tutoring sessions, and connect with our students
							through virtual hangouts and study group sessions. There are tutors available to help
							with various CMPUT, MATH and STAT courses.
						</p>

						<p className="hidden lg:block">
							Thanks to the time and effort of our wonderful volunteers, we are able to provide FREE
							drop-in tutoring for our members. The tutors offer help with various CMPUT, MATH and
							STAT courses.
							<br />
							<br />
							To take advantage of our services, you can join the Slack channel below. There, you
							can post in different channels and ask for help. You can also book online sessions, or
							drop in when a tutor has office hours.
						</p>

						<a
							className="inline-block w-full md:w-max flex justify-center items-center self-center py-3 px-10 my-4 bg-blue text-white font-semibold rounded-lg md:self-start hover:text-white hover:bg-pink"
							href="https://join.slack.com/t/adastutoring/shared_invite/zt-rxka4nnk-Ox~fBNx2XgXkU4gk9TLQfw"
							alt="Ada's Team Tutoring Slack Invite Link"
							target="_blank"
							rel="noreferrer"
						>
							<span className="pr-2 text-lg">
								<FontAwesomeIcon icon={["fab", "slack"]} />
							</span>
							Join Ada's Students
						</a>
					</div>
				</div>
			</section>

			{/* Ada's Base Discord Invite*/}
			<section id="ada-team-info" className="max-w-6xl mx-auto">
				<img
					src={main_icon}
					alt="Ada's Team icon"
					className="hidden lg:block px-2 w-36 pr-7 pb-28 float-left"
				/>

				<div id="discord-invite">
					<h4 className="uppercase lg:normal-case">Ada's Base</h4>
					<div className="container py-3 font-body font-light">
						<p className="block lg:hidden">
							Join the Ada's Base Discord server: an online community of students that share job
							opportunities and hackathons, review resumes, and hold each other accountable with
							virtual coworking sessions.
						</p>

						<p className="hidden lg:block">
							Pre-COVID, students were able to drop-by anytime to our room and connect with other
							students. However, that casual, supportive atmosphere has now been hampered due to the
							virtual environment.
							<br />
							<br />
							To welcome new students and help us all stay connected during COVID-19, join the Ada's
							Base Discord server! Join a community of students that share job opportunities and
							hackathons, review resumes, host jackbox sessions, and hold you accountable during
							virtual coworking sessions.
						</p>

						<a
							className="inline-block w-full md:w-max flex justify-center items-center self-center py-3 px-10 my-4 bg-blue text-white font-semibold rounded-lg md:self-start hover:text-white hover:bg-pink"
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
				</div>
			</section>
		</main>
	);
};

export default Join;
