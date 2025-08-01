import { useState, useEffect } from "react";
import NewsletterFeaturesStyle from "./NewsletterFeatures.style";
import RightArrow from "../../../assets/images/icons/arrow-right-black.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { Link } from "react-router-dom";
import { supabase } from "../../../supabaseClient";

const NewsletterFeatures = () => {
  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [expandedItems, setExpandedItems] = useState(new Set());

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("partners")
        .select("name, logo_url, featured_text");

      if (error) {
        console.error("Error fetching partners:", error.message);
      } else if (data) {
        const priorityNames = [
          "GO Financial Services",
          "Prime Property Auctions",
          "Wren Kitchens",
          "B&Q (Tradepoint)",
          "LTJ Architecture",
          "Maloco Mowat Parker",
          "This Is Property"
        ];

        const sortedData = data.sort((a, b) => {
          const aIndex = priorityNames.indexOf(a.name);
          const bIndex = priorityNames.indexOf(b.name);

          const aIsPriority = aIndex !== -1;
          const bIsPriority = bIndex !== -1;

          if (aIsPriority && bIsPriority) return aIndex - bIndex;
          if (aIsPriority) return -1;
          if (bIsPriority) return 1;

          // Neither are priority → sort alphabetically
          return a.name.localeCompare(b.name);
        });

        setPartners(sortedData);
      }

      setLoading(false);
    };

    fetchPartners();
  }, []);

  const toggleExpand = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const filteredPartners = partners.filter((partner) =>
    partner.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <NewsletterFeaturesStyle className="newsleter-features-secton">
      <div className="container">
        {/* Search input */}
        <ScrollAnimate delay="200">
          <div className="row align-items-center mb-4">
            <div className="col-lg-9">
              <h2 className="form-title">Driving success with trusted allies</h2>
            </div>
            <div className="col-lg-3">
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </ScrollAnimate>

        {/* Loading */}
        {loading ? (
          <div className="row">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="col-lg-6 col-sm-6 mb-4">
                <div className="newsleter-features-card loading">
                  <div className="newsleter-features-card-img skeleton" />
                  <div className="newsleter-features-card-text">
                    <div className="skeleton skeleton-title mb-2" />
                    <div className="skeleton skeleton-text" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {filteredPartners.length > 0 ? (
              filteredPartners.map((partner, index) => {
                const isExpanded = expandedItems.has(index);
                const description = partner.featured_text || "";

                return (
                  <div key={index} className="col-lg-6 col-sm-6 mb-4">
                    <ScrollAnimate delay={index * 100}>
                      <div className="newsleter-features-card">
                        <div className="newsleter-features-card-img">
                          <img src={partner.logo_url} alt={`partner-${index}`} />
                        </div>
                        <div className="newsleter-features-card-text">
                          <h5 className="wt-700">{partner.name}</h5>

                          <p className={`feature-text ${isExpanded ? "expanded" : ""}`}>
                            {description}
                          </p>

                          {description.length > 90 && (
                            <button
                              onClick={() => toggleExpand(index)}
                              className="read-more-btn"
                            >
                              {isExpanded ? "Read less" : "Read more"}
                            </button>
                          )}

                          <Link to="/pricing" className="learn-more-link">
                            Learn more
                            <img src={RightArrow} alt="icon" />
                          </Link>
                        </div>
                      </div>
                    </ScrollAnimate>
                  </div>
                );
              })
            ) : (
              <div className="col-12">
                <p className="no-results text-center">No results found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </NewsletterFeaturesStyle>
  );
};

export default NewsletterFeatures;
