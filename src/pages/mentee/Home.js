import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/menteeNavbar";
import Calendar from "react-calendar";

const ReactCalendar = () => {
  return (
    <div>
      <Navbar />
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

/*
import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/menteeNavbar";
import Calendar from "react-calendar";

export default ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      <Navbar />;
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

/*
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="Home">
        <div className="light">
          <div className="calendar">
            <div className="calendar-header">
              <div>
                <span id="year-date"></span>
              </div>
            </div>
            <div className="calendar-body">
              <div className="calendar-week-day">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>

              <strong>
                <div className="calendar-days"></div>
              </strong>
            </div>
          </div>
          <span className="month-change" id="prev-month">
            <pre>{"<<<"}</pre>
          </span>
          <span className="month-change" id="next-month">
            <pre>{">>>"}</pre>
          </span>
        </div>
      </div>
    </div>
  );
}
*/
