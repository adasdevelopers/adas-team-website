// Import libraries
import React from "react";

// Import components
import Header from "../components/Header";

// Import assets
import connect_image from "../assets/img/PageHeaders/connect.svg";
import ConnectForm from "../components/ConnectForm";

/**
 *
 * @returns
 */
const Connect = () => {
	return (
		<main id="main-content" className="page">
			<title
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
			</title>

			<div>
				<h3 className="text-center mb-10">SEND A MESSAGE</h3>

				<section
					id="connect-form"
					className="bg-light-blue p-5 rounded-lg mx-18 max-w-6xl lg:mx-auto md:16 lg:mb-10"
				>
					<ConnectForm />
				</section>
			</div>
		</main>
	);
};

export default Connect;
