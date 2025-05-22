import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import BusinessChooseStyle from "./BusinessChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import whyChoose1 from "../../../assets/images/tiwmedia/events/event1.png";
import whyChoose2 from "../../../assets/images/tiwmedia/events/event2.png";
import whyChoose3 from "../../../assets/images/tiwmedia/events/event3.png";
import whyChoose4 from "../../../assets/images/tiwmedia/events/event4.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessChoose = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 9000,
    infinite: true,
    asNavFor: sliderNavRef.current,
    ref: sliderForRef,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: true,
    autoplaySpeed: 9000,
    centerMode: false,
    focusOnSelect: true,
    ref: sliderNavRef,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  useEffect(() => {
    setSettingsFor((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderNavRef.current,
    }));
    setSettingsNav((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderForRef.current,
    }));
  }, []);

  return (
    <BusinessChooseStyle className="why-choose-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
            <SectionTitle
              title="Major Events"
              subtitle="TIW NETWORK"
              alignment="center"
              parentClass="z-index-3"
            />
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <div className="why-choose-parent">
        <div className="overlay-left" />
        <div className="overlay-right" />
        <ScrollAnimate delay={200}>
        <div className="why-choose-container container">
          <div className="container">
            <div className="why-choose-tab">
              <Slider
                {...settingsNav}
                className="tab-buttons why-chose-slider-nav"
              >
                <button className="tab-btn">
                  <span>01.</span> <span className="text">The</span>
                  <span className="text2"> Conference</span>
                </button>
                <button className="tab-btn">
                  <span>02.</span> <span className="text">The Property </span>
                  <span className="text2">Social Summit</span>
                </button>
                <button className="tab-btn">
                  <span>03.</span> <span className="text">Christmas Ball &</span>
                  <span className="text2"> Investor Awards</span>
                </button>
                <button className="tab-btn">
                  <span>04.</span> <span className="text">Network </span>
                  <span className="text2">After Hours</span>
                </button>
              </Slider>
              <progress max={100} value={0} />
            </div>
          </div>

          <Slider {...settingsFor} className="convert-visitors-slider-for why-chose-slider">
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose1} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>The Conference</h2>
                  <p>
                    The Conference is an event designed for knowledge-sharing and industry-leading insights. With expert guest speakers and strategic partners, this event offers the tools, connections, and strategies necessary to build generational wealth. A gathering of the brightest minds in Scottish property, The Conference fosters collaboration and empowers attendees with the knowledge to thrive. It’s an unparalleled opportunity to learn, connect, and elevate your investment journey.
                  </p>

                </div>
              </div>
            </div>
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose2} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>The Property Social Summit</h2>
                  <p>
                    The Property Social Summit, is an event which combines a dynamic hybrid afternoon conference with a vibrant evening of social networking, offering the perfect blend of knowledge and entertainment. Throughout the day, you’ll gain valuable insights from industry leaders, and as the night unfolds, you’ll have the opportunity to forge meaningful connections with potential partners and investors. It’s an experience where learning meets opportunity, all while enjoying an unforgettable evening of drinks, conversation, and collaboration.
                  </p>

                </div>
              </div>
            </div>
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose3} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>Christmas Ball & Investor Awards</h2>
                  <p>
                    Scotland’s premier property awards ceremony, this exclusive black-tie event is our annual celebration of the achievements and growth of Scottish property investors and TIW Network members. With a scale akin to a grand wedding, this distinguished occasion unites the finest in the industry for an evening of cocktails, networking, and heartfelt recognition. A night where excellence in property investment is honoured, and connections are built for the year ahead.
                  </p>

                </div>
              </div>
            </div>
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose4} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>Network After Hours</h2>
                  <p style={{ fontStyle: "italic" }}>
                    An Unforgettable Night of Connection, Celebration & Community
                  </p>
                  <p>
                    Step into an evening designed for high-energy networking without the pressure. 
                    Network After Hours is where ambitious minds, bold ideas, and great vibes collide. 
                    Whether you're here to make new connections, strengthen existing ones, or just enjoy a great night out—this is your space.
                  </p>

                  {!isExpanded ? (
                    <p style={{ color: "#E6AD23 ", cursor: "pointer" }} onClick={() => setIsExpanded(true)}>
                      Read more...
                    </p>
                  ) : (
                    <>
                      <p>
                        <span style={{ fontWeight: "600" }}>Late-Night Networking</span><br />
                        
                          Break away from the typical business hours. This is where real conversations happen—
                          relaxed, authentic, a nd often game-changing.
                        
                      </p>
                      <p>
                        <span style={{ fontWeight: "600" }}>Open Bar & Great Food</span><br />
                          Enjoy a fully stocked bar and delicious food throughout the night. 
                          No drink tokens. No waiting. Just premium hospitality all evening long.
                        
                      </p>
                      <p style={{ color: "#E6AD23 ", cursor: "pointer" }} onClick={() => setIsExpanded(false)}>
                        Show less
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Slider>
        </div>
        </ScrollAnimate>
      </div>
    </BusinessChooseStyle>
  );
};

export default BusinessChoose;
