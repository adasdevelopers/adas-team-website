import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const EventsCalendar = () => {
	const API_KEY = "AIzaSyAJiMxedmef79J8Q3r0y-i6ejM5Q0DKDCA";
	let calendars = [
		{
			calendarId: "ualberta.ca_uk6g7uve98ofv1s5iott8sriog@group.calendar.google.com",
			color: "#B241D1",
		},
	];

	let styles = {
		calendar: {
			border: "none",
			textALign: "center",
		},
		day: {
			fontSize: "1em",
			border: "none",
		},
		innerDay: {
			color: "#39B6FB",
		},
		today: {
			color: "#39B6FB",
			fontWeight: "bold",
		},
	};

	return (
		<div>
			<Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
		</div>
	);
};

export default EventsCalendar;
