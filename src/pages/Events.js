import events_image from "../assets/img/events.svg";
import Header from "../components/Header";
import EventsCalendar from "../components/EventsCalendar";
/**
 * Displays monthly and daily view
 * from Ada's Team gCal
 * @returns
 */

function Events() {
	return (
		<div
			id="events-page"
			className="px-8 sm:px-8 md:px-16 lg:max-w-7xl page lg:px-auto relative animate-fade-in-down"
		>
			<div
				id="faq_image"
				className="max-w-6xl mx-auto flex flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down"
			>
				{/* Events image */}
				<img
					id="events"
					src={events_image}
					alt="people sitting on a sofa"
					className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72"
				/>
				<Header
					title="Events"
					subtitle="Learn more about our upcoming events."
					additional="Due to COVID-19, please note that all of our events will operate in a virtually via Zoom or Google Meet."
				/>
			</div>

			{/* Calendar */}
			<div id="calendar" className="md:m-20 md:mt-24 sm:m-8 lg:mx-8">
				<EventsCalendar />
			</div>

			<div id="event-roadmap" className="mt-16 flex flex-col max-w-6xl mx-auto ">
				<div className="divider-thick my-10"></div>
				<h2>EVENT ROADMAP</h2>

				{/* Canva Embedded roadmap */}
				<div id="canva-roadmap">
					<div
						style={{
							position: "relative",
							width: "100%",
							height: "0",
							paddingTop: "56.2500%",
							paddingBottom: "48px",
							boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
							marginTop: "1.6em",
							marginBottom: "0.9em",
							overflow: "hidden",
							borderRadius: "8px",
							willChange: "transform",
						}}
					>
						<iframe
							loading="lazy"
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								top: "0",
								left: "0",
								border: "none",
								padding: "0",
								margin: "0",
							}}
							src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEE64Enu-4&#x2F;view?embed"
						></iframe>
					</div>
				</div>

				<button className="w-full self-center md:w-max hover:text-grey-900">
					<a
						href="https://www.canva.com/design/DAEE64Enu-4/view"
						target="_blank"
						alt="Ada's Team Roadmap"
					>
						CHECK OUT OUR ROADMAP
					</a>
				</button>
			</div>
		</div>
	);
}

export default Events;
