import React, { useState, useEffect } from "react";
import BusinessHowWorkStyle from "./BusinessHowWork.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { eventsData } from "../../../assets/data/BusinessData/eventsData";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import arrowRightBlueIcon from "../../../assets/images/icons/arrow-right-black.svg";
import Splitting from "splitting";
import ScrollOut from "scroll-out";

const BusinessHowWork = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term
  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <BusinessHowWorkStyle className="how-works-section">
      <div className="container">
        {/* Header with title and search input */}
        <div className="row align-items-center mb-4">
          <div className="col-lg-9">
            <h2 className="form-title" data-splitting>
              Your gateway to meaningful connections
            </h2>
          </div>

          <div className="col-lg-3">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        {/* Render filtered results */}
        <div className="row">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-4">
                <ScrollAnimate delay={item.delay}>
                  <div className="how-works-card-modern">
                    <div className="image-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="how-works-image"
                      />
                    </div>
                    <div className="how-works-meta">
                      <div className="meta-item">
                        <FaCalendarAlt className="meta-icon" />
                        <span>{item.date}</span>
                      </div>
                      <div className="meta-item">
                        <FaMapMarkerAlt className="meta-icon" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <h4 className="how-works-title">{item.title}</h4>
                    <p className="how-works-description">{item.description}</p>
                    <a href="#">
                      <span>Sign Up to Book Event</span>
                      <img src={arrowRightBlueIcon} alt="icon" />
                    </a>
                  </div>
                </ScrollAnimate>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="no-results text-center">No results found.</p>
            </div>
          )}
        </div>
      </div>
    </BusinessHowWorkStyle>
  );
};

export default BusinessHowWork;
