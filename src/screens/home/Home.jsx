import "./Home.css";
import { Link } from "react-router-dom";
import windows from "./photos/windows.jpg";
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
      <NavBar />

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
          <h2 className="homeSubHeading">Projects</h2>
        </div>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
