// Import libraries
import React, { useState } from "react";

const JoinForm = () => {
	const [email, setEmail] = useState("");
	const [first, setFirst] = useState("");
	const [last, setLast] = useState("");
	const [faculty, setFaculty] = useState("");
	const [studentAff, setStudentAff] = useState("");

	return (
		<div
			id="connect-form"
			className="bg-light-blue p-5 rounded-lg max-w-6xl md:my-7 lg:mx-auto lg: p-10"
		>
			<form
				action="https://adasteam.us18.list-manage.com/subscribe/post?u=9d8e6ca3c4618877981922611&amp;id=8ac3f17ed3"
				noValidate
				method="post"
				target="_blank"
				className="flex flex-col"
			>
				{/* <input type="hidden" name="u" value="9d8e6ca3c4618877981922611" />
				<input type="hidden" name="id" value="8ac3f17ed3" /> */}

				{/* Email Address */}
				<div className="grid grid-cols-6 gap-6">
					<div className="col-span-6 sm:col-span-6">
						<label htmlFor="mce-EMAIL" className="font-title block text-sm font-bold text-black">
							Email Address
						</label>
						<input
							required
							aria-required="true"
							id="mce=EMAIL"
							type="email"
							name="EMAIL"
							className="focus:outline-none focus:ring focus:border-blue-50 px-4"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>

					{/* First Name */}
					<div className="col-span-6 sm:col-span-3">
						<label htmlFor="mce-FNAME" className="font-title block text-sm font-bold text-black">
							First name
						</label>
						<input
							id="mce-FNAME"
							type="name"
							name="FNAME"
							value={first}
							onChange={(e) => {
								setFirst(e.target.value);
							}}
							autoComplete="given-name"
							className="focus:outline-none focus:ring focus:border-blue-50 px-4"
							aria-required="false"
						/>
					</div>

					{/* Last Name */}
					<div className="col-span-6 sm:col-span-3">
						<label htmlFor="mce-LNAME" className="font-title block text-sm font-bold text-black">
							Last name
						</label>
						<input
							id="mce-LNAME"
							type="name"
							name="LNAME"
							value={last}
							onChange={(e) => {
								setLast(e.target.value);
							}}
							autoComplete="family-name"
							className="focus:outline-none focus:ring focus:border-blue-50 px-4"
							aria-required="false"
						/>
					</div>

					{/* Student Affiliation */}
					<div className="col-span-6 sm:col-span-3">
						<label htmlFor="mce-MMERGE3" className="font-title block text-sm font-bold text-black">
							Student Affiliation
						</label>
						<select
							id="mce-MMERGE3"
							type="name"
							name="MMERGE3"
							value={studentAff}
							onChange={(e) => {
								setStudentAff(e.target.value);
							}}
							aria-required="true"
							className="block w-full p-3 bg-white rounded-md focus:outline-none focus:outline-none focus:ring focus:border-blue-50 sm:text-sm"
						>
							<option value=""></option>
							<option value="Undergraduate student">Undergraduate student</option>
							<option value="Graduate student">Graduate student</option>
							<option value="High school">High school</option>
							<option value="Staff">Staff</option>
							<option value="Faculty">Faculty</option>
							<option value="Alumni">Alumni</option>
							<option value="Student Group">Student Group</option>
							<option value="Industry Partner">Industry Partner</option>
						</select>
					</div>

					{/* Faculty */}
					<div className="col-span-6 sm:col-span-3">
						<label htmlFor="mce-MMERGE4" className="font-title block text-sm font-bold text-black">
							Faculty
						</label>
						<select
							id="mce-MMERGE4"
							type="name"
							name="MMERGE4"
							value={faculty}
							onChange={(e) => {
								setFaculty(e.target.value);
							}}
							aria-required="false"
							className="block w-full p-3 bg-white rounded-md focus:outline-none focus:outline-none focus:ring focus:border-blue-50 sm:text-sm"
						>
							<option value=""></option>
							<option value="Arts">Arts</option>
							<option value="Business">Business</option>
							<option value="Computer Science">Computer Science</option>
							<option value="Education">Education</option>
							<option value="Engineering">Engineering</option>
							<option value="Science">Science</option>
							<option value="Other">Other</option>
						</select>
					</div>

					<div className="md:col-start-3 md:col-span-3 col-start-3 col-span-4">
						<button type="submit" className=" my-0 active:bg-blue-700 focus:bg-pink hover:bg-pink">
							JOIN
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default JoinForm;
