import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient"; 
import TeamStyleWrapper from "./Team.style";
import ScrollAnimate from "../../Components/ScrollAnimate";
import { Link } from "react-router-dom";

const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const { data, error } = await supabase
        .from("public_bios")
        .select(
          `position,
           linkedin_url,
           facebook_url,
           instagram_url,
           bio,
           loves,
           hates,
           avatar_url,
           email,
           profiles!inner(first_name, last_name)`
        );

      if (error) {
        console.error("Error fetching team data:", error);
      } else {
        const formattedData = data.map((item, index) => ({
          id: item.email, // using email as ID, adjust if needed
          avatar: item.avatar_url,
          name: `${item.profiles.first_name} ${item.profiles.last_name}`,
          designation: item.position,
          delay: 100 * (index + 1), // stagger animation
          socialLinks: [
            { icon: "/icons/linkedin.svg", url: item.linkedin_url },
            { icon: "/icons/facebook.svg", url: item.facebook_url },
            { icon: "/icons/instagram.svg", url: item.instagram_url },
          ],
        }));
        setMembers(formattedData);
      }
    };

    fetchTeam();
  }, []);

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
          {members?.map((member, index) => (
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
                      {member.socialLinks?.map(
                        (item, i) =>
                          item.url && (
                            <li key={i}>
                              <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <img src={item.icon} alt="social-icon" />
                              </a>
                            </li>
                          )
                      )}
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
