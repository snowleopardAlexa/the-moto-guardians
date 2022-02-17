import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';
import MissionContent from '../../components/MissionContent/MissionContent';
import { introOne } from "../../data/IntroData";
import Content from '../../components/Content/Content';
import { heroOne, heroTwo } from "../../data/ContentData";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
     <Navbar />
     <Intro {...introOne} />
     <MissionContent />
     <Content {...heroOne} />
     <Content {...heroTwo} />
     <Footer />
    </>
  );
};

export default Home;