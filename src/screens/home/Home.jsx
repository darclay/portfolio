import "./Home.css";
import { Link } from "react-router-dom";
import windows from "./photos/windows.jpg";
import davidPic from "./photos/david_pencil_sketch.png";
import resumePic from "./photos/resume.png";
import portfolioPic from "./photos/collision-course-black-white.png";
import NavBar from "../../components/navigation/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
  return (
    <div className="homeDiv">
      <NavBar />

      <Link to="meet-dave" style={{ textDecoration: "none" }}>
        <div className="meetDavidDiv">
          <img id="david" src={davidPic} alt="david" />
          <h2 id="meetDave">
            Meet
            <br />
            Dave
          </h2>
        </div>
      </Link>

      <hr className="separator" />

      <Link to="resume" style={{ textDecoration: "none" }}>
        <div className="davidResumeDiv">
          <h2 id="davesResume">
            Dave's
            <br />
            Resume
          </h2>
          <img id="resume" src={resumePic} alt="resume" />
        </div>
      </Link>

      <hr className="separator" />

      <Link to="projects" style={{ textDecoration: "none" }}>
        <div className="davidPortfolioDiv">
          <img id="portfoliopic" src={portfolioPic} alt="portfolio" />
          <h2 id="davesPortfolio">
            Dave's
            <br />
            Projects
          </h2>
        </div>
      </Link>

      <hr className="separator" />

      <Footer />
    </div>
  );
};

export default Home;
