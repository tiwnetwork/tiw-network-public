import TeamStyleWrapper from "./Team.style";
import Data from "../../assets/data/team/team";
import ScrollAnimate from "../../Components/ScrollAnimate";
import { Link } from "react-router-dom"; 


const Team = () => {

  return (
    <TeamStyleWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center mb-30">
          <ScrollAnimate delay={200}>
            <span className="sub-title">Get to Know</span>
            <h2 className="title mt-3 mb-4">Our Senior Staff Team</h2>
            <p className="description">
              The diverse experiences and skills within our senior team empower us to tackle challenges with innovative, collaborative solutions. Each member contributes unique talents and perspectives, ensuring we take a holistic approach to every project and partnership. 
            </p>
          </ScrollAnimate>
          </div>
        </div>
        <div className="row">
          {Data?.map((member, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <ScrollAnimate delay={member.delay}>
              <Link to={`/about/${member.id}`}>
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
                        <img src={item.icon} alt="social-icon" />
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </TeamStyleWrapper>
  );
};

export default Team;
