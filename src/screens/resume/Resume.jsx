import './Resume.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Document } from 'react-pdf'
import NavBar from '../../components/navigation/NavBar.jsx'
import Footer from '../../components/footer/Footer.jsx'


const handleDownload = () => {
  console.log('download button clicked')
}


const Resume = () => {
  return (
    <div className="resumeDiv">
        <NavBar />
        
        <h2 className="resumeTitle">Resume</h2>
        <div className="buttonDiv">
        <button className="downloadButton" onClick={handleDownload}>DOWNLOAD</button>
        </div>
        
        <section className="section1">
            <p>DAVIDGURULEJR@GMAIL.COM</p>
            <p>COLORADO SPRINGS, CO 80921</p>
            <p>LINKEDIN</p>
        </section>
{/* ============================== NAME AND TITLE ================================================== */}
        <section className="section2">
            <h2 className="davidNameTitle">DAVID BARCLAY GURULE JR</h2>
            <p>WEB DEVEOPER   |   SOFTWARE ENGINEER   |   FULL-STACK</p>
{/* ============================== SKILLS TRAINING FAMILIARITY ===================================== */}
            <p className="bold">SKILLS, TRAINING, AND FAMILIARITY</p>
            <hr />
            <p>JavaScript, HTML, CSS, Flexbox, Postman, REACT, Bootstrap, Google Products, AirTable, Microsoft Sharepoint, Adobe Products, MongoDB, Linux, Windows, Android</p>
{/* ============================== WHO AM I ======================================================== */}
            <p className="bold">WHO AM I?</p>
            <hr />  
            <p>I have combined the experience I gained in the General Assembly Software Engineering Immersive with the skills I developed while earning my Masters in Management from Colorado State University to envision ways of developing solutions that can genuinely improve the lives of individuals and teams. I have over 15 years of experience in Law Enforcement, with five years of that time in a project management role. I spent my last year in law enforcement supervising a team of highly energetic and motivated members.<br/>My passion is people, innovation, technology and how they support each other. I am enthusiastic about projects where I am coding to benefit others in meaningful ways.</p>
 {/* ============================== EXPERIENCE ====================================================== */}
            <p className="bold">EXPERIENCE</p>
            <hr />
        </section>
                
        <section className="section3">
            <p>General Assembly-SoftwareFellow <br />Software Fellow</p>
            <p id="location1">New York, New York <br />September 2021 - December 2021</p>
        </section>
        
        <section className="section4">
            <p>-At General Assembly I recieved experience in both frontend and backend processes and systems. I complete projects demonstrating not just the code knowledge but the processes involved in project management and participation.  The importance of wire-framing, pseudocode, diagramming and planning was essential to my success.</p>
        </section>

        <section className="section5">
            <p>Department of Public Safety-Colorado State Patrol <br />Sergeant, Trooper, Recruiter, Registrar</p>
            <p id="location2">Lakewood, Colorado <br />January 2007-September 2021</p>
        </section>

        <section className="section6">      
            <p>-With the Colorado State Patrol I contributed in serveral leadership roles while serving the citizens of Colorado and keeping our great state safe.  I was awarded several contributions: top DUI, Seatbelts, top Academics. I had several teaching roles and demonstrated project management success and leadership experiences which were in fast-paced high-risk situations (i.e. stand-offs, shootings, fatal and serious injury crashes, use-of-force reporting, etc.)</p>
        </section>
{/* ============== EDUCATION ============================ ====================*/}
        <section className="section7">
            <p className="bold">EDUCATION</p>
            <hr />
        </section>

        <section className="section8">
            <p>General Assembly - Software Engineering Program</p>
            <p>New York, New York</p>
        </section>

        <section className="section9">
            <p>-I completed a twelve week immersion program which included project experience and tools and languages including but not limited to: HTML, CSS, JS, API's, REACT, NODE, MONGODB, EXPRESS, MONGOOSE, RUBY ON RAILS, AND POSTGRESQL.</p>
        </section>

        <section className="section10">
            <p>Colorado State University-Master's Degree-Management</p>
            <p>Greenwood Village, Colorado</p>
        </section>

        <section className="section11">
            <p>-I completed a MS degree in Management which consisted of strategic planning, quantitative and qualitative methodology, critical thinking, economics and project management.</p>
        </section>

        <section className="section12">
            <p>Colorado State University-Bachelor's Degree-Sociology</p>
            <p>Pueblo, Colorado</p>
        </section>

        <section className="section13">
            <p>-I completed my undergraduate degree in Sociology with an emphasis in Criminology. This consisted of the understanding of social norms, social inequalities and the relationship between individuals and groups. I developed the skills to conduct research in human and community interactions.</p>
        </section>
        <Footer />
    </div>
  );
}

export default Resume;