import { useParams } from "react-router-dom";
import data from "../../assets/data/team/team";
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
} from "./teamDetailComponent.style";

const TeamDetailComponent = () => {
  const { id } = useParams();
  const member = data.find((person) => person.id === id);

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
            {member.socialLinks.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
                <img src={item.icon} alt={`social-${i}`} />
              </a>
            ))}
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
