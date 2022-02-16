import Home from './pages/Home/Home';
import Mission from './pages/Mission/Mission';
import BecomeMember from './pages/BecomeMember/BecomeMember';
import Help from './pages/Help/Help';
import Contact from './pages/Contact/Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home />}>Home</Route>
     <Route path="/mission" element={<Mission />}>Our Mission</Route>
     <Route path="/members" element={<BecomeMember />}>Become Memeber</Route>
     <Route path="/help" element={<Help />}>Help</Route>
     <Route path="/contact" element={<Contact />}>Contact</Route>
    </Routes>
    </>
  );
}

export default App;
