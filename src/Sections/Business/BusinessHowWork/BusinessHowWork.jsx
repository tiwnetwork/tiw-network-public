import { useState, useEffect } from "react";
import BusinessHowWorkStyle from "./BusinessHowWork.style";
import { supabase } from "../../../supabaseClient"; 
import { FaCalendarAlt } from "react-icons/fa";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import arrowRightBlueIcon from "../../../assets/images/icons/arrow-right-black.svg";
import { Link } from "react-router-dom";
import eventPlaceholder from '../../../assets/images/tiwmedia/events/eventPlaceholder.png';

const BusinessHowWork = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch events from Supabase when component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("name, description, date_time, image_url, location_details");

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        const now = new Date();

        const sortedData = data.sort((a, b) => {
          const dateA = new Date(a.date_time);
          const dateB = new Date(b.date_time);

          const isAFuture = dateA >= now;
          const isBFuture = dateB >= now;

          if (isAFuture && !isBFuture) return -1; // A future, B past → A first
          if (!isAFuture && isBFuture) return 1;  // B future, A past → B first

          // Both future → earlier first
          if (isAFuture && isBFuture) return dateA - dateB;

          // Both past → most recent past first (closest to now)
          return dateB - dateA;
        });

        setEventsData(sortedData);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);


  // ✅ Filter fetched data based on search term
  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BusinessHowWorkStyle className="how-works-section">
      <div className="container">
        {/* Header with title and search input */}
        <ScrollAnimate delay="200">
          <div className="row align-items-center mb-4">
            <div className="col-lg-9">
              <h2 className="form-title">
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
        </ScrollAnimate>

        {/* Render filtered results */}
        <div className="row">
        {loading ? (
          // ✅ Show placeholder skeleton cards instead of plain text
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="col-lg-4 col-md-6 mb-4">
              <div className="skeleton">
                <div className="image-container skeleton-box"></div>
                <div className="how-works-meta">
                  <div className="meta-item skeleton-line"></div>
                  <div className="meta-item skeleton-line"></div>
                </div>
                <h4 className="how-works-title skeleton-line"></h4>
                <p className="how-works-description skeleton-line"></p>
              </div>
            </div>
          ))
        ) : filteredEvents.length > 0 ? (
          filteredEvents.map((item, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-4">
            <ScrollAnimate delay={i * 100}>
              <div className="how-works-card-modern">
                <div className="image-container">
                  <img
                    src={item.image_url ?? eventPlaceholder}
                    alt={item.name}
                    className="how-works-image"
                  />
                </div>
                <div className="how-works-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>
                      {new Date(item.date_time).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <h4 className="how-works-title">{item.name}</h4>
                <p className="how-works-description">
                  {item.description}
                </p>
                <Link to="/pricing">
                  <span>Sign Up to Book Event</span>
                  <img src={arrowRightBlueIcon} alt="icon" />
                </Link>
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
