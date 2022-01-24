// Import libraries
import AOS from "aos";
import "aos/dist/aos.css";

// Import components
import Header from "../components/Header";

// Import assets
import faq_image from "../assets/img/PageHeaders/faq.svg";

// Import static files
import faq from "../static/faq.json";

/**
 * Displays FAQ for Ada's Team
 */
const FAQ = () => {
	// Initialize animations
	AOS.init({
		easing: "ease", // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
	});

	return (
		<main
			id="main-content"
			className={`page max-w-7xl lg:mx-auto lg:px-12 font-body overflow-hidden animate-fade-in-down`}
		>
			<title
				id="faq_image"
				className={`flex flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down`}
			>
				{/* FAQ image */}
				<img
					id="faq"
					src={faq_image}
					alt="people sitting on infographics"
					className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72"
				/>

				<Header title="FAQ" subtitle="Answering your most frequently asked questions." />
			</title>

			<section id="faq-section">
				{faq &&
					faq.map((question, i) => {
						return (
							<div
								data-aos={question.left ? "fade-right" : "fade-left"}
								data-aos-duration="500"
								data-aos-easing="ease-in-sine"
								key={i}
								className={`bg-light-blue w-11/10 lg:p-3 shadow-md rounded-3xl my-7 py-12 md:w-full lg:w-3/4 lg:px-14 lg:py-8 ${
									i % 2 === 0
										? "-ml-12 pl-16 pr-12 sm:-ml-18 md:-ml-20 md:pl-32 lg:ml-0"
										: "-mr-12 pr-16 pl-12 sm:-mr-18 md:-mr-20 md:pr-32 ml-auto lg:mr-0"
								}`}
							>
								<h3 id="faq-question" className="font-title text-xl mb-3 text-black font-bold">
									{question.question}
								</h3>
								<p id="faq-answer" className="font-light">
									{question.answer}
								</p>
								<div
									className={`divider-thin mt-8 w-6/5 lg:w-full lg:ml-0 lg:mr-0 ${
										i % 2 === 0 ? "-ml-20 sm:-ml-32 md:-ml-44" : "-mr-12"
									}`}
									aria-hidden
								/>
							</div>
						);
					})}
			</section>

			<div className="divider-thick my-8" aria-hidden />

			<section>
				<h2>Still have questions?</h2>
				<p>
					Please feel free to reach out to us at:
					<br />
					<a href="mailto:adasteam@ualberta.ca" className="text-blue font-semibold">
						adasteam@ualberta.ca
					</a>
				</p>
			</section>
		</main>
	);
};

export default FAQ;
