import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './screens/home/Home.jsx'
import Contact from './screens/contact/Contact.jsx'
import MeetDave from './screens/meet-dave/MeetDave.jsx'
import Portfolio from './screens/portfolio/Portfolio.jsx'
import Resume from './screens/resume/Resume.jsx'

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/meet-dave" element={<MeetDave />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact-me" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
