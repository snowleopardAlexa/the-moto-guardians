import {
    Facebook,
    Instagram,
    Tiktok,
    MailOutline,
    Phone,
    Room,
  } from "@material-ui/icons";
  
  import {
    Container,
    Left,
    Right,
    Logo,
    Desc,
    SocialContainer,
    SocialIcon,
    Center,
    Title,
    List,
    ListItem,
    PaymentContainer,
    ContactItem,
    PaymentIcon,
  } from "./FooterStyles";
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>The Moto Guardians</Logo>
          <Desc>
            We help battered women and children
          </Desc>
          <SocialContainer>
            <SocialIcon color="#3b5998">
              <Facebook style={{ marginTop: "8px" }} />
            </SocialIcon>
            <SocialIcon color="#c32aa3">
              <Instagram style={{ marginTop: "8px" }} />
            </SocialIcon>
            <SocialIcon color="#1da1f2">
              <Tiktok style={{ marginTop: "8px" }} />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Our Mission</ListItem>
            <ListItem>Chapters</ListItem>
            <ListItem>Become Member</ListItem>
            <ListItem>Help</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> 183 Eldert Street, New York
            City 10001
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +1 756 7869 8596
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            pbw@gmail.com
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;