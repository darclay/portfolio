import './Home.css';
import windows from './photos/windows.jpg';
import davidPic from './photos/david_pencil_sketch.png';
import resumePic from './photos/resume.png';
import portfolioPic from './photos/collision-course-black-white.png';
import Navigation from '../../components/navigation/Navigation.jsx'
import Footer from '../../components/footer/Footer.jsx'

const Home = () => {
  return (
    <div className="HomeDiv">
        <Navigation />
        <br/>
        
        <div className="WindowDiv">
          <img className="windows" src={windows} alt="windows" />
        </div>
    
        <div className="MeetDavidDiv">
        <img id="david" src={davidPic} alt="david" />
        <h2 id="meetDave">Meet<br/>Dave</h2>
        </div>

        <hr className="separator"/>

        <div className="DavidResumeDiv">
        <h2 id="davesResume">Dave's<br/>Resume</h2>
        <img id="resume" src={resumePic} alt="resume" />
        </div>

        <hr className="separator"/>

        <div className="DavidPortfolioDiv">
        <img id="portfoliopic" src={portfolioPic} alt="portfolio" />
        <h2 id="davesPortfolio">Dave's<br/>Portfolio</h2>
        </div>

        <hr className="separator"/>

        <Footer /> 
    </div>
  );
}

export default Home;             