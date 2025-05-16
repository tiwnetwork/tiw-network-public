import React, { useState } from "react";
import NewsletterFeaturesStyle from "./NewsletterFeatures.style";
import TitleStyleWrapper from "./../../../Components/Title/Title.style";
import { partnersData } from "../../../assets/data/partners/partnersData";
import RightArrow from "../../../assets/images/icons/arrow-right-black.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { useEffect } from "react";

const NewsletterFeatures = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on the search term
  const filteredPartners = partnersData.filter((partner) =>
    partner.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <NewsletterFeaturesStyle className="newsleter-features-secton">
      <div className="container">
        {/* Search input */}
        <div className="row align-items-center mb-4">
          <div className="col-lg-9">
            <h2 className="form-title" data-splitting>
              Driving success with trusted allies
            </h2>
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


        {/* Render filtered results */}
        <div className="row">
          {filteredPartners.length > 0 ? (
            filteredPartners.map((partners, index) => (
              <div key={index} className="col-lg-6 col-sm-6">
                <ScrollAnimate delay={partners.delay}>
                  <div className="newsleter-features-card">
                    <div className="newsleter-features-card-img">
                      <img src={partners.image} alt={`partners-img-${index}`} />
                    </div>
                    <div className="newsleter-features-card-text">
                      <h5 className="wt-700">{partners.title}</h5>
                      <p>{partners.description}</p>
                      <a href="#">
                        Learn more
                        <img src={RightArrow} alt="icon" />
                      </a>
                    </div>
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
      
    </NewsletterFeaturesStyle>
  );
};

export default NewsletterFeatures;
