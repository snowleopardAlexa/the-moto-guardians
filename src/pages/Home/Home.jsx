import Navbar from '../../components/Navbar/Navbar';
import Content from '../../components/Content/Content';
import { heroOne, heroTwo, heroThree } from "../../data/ContentData";

const Home = () => {
  return (
    <>
     <Navbar />
     <Content {...heroOne} />
     <Content {...heroTwo} />
     <Content {...heroThree} />
    </>
  );
};

export default Home;