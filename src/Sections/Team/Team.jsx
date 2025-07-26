import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import TeamStyleWrapper from "./Team.style";
import ScrollAnimate from "../../Components/ScrollAnimate";
import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/images/icons/f.svg";
import LinkedinIcon from "../../assets/images/icons/linkdin.svg";
import InstagramIcon from "../../assets/images/icons/insta.svg";

const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      // Fetch public bios
      const { data: bios, error: biosError } = await supabase
        .from("public_bios")
        .select(
          `user_id,
           position,
           linkedin_url,
           facebook_url,
           instagram_url,
           bio,
           loves,
           hates,
           avatar_url,
           email`
        )
        .order("created_at", { ascending: true }); // oldest first

      if (biosError) {
        console.error("Error fetching bios:", biosError);
        return;
      }

      // Fetch profiles
      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select(`id, first_name, last_name`);

      if (profilesError) {
        console.error("Error fetching profiles:", profilesError);
        return;
      }

      // Merge data manually by matching user_id with profiles.id
      const merged = bios.map((bio, index) => {
        const profile = profiles.find((p) => p.id === bio.user_id);
        return {
          id: bio.user_id,
          avatar: bio.avatar_url,
          name: profile ? `${profile.first_name} ${profile.last_name}` : "Unknown User",
          designation: bio.position,
          delay: 100 * (index + 1),
          socialLinks: [
            { icon: LinkedinIcon, url: bio.linkedin_url },
            { icon: FacebookIcon, url: bio.facebook_url },
            { icon: InstagramIcon, url: bio.instagram_url },
          ],
        };
      });

      setMembers(merged);
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
          {members.map((member, index) => (
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
                      {member.socialLinks.map(
                        (item, i) =>
                          item.url && (
                            <li key={i}>
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
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
