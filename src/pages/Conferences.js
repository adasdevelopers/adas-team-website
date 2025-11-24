// Import components
import Header from "../components/Header";

// Import assets
import events_image from "../assets/img/PageHeaders/events.svg";
import conferences from "../static/conferences.json";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";


/**
 * displays info from conferences.json
 * @returns
 */
const Conferences = () => {

	return (
		<main id="main-content" className="page max-w-6xl mx-auto animate-fade-in-down">
			<title
				id="faq_image"
				className="flex relative flex-col items-center justify-between
					 lg:flex-row-reverse animate-fade-in-down"
			>
				{/* Events image */}
				<img
					id="events"
					src={events_image}
					alt="people sitting on a sofa"
					className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72"
				/>

				<Header
					title="Ada's Conferences"
					subtitle="Learn more about our conferences initiative."
				/>
			</title>

            <section id="about-info" className="lg:mt-20">
				<p className="font-body font-light">
                    Ada's Conferences is an initiative that organizes and fully funds students to attend leading tech conferences dedicated to empowering underrepresented groups in computing.
                    These conferences allow students to build community, seek mentorship, and access career-defining opportunities.
                </p>
                
                <p className="font-body mt-4 font-light">
                    These opportunities wouldn't be possible without the generosity of our amazing sponsors.
                </p>
                {/* TODO: Insert sponsor logos here */}

            </section>
            
            <section id="conferences">
                <div className="divider-thick mt-16 mb-8" aria-hidden />
                
				<div className="gap-4">
					{conferences &&
						conferences.map(({ image, title, description, acronym, slug, testimony_link }, i) => (
							<Conference
								image={image}
								title={title}
								description={description}
                                acronym={acronym}
                                slug={slug}
								testimony_link={testimony_link}
							/>
						))}
				</div>
			</section>


		</main>
	);
};

const Conference = ({ image, title, description, acronym, slug, testimony_link }) => {
    const internalPath = slug ? `/conferences/${encodeURIComponent(slug)}` : null;

    return (
        <div className="mb-12">
            <h2 className="mb-2">{title}</h2>
            
            <div className="flex flex-col md:flex-row gap-4">
                
                <img
                    src={image}
                    alt={`${title}`}
                    className="conference-image w-full md:w-[32rem] h-[18rem] object-cover rounded-lg bg-black self-center md:self-start flex-shring-0"
                />

                <div id="conference-description" className="flex flex-col flex-1 min-w-0">
                    <p className="font-body font-light whitespace-pre-line">
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </p>
                    {internalPath && (
                    <p className="font-body mt-4 font-bold">
                        <Link to={internalPath}>  {acronym} Attendee Testimonies</Link>
                    </p>
                    )}
                    
                    
                </div>
            </div>

        </div>
    )
};

export default Conferences;
