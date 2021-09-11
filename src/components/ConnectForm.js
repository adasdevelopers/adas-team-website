// Import libraries
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Modal from "./Modal";

const ConnectForm = () => {
	const [state, handleSubmit] = useForm("mpzkkgdg");

	// Form Fields
	const [email, setEmail] = useState("");
	const [fullName, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	// Modal fields
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		if (state.succeeded) {
			setModalOpen(true);
			setEmail("");
			setName("");
			setSubject("");
			setMessage("");
		}
	}, [state.succeeded]);

	return (
		<form onSubmit={handleSubmit} className="py-2 grid grid-cols-1 gap-4">
			<Modal open={modalOpen} setOpen={setModalOpen} title="Form Submit Successful" centerTitle>
				<div className="flex flex-col">
					<p className="text-black my-4">
						Thank you for submitting the form! We'll get back to you as soon as we can.
					</p>
					<button
						onClick={(e) => {
							e.preventDefault();
							setModalOpen(false);
						}}
						className="w-max my-0 flex-1 ml-auto justify-end hover:bg-pink"
					>
						OK
					</button>
				</div>
			</Modal>

			{/* Email Address */}
			<div>
				<label htmlFor="email" className="font-title font-semibold text-sm text-gray-700">
					Email Address
				</label>
				<input
					required
					aria-required="true"
					id="email"
					type="email"
					name="EMAIL"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					placeholder="eg. adasteam@ualberta.ca"
				/>
			</div>

			<ValidationError prefix="Email" field="email" errors={state.errors} />

			{/* Full Name */}
			<div>
				<label htmlFor="name" className="font-title font-semibold text-sm text-gray-700">
					Full Name
				</label>
				<input
					id="name"
					type="name"
					name="name"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					aria-required="false"
					value={fullName}
					onChange={(e) => {
						setName(e.target.value);
					}}
					placeholder="eg. Ada Lovelace"
				/>
			</div>

			{/* Subject */}
			<div>
				<label htmlFor="subject" className="font-title font-semibold text-sm text-gray-700 ">
					Subject
				</label>
				<input
					id="subject"
					type="subject"
					name="subject"
					className="px-4 focus:outline-none focus:ring focus:border-blue-50"
					aria-required="true"
					value={subject}
					onChange={(e) => {
						setSubject(e.target.value);
					}}
					placeholder="eg. Questions About Event Next Week"
				/>
			</div>

			{/* Message */}
			<div>
				<label htmlFor="message" className="font-title font-semibold text-sm text-gray-700">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					className="px-4 p-2 h-20 focus:outline-none focus:ring focus:border-blue-50"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					aria-required="true"
				/>
			</div>

			<ValidationError prefix="Message" field="message" errors={state.errors} />

			<button
				type="submit"
				disabled={state.submitting}
				className="my-0 w-3/6 justify-self-center hover:bg-pink focus:bg-pink"
			>
				SEND MESSAGE
			</button>
		</form>
	);
};

export default ConnectForm;
