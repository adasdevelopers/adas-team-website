import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyAJiMxedmef79J8Q3r0y-i6ejM5Q0DKDCA";
let calendars = [
  {
    calendarId: "ualberta.ca_uk6g7uve98ofv1s5iott8sriog@group.calendar.google.com",
    color: "#B241D1" //optional, specify color of calendar 2 events
  }
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "1px", //make outer edge of calendar thicker
    borderColor: "grey"
  },
  day:{
    fontSize:"1.3em",
  },
  today: {

    color: "#39B6FB",
    fontWeight: "bolder",
  }
}


function EventsCalendar() {
    return (
      <div>
      <Calendar
        apiKey={API_KEY}
        calendars={calendars}
        styles={styles}
        />
      </div>
    )
}

export default EventsCalendar;
