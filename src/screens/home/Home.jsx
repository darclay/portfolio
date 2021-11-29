import './Home.css';
import { Link, Route, Routes } from 'react-router-dom';
import windows from './photos/windows.jpg';
import davidPic from './photos/david_pencil_sketch.png';
import resumePic from './photos/resume.png';
import portfolioPic from './photos/collision-course-black-white.png';

const Home = () => {
  return (
    <div className="HomeDiv">
     <h1>HOME</h1>

    <aside>
      <img src={windows} alt="windows" />
    </aside>
     <div className="MeetDavidDiv">
      <img src={davidPic} alt="david" />
      <h2>Meet Dave</h2>
     </div>
     <div className="DavidResumeDiv">
      <img src={resumePic} alt="resume" />
      <h2>Dave's Resume</h2>
     </div>
     <div className="DavidPortfolioDiv">
      <img src={portfolioPic} alt="portfolio pic" />
      <h2>Dave's Portfolio</h2>
     </div>

    </div>
  );
}

export default Home;             