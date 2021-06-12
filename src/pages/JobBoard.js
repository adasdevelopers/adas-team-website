// Import React libraries
import React from "react";
import db from "../firebase";
import Header from "../components/Header";
import jobboard from "../assets/img/jobboard.svg";
import blank_image from "../assets/img/blank.svg";


/**
 * Displays the Job Board with data
 * pulled in from Firebase
 */
class JobBoard extends React.Component {
	// Constants
	state = {
		jobs: null,
	};

	// Pull in Firebase data
	componentDidMount() {
		db.collection("job-postings")
			.orderBy("created", "asc")

			.get()
			.then((snapshot) => {
				const jobs = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					jobs.push(data);
				});
				this.setState({ jobs });
			})
			.catch((error) => console.log(error));
	}

	render() {
		const { jobs } = this.state;
		return (
			<div id="job-board-page" className="page">
				<div
					id="faq_image"
					className="max-w-6xl mx-auto flex flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down"
				>
					{/* Events image */}
					<img
						id="jobboard"
						src={jobboard}
						alt="people in a job interview"
						className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72"
					/>
					<Header
						title="Job Board"
						subtitle=" Search through our current job listings from various companies to get in touch and land your next job."
					/>
				</div>

				<div className="max-w-6xl mx-8 lg:mx-auto">
					<h2 className="font-title">AVAILABLE JOBS</h2>
					{jobs && (
						<div id="job-listings-number" className="text-xl font-body">
							{jobs.length} Job Listing{jobs.length !== 1 && "s"}
						</div>
					)}

					<div id="job-posting" className="">
						{this.state.jobs &&
							this.state.jobs.map(
								(
									{
										job_title,
										company,
										location,
										description,
										deadline,
										website,
										apply_link,
										email,
										image,
									},
									i
								) => (
									<JobPosting
										key={`jobposting${i}`}
										title={job_title}
										company={company}
										description={description}
										location={location}
										website={website}
										apply_link={apply_link}
										email={email}
										image={image}
										deadline={deadline && deadline.toDate().toDateString()}
									/>
								)
							)}
					</div>

					<div id="post-a-job" className="flex flex-col mt-10">
						<h4>Have a job posting you'd like to advertise here?</h4>

						<button className="w-full self-center md:w-2/5 uppercase font-title">Post a job</button>
					</div>
				</div>
			</div>
		);
	}
}

const JobPosting = ({
	title,
	company,
	website,
	location,
	description,
	deadline,
	apply_link,
	email,
	image,
}) => (
	<div className="p-4 lg:px-16 md:flex justify-between md:space-x-8 blue-rect rounded-xl">
		<img className="hidden md:block h-24 w-auto" src={image ? image : blank_image} />

		<div className="md:flex-1">
			<div className="flex md:flex-col justify-between space-x-8 md:space-x-0 font-title mb-4">
				<img className="md:hidden h-24 w-auto" src={image ? image : blank_image} />
				<div className="font-title flex-1">
					<h4 className="">{title}</h4>
					<a href={website}>{company}</a>
					<p>{location}</p>
				</div>
			</div>

			<p className="font-body font-light">{description}</p>

			{deadline && <p className="font-body font-light mt-4">Deadline: {deadline}</p>}

			<div className="mt-4 flex justify-between space-x-4">
				{email && (
					<a
						id="email"
						className="flex-1 border text-center border-blue py-3 bg-white text-blue font-title font-semibold rounded-lg uppercase"

						href={`mailto:${email}`}
					>
						Contact
					</a>
				)}
				{apply_link && (
					<a
						id="application_link"
						className="flex-1 border text-center border-blue py-3 bg-blue text-white hover:text-white font-title font-semibold rounded-lg uppercase"

						href={apply_link}
					>
						Apply
					</a>
				)}
			</div>
		</div>
	</div>
);

export default JobBoard;
