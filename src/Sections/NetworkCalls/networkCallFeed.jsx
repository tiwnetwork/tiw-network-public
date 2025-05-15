import React from "react";
import { eventData } from "../../assets/data/networkCalls/networkCalls";
import "./networkCallFeed.style.css";

const networkCallFeed = () => {
  return (
    <div className="event-list">
      {eventData.map((event, index) => (
        <div key={index} className="event-item">
          <div className="event-date">
            <div className="event-day">{event.day}</div>
            <div className="event-number">{event.date}</div>
            <div className="event-month-year">
              <div>{event.month}</div>
            </div>
          </div>
          <div className="event-content">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
          </div>
          <div className="event-action">
            <a href="#">Book event &nbsp; &gt;</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default networkCallFeed;
