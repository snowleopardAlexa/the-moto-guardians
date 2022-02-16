import { Container, IntroRow, IntroColumn, ImgWrapper, Img } from './IntroStyles';

export const Intro = ({ src }) => {
  return (
    <Container>
        <IntroRow>
            <IntroColumn>
               <ImgWrapper>
                 <Img src={src} />
               </ImgWrapper>
            </IntroColumn>
            <IntroColumn>
            <ImgWrapper>
                 <Img src={src} />
               </ImgWrapper>
            </IntroColumn>
        </IntroRow>
    </Container>
  )
}
