import './Resume.css';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation.jsx'

const Resume = () => {
  return (
    <div className="ResumeDiv">
      <Navigation />
      <h2>Resume</h2>
      <button>DOWNLOAD</button>
      <div className="resumeHeader">
      <h5>DAVIDGURULEJR@GMAIL.COM</h5>
      <h5>COLORADO SPRINGS, CO 80921</h5>
      <h5>719-251-5984</h5>
      <h5>LINKEDIN</h5>
      </div>
      <h2>DAVID BARCLAY GURULE JR</h2>
      <h5>WEB DEVEOPER   |   SOFTWARE ENGINEER   |   FULL-STACK</h5>
      
      <h3>SKILLS, TRAINING, AND FAMILIARITY</h3>
      <hr />
      <p>JavaScript, HTML, CSS, Flexbox, Postman, REACT, Bootstrap, Google Products, AirTable, Microsoft Sharepoint, Adobe Products, MongoDB, Linux, Windows, Android</p>
      
      <h3>WHO AM I?</h3>
      <hr />  
      <p>I have combined the experience I gained in the General Assembly Software Engineering Immersive with the skills I developed while earning my Masters in Management from Colorado State University to envision ways of developing solutions that can genuinely improve the lives of individuals and teams. I have over 15 years of experience in Law Enforcement, with five years of that time in a project management role. I spent my last year in law enforcement supervising a team of highly energetic and motivated members.
      My passion is people, innovation, technology and how they support each other. I am enthusiastic about projects where I am coding to benefit others in meaningful ways.</p>
      
      <h3>EXPERIENCE</h3>
      <hr />
      <div className="experience">
      <p>General Assembly-SoftwareFellow <br />Software Fellow</p>
      </div>
      <div className="locationAndDates">
      <p>New York, New York <br />September 2021 - December 2021</p>
      <p>-At General Assembly I recieved experience in both frontend and backend processes and systems. I complete projects demonstrating not just the code knowledge but the processes involved in project management and participation.  The importance of wire-framing, pseudocode, diagramming and planning was essential to my success.</p>
      </div>

      <div className="experience">
      <p>Department of Public Safety-Colorado State Patrol <br />Sergeant, Trooper, Recruiter, Registrar</p>
      </div>
      <div className="locationAndDates">
      <p>Lakewood, Colorado <br />January 2007-September 2021</p>
      <p>-With the Colorado State Patrol I contributed in serveral leadership roles while serving the citizens of Colorado and keeping our great state safe.  I was awarded several contributions: top DUI, Seatbelts, top Academics. I had several teaching roles and demonstrated project management success and leadership experiences which were in fast-paced high-risk situations (i.e. stand-offs, shootings, fatal and serious injury crashes, use-of-force reporting, etc.)</p>
      </div>

      <h3>EDUCATION</h3>
      <hr />
      <div className="education">
      <p>General Assembly - Software Engineering Program</p>
      </div>
      <div className="location">
      <p>New York, New York</p>
      </div>
      <p>-I completed a twelve week immersion program which included project experience and tools and languages including but not limited to: HTML, CSS, JS, API's, REACT, NODE, MONGODB, EXPRESS, MONGOOSE, RUBY ON RAILS, AND POSTGRESQL.</p>

      <div className="education">
      <p>Colorado State University-Master's Degree-Management</p>
      </div>
      <div className="location">
      <p>Greenwood Village, Colorado</p>
      </div>
      <p>-I completed a MS degree in Management which consisted of strategic planning, quantitative and qualitative methodology, critical thinking, economics and project management.</p>

      <div className="education">
      <p>Colorado State University-Bachelor's Degree-Sociology</p>
      </div>
      <div className="location">
      <p>Pueblo, Colorado</p>
      </div>
      <p>-I completed my undergraduate degree in Sociology with an emphasis in Criminology. This consisted of the understanding of social norms, social inequalities and the relationship between individuals and groups. I developed the skills to conduct research in human and community interactions.</p>
      
    </div>
  );
}

export default Resume;