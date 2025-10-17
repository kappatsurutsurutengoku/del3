import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../calendar.css";
import logoImg from "../images/logo.png";

const Calendar = ({ goHome }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const events = {
    "2025-10-05": { title: "Beach Cleaning", details: "Help clean up Sandy Shore Beach, 10am-2pm." },
    "2025-10-12": { title: "Sea Life Meetup", details: "Informative session about local marine life at Ocean Center." },
    "2025-10-20": { title: "Coral Workshop", details: "Learn about coral restoration, 1pm-3pm." },
    "2025-10-26": { title: "Cleaning Day!", details: "Big autumn cleaning day. Don't forget gloves and trash bags!" },
    "2025-11-03": { title: "Marine Cleanup", details: "Community cleanup at Blue Bay, 9am-1pm." },
    "2025-11-15": { title: "Ocean Lecture", details: "Talk about ocean conservation efforts." },
    "2025-11-22": { title: "Beach Volleyball Event", details: "Friendly beach volleyball meetup at Sunset Beach." }
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = startOfMonth.getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleClick = (day) => {
    const key = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth()+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    if (events[key]) {
      setSelectedDate(events[key]);
    }
  };

  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  return (
    <div className="calendar-page">
      <img src={logoImg} alt="Logo" className="corner-logo" onClick={goHome} />

      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={handlePrevMonth} className="nav-button">←</button>
          <h2>{monthName} {year}</h2>
          <button onClick={handleNextMonth} className="nav-button">→</button>
        </div>

        <div className="calendar-grid">
          {daysOfWeek.map((day) => (
            <div className="calendar-day-header" key={day}>{day}</div>
          ))}

          {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
            <div className="calendar-empty" key={`empty-${idx}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, idx) => {
            const day = idx + 1;
            const key = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth()+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
            const hasEvent = events[key];
            return (
              <div
                key={day}
                className={`calendar-day ${hasEvent ? "event-day" : ""}`}
                onClick={() => handleClick(day)}
              >
                <span>{day}</span>
                {hasEvent && <div className="event-label">{events[key].title}</div>}
              </div>
            );
          })}
        </div>

        {selectedDate && (
          <div className="popup">
            <div className="popup-content">
              <h3>{selectedDate.title}</h3>
              <p>{selectedDate.details}</p>
              <button onClick={() => setSelectedDate(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
