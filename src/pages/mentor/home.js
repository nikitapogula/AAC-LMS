import React, { useState } from "react";
import "./home.css";
import Nav from "../../components/mentorNav";
import Calendar from "react-calendar";

const ReactCalendar = () => {
  return (
    <div>
      <Nav />
      <CalendarComponent />
    </div>
  );
};

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="calendarheader">
      <Calendar onChange={onChange} value={date} className="calendardays" />
    </div>
  );
};

export default ReactCalendar;
