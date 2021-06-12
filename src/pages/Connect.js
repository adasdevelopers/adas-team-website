// Import React libaries
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Header from "../components/Header";
import connect_image from "../assets/img/connect.svg";

/**
 *
 * @returns
 */
function Connect() {
	// React hook
	const [state, handleSubmit] = useForm("mrgredan");

	// TODO: display success message
	if (state.succeeded) {
		return <p>Thanks for connecting!</p>;
	}

	return (
		<div id="contact-page" className="page">
			<div
				id="connect_image"
				className="max-w-6xl mx-auto flex flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down"
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
					subtitle="We’d love to get in touch with you! Connect with us through email or any of our social media."
				/>
			</div>

			<div>
				<h3 className="text-center mb-10">SEND A MESSAGE</h3>

				<div
					id="connect-form"
					className="bg-light-blue p-5 rounded-lg mx-18 max-w-6xl lg:mx-auto md:16 lg:mb-10"
				>
					<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 ">
						<label htmlFor="email">Email Address</label>
						<input id="form-email" type="email" name="email" className="w-full" />
						<ValidationError prefix="Email" field="email" errors={state.errors} />

						<label htmlFor="name">Name</label>
						<input id="form-name" type="name" name="name" className="w-full" />

						<label htmlFor="subject">Subject</label>
						<input id="form-subject" type="subject" name="subject" className="w-full" />

						<label htmlFor="message">Message</label>
						<textarea id="message" name="message" className="w-full" />
						<ValidationError prefix="Message" field="message" errors={state.errors} />

						<button
							type="submit"
							disabled={state.submitting}
							// ref={editButtonRef}
							className="w-3/6 justify-self-center"
						>
							SEND MESSAGE
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Connect;
