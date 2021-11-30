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

const Projects = () => {
  return (
    <div className="ProjectsDiv">
     <h1>PROJECTS</h1>
     <div className="everfree">
       <img src={everfreeDesktop} alt="everfree site"/>
       <img src={everfreeMobile} alt="everfree mobile site"/>
     </div>
     <div className="links">
        <h3>go to site</h3>
        <img src={wwwLogo} alt="www logo"/>
        <h3>go to code</h3>
        <img src={githubLogo} alt="github logo"/>
     </div>   
     <div className="blueBanner"></div>
       
     <div className="collisionCourseDiv">
       <img src={collisionCourseDesktop} alt="collision course site"/>
       <img src={collisionCourseMobile} alt="collision course mobile site"/>
     </div>
     <div className="links">
        <h3>go to site</h3>
        <img src={wwwLogo} alt="www logo"/>
        <h3>go to code</h3>
        <img src={githubLogo} alt="github logo"/>
     </div>
     <div className="blueBanner"></div>
    
     <div className="poopetrator">
       <img src={poopetratorDesktop} alt="poopetrator site"/>
       <img src={poopetratorMobile} alt="poopetrator mobile site"/>
     </div>
     <div className="links">
        <h3>go to site</h3>
        <img src={wwwLogo} alt="www logo"/>
        <h3>go to code</h3>
        <img src={githubLogo} alt="github logo"/>
     </div>   
     <div className="blueBanner"></div>


    </div>
  );
}

export default Projects;