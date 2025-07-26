import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import {
  Container,
  Card,
  LeftSide,
  Image,
  Label,
  InfoText,
  SocialIcons,
  RightSide,
  Title,
  Paragraph,
  Row,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonLeft,
  SkeletonParagraph,
  SkeletonRight,
  SkeletonText,
  SkeletonTitle
} from "./teamDetailComponent.style";
import FacebookIcon from "../../assets/images/icons/f.svg";
import LinkedinIcon from "../../assets/images/icons/linkdin.svg";
import InstagramIcon from "../../assets/images/icons/insta.svg";

const TeamDetailComponent = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      setLoading(true);

      const { data: bio } = await supabase
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
        .eq("user_id", id)
        .single();

      const { data: profile } = await supabase
        .from("profiles")
        .select(`id, first_name, last_name`)
        .eq("id", id)
        .single();

      if (bio && profile) {
        setMember({
          id: bio.user_id,
          avatar: bio.avatar_url,
          name: `${profile.first_name} ${profile.last_name}`,
          email: bio.email,
          loves: bio.loves,
          hates: bio.hates,
          socialLinks: [
            { icon: LinkedinIcon, url: bio.linkedin_url },
            { icon: FacebookIcon, url: bio.facebook_url },
            { icon: InstagramIcon, url: bio.instagram_url },
          ],
          description: bio.bio || "",
        });
      }

      setLoading(false);
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <SkeletonCard>
          <SkeletonLeft>
            <SkeletonAvatar />
            <SkeletonText width="80%" />
            <SkeletonText width="50%" />
            <SkeletonText width="70%" />
            <SkeletonText width="60%" />
          </SkeletonLeft>
          <SkeletonRight>
            <SkeletonTitle />
            <SkeletonParagraph />
            <SkeletonParagraph />
            <SkeletonParagraph />
          </SkeletonRight>
        </SkeletonCard>
      </Container>
    );
  }

  if (!member) return <Container>Team member not found.</Container>;

  return (
    <Container>
      <Card>
        <LeftSide>
          <Image src={member.avatar} alt={member.name} />

          <Row>
            <Label>Email:</Label>
            <InfoText>{member.email}</InfoText>
          </Row>

          <Row>
            <Label>Socials:</Label>
            <SocialIcons>
              {member.socialLinks.map(
                (item, i) =>
                  item.url && (
                    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
                      <img src={item.icon} alt={`social-${i}`} />
                    </a>
                  )
              )}
            </SocialIcons>
          </Row>

          <Row>
            <Label>Loves:</Label>
            <InfoText>{member.loves}</InfoText>
          </Row>
          <Row>
            <Label>Hates:</Label>
            <InfoText>{member.hates}</InfoText>
          </Row>
        </LeftSide>

        <RightSide>
          <Title>
            About <span>{member.name}</span>
          </Title>
          {member.description.split("\n").map((para, i) => (
            <Paragraph key={i}>{para}</Paragraph>
          ))}
        </RightSide>
      </Card>
    </Container>
  );
};

export default TeamDetailComponent;
