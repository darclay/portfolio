import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './screens/home/Home.jsx'
import Contact from './screens/contact/Contact.jsx'
import MeetDave from './screens/meet-dave/MeetDave.jsx'
import Projects from './screens/projects/Projects.jsx'
import Resume from './screens/resume/Resume.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/meet-dave" element={<MeetDave />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact-me" element={<Contact />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
