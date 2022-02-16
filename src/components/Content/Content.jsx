import { Section, Container, ContentRow, Img, ContentColumn, TextWrapper, Heading, Subtitle, ContentButton, ImgWrapper } from 'styled-components';

const Content = () => {
  return (
     <Section>
       <Container>
         <ContentRow>
           <Img />
         </ContentRow>
         <ContentRow>
           <ContentColumn>
             <TextWrapper>
               <Heading></Heading>
               <Subtitle></Subtitle>
             </TextWrapper>
             <ContentButton></ContentButton>
           </ContentColumn>
           <ContentColumn>
             <ImgWrapper>
               <Img />
             </ImgWrapper>
           </ContentColumn>
         </ContentRow>
       </Container>
     </Section>
  );
};

export default Content;