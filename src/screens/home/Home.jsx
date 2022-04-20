import "./Home.css";
import { Link } from "react-router-dom";
import davidPic from "./photos/david_gurule.png";
import resumePic from "./photos/resume.png";
import portfolioPic from "../projects/photos/hekates_bees_mobile.png";
import collisionCourseMobile from "../projects/photos/collision_course_mobile.png";
import everfreeMobile from "../projects/photos/everfree_mobile.png";
import NavBar from "../../components/navigation/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
  return (
    <div className="homeDiv">
      <div className="construction">
        <h1>This site is currently under construction.  I'm excited about upcoming changes.  Come visit me soon!</h1>
        <h3>Please email me at:</h3>
        <h4>davidgurulejr@gmail.com</h4>
        <a href="https://github.com/darclay" target="_blank">Visit me at GITHUB</a><br/>
        <a href="https://www.linkedin.com/in/david-gurule-865624212/" target="_blank">Visit me at LINKEDIN</a>
      </div>
    
      {/* <NavBar />

      <Link to="meet-dave">
        <div className="meetDavidDiv">
          <img id="davidPic" src={davidPic} alt="david" />
          <h2 className="homeSubHeading">Meet Dave</h2>
        </div>
      </Link>

      <hr className="separator1" />

      <Link to="resume">
        <div className="davidResumeDiv">
          <img id="resumePic" src={resumePic} alt="resume" />
          <h2 className="homeSubHeading">Resume</h2>
        </div>
      </Link>

      <hr className="separator1" />

      <Link to="projects">
        <div className="davidProjectDiv">
          <div className="projectPicsDiv">
            <img className="projectPics" src={portfolioPic} alt="portfolio" />
            <img
              className="projectPics"
              src={collisionCourseMobile}
              alt="portfolio"
            />
            <img className="projectPics" src={everfreeMobile} alt="portfolio" />
          </div>
          <div className="projectPicsDivMobile">
            <img className="projectPics" src={portfolioPic} alt="portfolio" />
            <img
              className="projectPics"
              src={collisionCourseMobile}
              alt="portfolio"
            />
          </div>

          <h2 className="homeSubHeading">Projects</h2>
        </div>
      </Link>
      <Footer /> */}
    </div>
  );
};

export default Home;
