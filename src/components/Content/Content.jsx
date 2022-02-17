import {
  Intro,
  IntroLeft,
  IntroLeftWrapper,
  TitleIntro,
  SubtitleIntro,
  DescIntroText,
  SocialIconLink,
  SocialIconText,
  IntroSide,
  IntroRight,
  IntroImgWrapper,
  Img,
  Button
} from "./ContentStyles";

//import { Link } from "react-router-dom";

const Content = ({ img, inverse, reverse, headline, subtitle, description, buttonLabel, start }) => {
  return (
    <Intro inverse={inverse}>
      <IntroSide>
      <IntroLeft reverse={reverse}>
        <IntroLeftWrapper>
          <TitleIntro>{headline}</TitleIntro>
          <SubtitleIntro>{subtitle}</SubtitleIntro>
          <DescIntroText>{description}</DescIntroText>
          <Button>
         
              {buttonLabel}
        
          </Button>
        </IntroLeftWrapper>
      </IntroLeft>
      <IntroRight>
        <IntroImgWrapper start={start}>
         <Img src={img} />
        </IntroImgWrapper>
      </IntroRight>
      </IntroSide>
    </Intro>
  );
};

export default Content;