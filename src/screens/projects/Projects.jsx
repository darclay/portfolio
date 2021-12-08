import './Projects.css';
import { Link, Route, Routes } from 'react-router-dom';
import collisionCourseDesktop from './photos/collision_course.png';
import collisionCourseMobile from './photos/collision_course_mobile.png';
import poopetratorDesktop from './photos/poopetrator_desktop.png';
import poopetratorMobile from './photos/poopetrator_mobile.png';
import everfreeDesktop from './photos/everfree_desktop.png';
import everfreeMobile from './photos/everfree_mobile.png';
import wwwLogo from './photos/www.png';
import githubLogo from './photos/github.png';
import NavBar from '../../components/navigation/NavBar.jsx'
import Footer from '../../components/footer/Footer.jsx'

const Projects = () => {
  return (
    <div className="ProjectsDiv">
          <NavBar /> 
          <h2 className="projectsTitle">PROJECTS</h2>
          

          <div className="content">
              <div className="everfreeDiv">
                  <img className="img1" src={everfreeDesktop} alt="everfree site"/>
                  <img className="img2" src={everfreeMobile} alt="everfree mobile site"/>
              </div>

              <div className="links">
                  <a href="https://everfree-outdoors.netlify.app/" className="firstLink" target="_blank">
                    <h3>go to site</h3>
                    <img className="wwwLogo" src={wwwLogo} alt="www logo"/>
                  </a>
                  <a href="https://github.com/darclay/EverFree-Outdoors" className="secondLink" target="_blank">  
                    <h3>go to code</h3>
                    <img className="githubLogo" src={githubLogo} alt="github logo"/>
                  </a>
              </div>

              <hr className="separator"/>
                
              <div className="collisionCourseDiv">
                  <img className="img1" src={collisionCourseDesktop} alt="collision course site"/>
                  <img className="img2" src={collisionCourseMobile} alt="collision course mobile site"/>
              </div>
              
              <div className="links">
                  <a href="https://collision-course.netlify.app/" className="firstLink" target="_blank">
                    <h3>go to site</h3>
                    <img className="wwwLogo" src={wwwLogo} alt="www logo"/>
                  </a>

                  <a href="https://github.com/darclay/COLLISION-COURSE" className="secondLink" target="_blank">
                    <h3>go to code</h3>
                    <img className="githubLogo" src={githubLogo} alt="github logo"/>
                  </a>
              </div>
              
              <hr className="separator"/>
              
              <div className="poopetratorDiv">
                  <img className="img1" src={poopetratorDesktop} alt="poopetrator site"/>
                  <img className="img2" src={poopetratorMobile} alt="poopetrator mobile site"/>
              </div>
              
              <div className="links">
                  <a href="https://poopetrator.netlify.app/" className="firstLink" target="_blank">
                    <h3>go to site</h3>
                    <img className="wwwLogo" src={wwwLogo} alt="www logo"/>
                  </a>
                  <a href="https://github.com/darclay/poopetrator" className="secondLink" target="_blank">
                    <h3>go to code</h3>
                    <img className="githubLogo" src={githubLogo} alt="github logo"/>
                  </a>
              </div>  

              <hr className="separator"/>
          </div>
              <Footer /> 

    </div>
  );
}

export default Projects;