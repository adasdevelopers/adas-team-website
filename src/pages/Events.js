import events_image from "../assets/img/events.svg"
import Header from '../components/Header'
import EventsCalendar from '../components/EventsCalendar'
/**
 * Displays monthly and daily view
 * from Ada's Team gCal
 * @returns
 */


function Events() {
  return (

    <div id="events-page" className="page mx-auto static p-5 md:p-5 relative animate-fade-in-down mb-72" >
        {/* Events image */}
        <img
            id="about"
            src={events_image} alt="people sitting on a sofa"
            className="absolute inset-y-0 mt-1 z-40 lg:inset-y-0 lg:right-0 ">
        </img>
        <Header title="Events" subtitle="Learn more about our upcoming events."
        additional="Due to COVID-19, please note that all of our events will operate in a virtually via Zoom or Google Meet."/>
        <br/>
        <br/>
        {/* Calendar */}
        <div id="calendar" className="md:m-20 md:mt-24 sm:m-8">
        <EventsCalendar/>
        </div>

        <div className="divider-thick my-10"></div>

        <div
            id="event-roadmap"
            className="flex flex-col"
        >
            <h2>
                EVENT ROADMAP
            </h2>

            <div
                id="canva-roadmap"
                className="block">
            {/* TODO: embed roadmap */}
            </div>

            <p>
                Our roadmap is everything you need to know about our events and more.
                Please note that the roadmap is subject to changes as we collaborate with our
                industry partners.
            </p>


            <button
                className="w-full self-center md:w-2/5">
                    <a href="#" alt="Ada's Team Roadmap">
                        CHECK OUT OUR ROADMAP
                    </a>
            </button>


        </div>

    </div>
  );
}

export default Events;
