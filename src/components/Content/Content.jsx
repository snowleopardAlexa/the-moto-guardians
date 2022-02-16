import { Section, Container, ContentRow, Img, ContentColumn, TextWrapper, Heading, Subtitle, ContentButton, ImgWrapper } from './ContentStyles';

const Content = ({ img, headline, description, buttonLabel, inverse, big, reverse }) => {
  return (
     <Section inverse={inverse}>
       <Container>
         <ContentRow reverse={reverse}>
           <ContentColumn>
             <TextWrapper>
               <Heading>{headline}</Heading>
               <Subtitle>{description}</Subtitle>
             </TextWrapper>
             <ContentButton
               inverse={inverse}
               big={big}
             >
               {buttonLabel}
             </ContentButton>
           </ContentColumn>
           <ContentColumn>
             <ImgWrapper>
               <Img src={img}/>
             </ImgWrapper>
           </ContentColumn>
         </ContentRow>
       </Container>
     </Section>
  );
};

export default Content;