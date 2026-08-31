import { Link, useParams } from "react-router-dom";

// Import components
import Header from "../components/Header";

// Import static files
import conferences from "../static/conferences.json";
import cancwicTestimonies from "../static/cancwic_testimonies.json";
import ghcTestimonies from "../static/ghc_testimonies.json";

const testimoniesBySlug = {
	cancwic25: cancwicTestimonies,
	ghc25: ghcTestimonies,
};

const ConferenceTestimony = () => {
	const { slug } = useParams();
	const conference = conferences.find((entry) => entry.slug === slug);
	const testimonies = testimoniesBySlug[slug] || [];

	if (!conference) {
		return (
			<main id="main-content" className="page max-w-6xl mx-auto animate-fade-in-down">
				<section className="lg:mt-12">
					<Header
						title="Conference Not Found"
						subtitle="We couldn't find the conference testimonies you were looking for."
					/>
					<Link
						to="/conferences"
						className="inline-flex mt-6 py-3 px-8 bg-blue text-white font-semibold rounded-lg hover:text-white hover:bg-pink"
					>
						BACK TO CONFERENCES
					</Link>
				</section>
			</main>
		);
	}

	const hasTestimonies = testimonies.length > 0;
	const title = `${conference.acronym} Attendee Testimonies`;
	const subtitle = hasTestimonies
		? `Read reflections from Ada's Team attendees at ${conference.title}.`
		: `Testimonies for ${conference.title} are not available yet.`;

	return (
		<main id="main-content" className="page max-w-6xl mx-auto animate-fade-in-down">
			<title
				id="conference_testimony_image"
				className="flex relative flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down"
			>
				<img
					src={conference.image}
					alt={conference.title}
					className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72 rounded-lg object-cover"
				/>

				<Header title={title} subtitle={subtitle} />
			</title>

			<section id="conference-testimonies" className="lg:mt-20">
				<p className="font-body font-light whitespace-pre-line">{conference.description}</p>

				<div className="divider-thick mt-16 mb-8" aria-hidden />

				{hasTestimonies ? (
					<div className="grid gap-8">
						{testimonies.map(({ name, testimony }) => (
							<TestimonyCard key={name} name={name} testimony={testimony} />
						))}
					</div>
				) : (
					<div className="blue-rect-shadow p-8">
						<h3 className="mb-2">No testimonies yet</h3>
						<p className="font-body font-light">
							This conference page is live, but attendee reflections have not been added yet.
						</p>
					</div>
				)}

				<Link
					to="/conferences"
					className="inline-flex mt-10 py-3 px-8 bg-blue text-white font-semibold rounded-lg hover:text-white hover:bg-pink"
				>
					BACK TO CONFERENCES
				</Link>
			</section>
		</main>
	);
};

const TestimonyCard = ({ name, testimony }) => (
	<article className="blue-rect-shadow p-8">
		<h3 className="mb-4">{name}</h3>
		<p className="font-body font-light">{testimony}</p>
	</article>
);

export default ConferenceTestimony;
