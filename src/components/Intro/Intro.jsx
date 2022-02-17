import { Container, IntroRow, IntroColumn, ImgWrapper, Img } from './IntroStyles';

const Intro = ({ img }) => {
  return (
    <Container>
        <IntroRow>
            <IntroColumn>
             <ImgWrapper>
               <Img src={img} />
             </ImgWrapper>
            </IntroColumn>
        </IntroRow>
    </Container>
  );
};

export default Intro;

