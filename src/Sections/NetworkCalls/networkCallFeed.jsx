import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient"; 
import "./networkCallFeed.style.css";
import ScrollAnimate from "../../Components/ScrollAnimate";
import { Link } from "react-router-dom";

const NetworkCallFeed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("virtual_conferences")
        .select("title, conference_date, thumbnail_url, description");

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  // Filter events based on search
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Format date
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    };
  };

  return (
    <div className="event-list-container">
      <div className="event-list">
        <ScrollAnimate delay="200">
          <div className="row align-items-center mb-4">
            <div className="col-lg-9">
              <h2 className="form-title" data-splitting>
                Connect and collaborate online
              </h2>
            </div>
            <div className="col-lg-3">
              <input
                type="text"
                placeholder="Search meetings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay="200">
          {loading ? (
            <p>Loading events...</p>
          ) : filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => {
              const { day, date, month } = formatDate(event.conference_date);
              return (
                <div key={index} className="event-item">
                  <div className="event-date">
                    <div className="event-day">{day}</div>
                    <div className="event-number">{date}</div>
                    <div className="event-month-year">
                      <div>{month}</div>
                    </div>
                  </div>
                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-description">{event.description || "No description available."}</p>
                  </div>
                  <div className="event-action">
                    <Link to="/pricing">
                      <a>View Past Conference &nbsp; &gt;</a>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12">
              <p className="no-results text-center">No results found.</p>
            </div>
          )}
        </ScrollAnimate>
      </div>
    </div>
  );
};

export default NetworkCallFeed;
