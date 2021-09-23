// Import libraries
import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";

const JobForm = () => {
	const [state, handleSubmit] = useForm("mpzkkgdg");

	// Form Fields
	const [jobTitle, setJobTitle] = useState("");
	const [company, setCompany] = useState("");
	const [website, setWebsite] = useState("");
	const [image, setImage] = useState("");
	const [location, setLocation] = useState("");
	const [deadline, setDeadline] = useState("");
	const [link, setLink] = useState("");
	const [email, setEmail] = useState("");
	const [description, setDescription] = useState("");
	const [notes, setNotes] = useState("");

	const submitForm = (e) => {
		handleSubmit(e);
	};

	useEffect(() => {
		if (state.succeeded) {
			console.log("hi");
		}
	}, [state.succeeded]);

	return (
		<form onSubmit={submitForm} className="grid grid-cols-2 gap-2 bg-light-blue p-3 rounded-lg ">
			{/* Job Title */}
			<div>
				<label htmlFor="job-title" className="font-title font-semibold text-sm text-gray-700">
					Job Title
				</label>
				<input
					required
					aria-required="true"
					id="job-title"
					type="text"
					name="job-title"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					value={jobTitle}
					onChange={(e) => {
						setJobTitle(e.target.value);
					}}
					placeholder="eg. Software Engineer Intern - Winter 2022"
				/>
			</div>

			{/* Company Name */}
			<div>
				<label htmlFor="company" className="font-title font-semibold text-sm text-gray-700">
					Company
				</label>
				<input
					id="company"
					type="text"
					name="company"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					aria-required="true"
					value={company}
					onChange={(e) => {
						setCompany(e.target.value);
					}}
					placeholder="eg. Ada's Team"
				/>
			</div>

			{/* Website */}
			<div>
				<label htmlFor="website" className="font-title font-semibold text-sm text-gray-700">
					Company Website <span className="font-light text-xs">(optional)</span>
				</label>
				<input
					id="website"
					type="url"
					name="website"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					aria-required="false"
					value={website}
					onChange={(e) => {
						setWebsite(e.target.value);
					}}
					placeholder="eg. https://adasteam.ca"
				/>
			</div>

			{/* Image URL */}
			<div>
				<label htmlFor="image" className="font-title font-semibold text-sm text-gray-700">
					Company Logo URL <span className="font-light text-xs">(optional)</span>
				</label>
				<input
					id="image"
					type="url"
					name="image"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					aria-required="false"
					value={image}
					onChange={(e) => {
						setImage(e.target.value);
					}}
					placeholder="eg. https://adasteam.ca/logo.png"
				/>
			</div>

			{/* Location */}
			<div>
				<label htmlFor="location" className="font-title font-semibold text-sm text-gray-700">
					Job Location
				</label>
				<input
					id="location"
					type="text"
					name="location"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					aria-required="false"
					value={location}
					onChange={(e) => {
						setLocation(e.target.value);
					}}
					placeholder="eg. Remote"
				/>
			</div>

			{/* Deadline */}
			<div>
				<label htmlFor="deadline" className="font-title font-semibold text-sm text-gray-700">
					Application Deadline
				</label>
				<input
					id="deadline"
					type="date"
					name="deadline"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					aria-required="false"
					value={deadline}
					onChange={(e) => {
						setDeadline(e.target.value);
					}}
				/>
			</div>

			{/* Application Link */}
			<div>
				<label
					htmlFor="application-link"
					className="font-title font-semibold text-sm text-gray-700"
				>
					Application Link
				</label>
				<input
					id="application-link"
					type="url"
					name="application-link"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					aria-required="true"
					value={link}
					onChange={(e) => {
						setLink(e.target.value);
					}}
					placeholder="eg. https://adasteam.ca/jobboard/?posting=12345"
				/>
			</div>

			{/* Email */}
			<div>
				<label htmlFor="email" className="font-title font-semibold text-sm text-gray-700">
					Contact Email <span className="font-light text-xs">(optional)</span>
				</label>
				<input
					id="email"
					type="email"
					name="email"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					aria-required="true"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					placeholder="eg. info@adasteam.ca"
				/>
			</div>

			{/* Description */}
			<div className="col-span-2">
				<label htmlFor="description" className="font-title font-semibold text-sm text-gray-700">
					Job Description
				</label>
				<textarea
					id="description"
					name="description"
					className="px-4 py-2 h-20 focus:outline-none focus:ring focus:border-blue-50"
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					aria-required="true"
					placeholder="Write a brief description about the job, eg. qualifications, responsibilities, and any other information a job applicant should know about"
				/>
			</div>

			{/* Additional Notes */}
			<div className="col-span-2">
				<label htmlFor="notes" className="font-title font-semibold text-sm text-gray-700">
					Additional Notes
				</label>
				<textarea
					id="notes"
					name="notes"
					className="px-4 py-2 h-16 focus:outline-none focus:ring focus:border-blue-50"
					value={notes}
					onChange={(e) => {
						setNotes(e.target.value);
					}}
					aria-required="false"
					placeholder="Add any additional notes you would like us to know about. Note: this will NOT be displayed in the jobboard posting"
				/>
			</div>

			<button
				type="submit"
				className="my-0 w-3/6 justify-self-center hover:bg-pink focus:bg-pink col-span-2"
			>
				SUBMIT JOB
			</button>
		</form>
	);
};

export default JobForm;
