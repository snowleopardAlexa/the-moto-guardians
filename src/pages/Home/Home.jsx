import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';
import MissionContent from '../../components/MissionContent/MissionContent';
import { introOne } from "../../data/IntroData";
import Content from '../../components/Content/Content';
import { heroOne, heroTwo } from "../../data/ContentData";

const Home = () => {
  return (
    <>
     <Navbar />
     <Intro {...introOne} />
     <MissionContent />
     <Content {...heroOne} />
     <Content {...heroTwo} />
    </>
  );
};

export default Home;