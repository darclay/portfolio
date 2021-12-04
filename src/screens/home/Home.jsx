import './Home.css';
import { Link, Route, Routes } from 'react-router-dom';
import windows from './photos/windows.jpg';
import davidPic from './photos/david_pencil_sketch.png';
import resumePic from './photos/resume.png';
import portfolioPic from './photos/collision-course-black-white.png';

const Home = () => {
  return (
    <>
   <img className="windows" src={windows} alt="windows" />
    <div className="HomeDiv">    
     <div className="MeetDavidDiv">
      <img id="david" src={davidPic} alt="david" />
      <h2>Meet Dave</h2>
     </div>
     <hr className="separator"/>
     <div className="DavidResumeDiv">
      <img id="resume" src={resumePic} alt="resume" />
      <h2>Dave's Resume</h2>
    <hr className="separator"/>
     </div>
     <div className="DavidPortfolioDiv">
      <img id="portfoliopic" src={portfolioPic} alt="portfolio pic" />
      <h2>Dave's Portfolio</h2>
    <hr className="separator"/>

     </div>
    </div>
    </>
  );
}

export default Home;             