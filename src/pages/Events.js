
/**
 * Displays monthly and daily view
 * from Ada's Team gCal
 * @returns 
 */
function Events() {
  return (
    <div id="events-page" className="page">

        <header>
            <h1>
                Events
            </h1>
            <h5>
                Learn about our initiative and upcoming events.
            </h5>
        </header>

        {/* Calendar */}
        <div id="calendar">
            <iframe
                className="container md:mx-auto md:my-auto"
                title="SomeTitle" 
                src="https://calendar.google.com/calendar/embed?src=c_8vaue6vuk07n0bbtdf4l3247q4%40group.calendar.google.com&ctz=America%2FEdmonton" 
                width="800" height="600" frameborder="0" scrolling="no">
            </iframe>
        </div>

    </div>
  );
}

export default Events;
