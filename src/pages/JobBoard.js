// Import libraries
import React, { useEffect, useState } from "react";
import db from "../firebase";

// Import components
import Header from "../components/Header";
import Loader from "../components/Loader";

//Import assets
import jobboard from "../assets/img/PageHeaders/jobboard.svg";
import blank_image from "../assets/img/Placeholders/blank.svg";
import Modal from "../components/Modal";
import JobForm from "../components/JobForm";

/**
 * Displays the Job Board with data
 * pulled in from Firebase
 */
const JobBoard = () => {
	const [jobs, setJobs] = useState(null);
	const [loading, setLoading] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		// Set a timeout to wait at least 2 seconds before displaying data
		// (so that spinner is not weird)
		setTimeout(() => {
			setLoading(false);
		}, 3500);

		// Pull in Firebase data
		db.collection("job-postings")
			.orderBy("created", "asc")
			.get()
			.then((snapshot) => {
				const jobs = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					jobs.push(data);
				});
				setJobs(jobs);
			})
			.catch((error) => console.log(error));
	}, []);

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
			<img
				className="hidden md:block h-24 w-auto"
				src={image ? image : blank_image}
				alt={`${company} logo`}
			/>

			<div className="md:flex-1">
				<div className="flex md:flex-col justify-between space-x-8 md:space-x-0 font-title mb-4">
					<img
						className="md:hidden h-24 w-auto"
						src={image ? image : blank_image}
						alt={`${company} logo`}
					/>
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
							className="flex-1 border text-center border-blue py-3 bg-white text-blue font-title font-semibold rounded-lg uppercase hover:text-pink hover:border-pink focus:text-pink focus:border-pink"
							href={`mailto:${email}`}
						>
							Contact
						</a>
					)}
					{apply_link && (
						<a
							id="application_link"
							className="flex-1 border text-center font-title font-semibold rounded-lg uppercase border-blue py-3 bg-blue text-white hover:text-white hover:bg-pink hover:border-pink focus:bg-pink focus:border-pink"
							href={apply_link}
						>
							Apply
						</a>
					)}
				</div>
			</div>
		</div>
	);

	return (
		<main id="main-content" className="page">
			<Modal open={modalOpen} setOpen={setModalOpen} title="Submit A Job Posting" titleCenter>
				<JobForm />
			</Modal>

			<title
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
			</title>

			<section id="available-jobs" className="max-w-6xl mx-8 lg:mx-auto">
				<h2 className="font-title">AVAILABLE JOBS</h2>
				{jobs && (
					<div id="job-listings-number" className="text-xl font-body">
						{jobs.length} Job Listing{jobs.length !== 1 && "s"}
					</div>
				)}

				<Loader loading={loading || !jobs}>
					<div id="job-posting" className="">
						{jobs &&
							jobs.map(
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
				</Loader>

				<div id="post-a-job" className="hidden flex flex-col mt-10 md:flex">
					<h4>Have a job posting you'd like to advertise here?</h4>

					<button
						onClick={() => {
							setModalOpen(true);
						}}
						className="w-full self-center md:w-2/5 uppercase font-title hover:bg-pink focus:bg-pink"
					>
						Post a job
					</button>
				</div>
			</section>
		</main>
	);
};

export default JobBoard;
