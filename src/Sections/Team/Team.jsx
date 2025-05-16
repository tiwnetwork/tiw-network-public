import TeamStyleWrapper from "./Team.style";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Data from "../../assets/data/team/team";
import ScrollAnimate from "../../Components/ScrollAnimate";

import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { useEffect } from "react";



const Team = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <TeamStyleWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center mb-30">
          <ScrollAnimate delay={200}>
            <span className="sub-title" data-splitting>Get to Know</span>
            <h2 className="title mt-3 mb-4" data-splitting>OUR SENIOR STAFF TEAM</h2>
            <p className="description">
              The diverse experiences and skills within our network enable us to tackle challenges with innovative and collaborative solutions. Each member brings unique talents and perspectives, ensuring a holistic approach to every endeavor.
            </p>
          </ScrollAnimate>
          </div>
        </div>
        <div className="row">
          {Data?.map((member, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <ScrollAnimate delay={member.delay}>
              <div className="team-card">
                <div className="team-card-img">
                  <img src={member.avatar} alt={`team-img-${index}`} />
                </div>
                <div className="team-card-info">
                  <h5>{member.name}</h5>
                  <p>{member.designation}</p>
                </div>
                <ul className="team-social-link">
                  {member.socialLinks?.map((item, i) => (
                    <li key={i}>
                      <a href={item.url}>
                        <img src={item.icon} alt="social-icon" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </TeamStyleWrapper>
  );
};

export default Team;
