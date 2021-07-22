// Import libraries
import React, { useEffect, useState } from "react";
import db from "../firebase";
import AOS from "aos";
import "aos/dist/aos.css";

// Import components
import Header from "../components/Header";
import Loader from "../components/Loader";

//Import assets
import faq from "../assets/img/PageHeaders/faq.svg";

/**
 * Displays FAQ for Ada's Team
 */
const FAQ = () => {
	const [questions, setQuestions] = useState(null);

	useEffect(() => {
		// Pull in data from Firebase
		db.collection("questions")
			.get()
			.then((snapshot) => {
				const questions = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					questions.push(data);
				});
				setQuestions(questions);
				console.log(questions);
			})
			.catch((error) => console.log(error));

		AOS.init();

		AOS.init({
			easing: "ease", // default easing for AOS animations
			once: true, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		});
	});

	return (
		<div
			id="faq-page"
			className="max-w-7xl lg:mx-auto page animate-fade-in-down font-body overflow-hidden"
		>
			<main>
				<div
					id="faq_image"
					className="max-w-4xl mx-auto flex flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down"
				>
					<title>
						{/* FAQ image */}
						<img
							id="faq"
							src={faq}
							alt="people sitting on infographics"
							className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72"
						/>

						<Header title="FAQ" subtitle="Answering your most frequently asked questions." />
					</title>
				</div>

				<Loader loading={!questions}>
					<section id="faq-section">
						{questions &&
							questions.map((question, i) => {
								return (
									<div
										data-aos={question.left ? "fade-right" : "fade-left"}
										data-aos-duration="500"
										data-aos-easing="ease-in-sine"
									>
										<div
											className={`bg-light-blue w-11/10 lg:p-3 shadow-md rounded-3xl my-7 py-12 md:w-full lg:w-3/4 ${
												i % 2 === 0
													? "-ml-12 pl-16 pr-12 sm:-ml-18 md:-ml-20 md:pl-32 lg:ml-0"
													: "-mr-12 pr-16 pl-12 sm:-mr-18 md:-mr-20 md:pr-32 ml-auto lg:mr-0"
											}`}
										>
											<div id="faq-question-and-answer" className="lg:px-14 lg:my-8">
												<h3
													id="faq-question"
													className="font-title text-xl mb-3 text-black font-bold"
												>
													{question.question}
												</h3>
												<p id="faq-answer" className="font-light">
													{question.answer}
												</p>
												<div
													className={`divider-thin mt-8 w-6/5 lg:w-full lg:ml-0 lg:mr-0 ${
														i % 2 === 0 ? "-ml-20 sm:-ml-32 md:-ml-44" : "-mr-12"
													}`}
												></div>
											</div>
										</div>
									</div>
								);
							})}
					</section>
				</Loader>

				<div className="divider-thick mt-16 mb-4" />

				<div>
					<h2 className="pt-4 pb-7">Still have questions?</h2>

					<p>
						Please feel free to reach out to us at:
						<br />
						<a href="mailto:adasteam@ualberta.ca" className="text-blue font-semibold">
							adasteam@ualberta.ca
						</a>
					</p>
				</div>
			</main>
		</div>
	);
};

export default FAQ;
