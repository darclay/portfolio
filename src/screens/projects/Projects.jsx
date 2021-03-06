import "./Projects.css";
import { Link, Route, Routes } from "react-router-dom";
import collisionCourseDesktop from "./photos/collision_course.png";
import collisionCourseMobile from "./photos/collision_course_mobile.png";
import poopetratorDesktop from "./photos/poopetrator_desktop.png";
import poopetratorMobile from "./photos/poopetrator_mobile.png";
import everfreeDesktop from "./photos/everfree_desktop.png";
import everfreeMobile from "./photos/everfree_mobile.png";
import hekatesDesktop from "./photos/hekates_bees_desktop.png";
import hekatesMobile from "./photos/hekates_bees_mobile.png";
import luckyDice from "./photos/lucky_dice.png";
import luckyDiceModal from "./photos/lucky_dice_modal.png";
import wwwLogo from "./photos/www.png";
import githubLogo from "./photos/github.png";
import NavBar from "../../components/navigation/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Projects = () => {
  return (
    <div className="ProjectsDiv">
      <NavBar />
      <h2 className="projectsTitle">PROJECTS</h2>

      <div className="content">
        {/* ------------------------------------------ */}
        <div className="hoverEffect">
          <div className="hekatesDiv projectDiv">
            <img className="img1" src={hekatesDesktop} alt="everfree site" />
            <img
              className="img2"
              src={hekatesMobile}
              alt="everfree mobile site"
            />
          </div>
          <div className="links">
            <a
              href="https://hekates-bees.netlify.app/"
              className="firstLink"
              target="_blank"
            >
              <h3>go to site</h3>
              <img className="wwwLogo" src={wwwLogo} alt="www logo" />
            </a>
            <a
              href="https://github.com/darclay/hekates_bees"
              className="secondLink"
              target="_blank"
            >
              <h3>go to code</h3>
              <img className="githubLogo" src={githubLogo} alt="github logo" />
            </a>
          </div>
          <hr className="separator2" />
        </div>
        {/* ------------------------------------------ */}
        <div className="hoverEffect">
          <div className="everfreeDiv projectDiv">
            <img className="img1" src={everfreeDesktop} alt="everfree site" />
            <img
              className="img2"
              src={everfreeMobile}
              alt="everfree mobile site"
            />
          </div>
          <div className="links">
            <a
              href="https://everfree-outdoors.netlify.app/"
              className="firstLink"
              target="_blank"
            >
              <h3>go to site</h3>
              <img className="wwwLogo" src={wwwLogo} alt="www logo" />
            </a>
            <a
              href="https://github.com/darclay/EverFree-Outdoors"
              className="secondLink"
              target="_blank"
            >
              <h3>go to code</h3>
              <img className="githubLogo" src={githubLogo} alt="github logo" />
            </a>
          </div>
          <hr className="separator2" />
        </div>
        {/* ------------------------------------------ */}
        <div className="hoverEffect">
          <div className="collisionCourseDiv projectDiv">
            <img
              className="img1"
              src={collisionCourseDesktop}
              alt="collision course site"
            />
            <img
              className="img2"
              src={collisionCourseMobile}
              alt="collision course mobile site"
            />
          </div>
          <div className="links">
            <a
              href="https://collision-course.netlify.app/"
              className="firstLink"
              target="_blank"
            >
              <h3>go to site</h3>
              <img className="wwwLogo" src={wwwLogo} alt="www logo" />
            </a>
            <a
              href="https://github.com/darclay/COLLISION-COURSE"
              className="secondLink"
              target="_blank"
            >
              <h3>go to code</h3>
              <img className="githubLogo" src={githubLogo} alt="github logo" />
            </a>
          </div>
          <hr className="separator2" />
        </div>
        {/* ------------------------------------------ */}
        <div className="hoverEffect">
          <div className="poopetratorDiv projectDiv">
            <img
              className="img1"
              src={poopetratorDesktop}
              alt="poopetrator site"
            />
            <img
              className="img2"
              src={poopetratorMobile}
              alt="poopetrator mobile site"
            />
          </div>

          <div className="links">
            <a
              href="https://poopetrator.netlify.app/"
              className="firstLink"
              target="_blank"
            >
              <h3>go to site</h3>
              <img className="wwwLogo" src={wwwLogo} alt="www logo" />
            </a>
            <a
              href="https://github.com/darclay/poopetrator"
              className="secondLink"
              target="_blank"
            >
              <h3>go to code</h3>
              <img className="githubLogo" src={githubLogo} alt="github logo" />
            </a>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className="hoverEffect">
          <div className="diceGameDiv projectDiv">
            <img
              className="img1"
              src={luckyDice}
              alt="lucky dice site"
            />
            <img
              className="img2"
              src={luckyDiceModal}
              alt="lucky dice site"
            />
          </div>

          <div className="links">
            <a
              href="https://lucky-dice-game.netlify.app/"
              className="firstLink"
              target="_blank"
            >
              <h3>go to site</h3>
              <img className="wwwLogo" src={wwwLogo} alt="www logo" />
            </a>
            <a
              href="https://github.com/darclay/dice-game"
              className="secondLink"
              target="_blank"
            >
              <h3>go to code</h3>
              <img className="githubLogo" src={githubLogo} alt="github logo" />
            </a>
          </div>
        </div>
        {/* ------------------------------------------- */}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
