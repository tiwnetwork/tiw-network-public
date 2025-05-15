import React, { useState } from "react";
import { eventData } from "../../assets/data/networkCalls/networkCalls";
import "./networkCallFeed.style.css";

const NetworkCallFeed = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter eventData based on search term
  const filteredEvents = eventData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="event-list-container">
      <div className="event-list">
        {/* Title and Search Row */}
        <div className="row align-items-center mb-4">
          <div className="col-9">
            <h2 className="form-title" data-splitting>
              Connect and collaborate online
            </h2>
          </div>
          <div className="col-3">
            <input
              type="text"
              placeholder="Search meetings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        {/* Conditionally render events or "No results" */}
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
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
          ))
        ) : (
          <div className="col-12">
            <p className="no-results text-center">No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NetworkCallFeed;
