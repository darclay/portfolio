import './MeetDave.css';
import { Link, Route, Routes } from 'react-router-dom';
import fam1 from './photos/family.jpg';
import riot1 from './photos/riot1.jpg';
import becAndDogs from './photos/becAndDogs.jpg';
import recruiter from './photos/recruiter.png';
import schoolShooting from './photos/shooting.jpg';
import hiker from './photos/hiker.jpg';
import familyHiking from './photos/familyHiking.jpg';
import NavBar from '../../components/navigation/NavBar.jsx'

const MeetDave = () => {
  return (

    <div className="MeetDiv">

          <NavBar />
                          
          <div className="container1">
                <div className="daveBio">
                    <h2>Meet Dave</h2>
                    <p>
                      Good Day and thank you for visiting my site and learning a little bit more about me.  My name is Dave and I live in Colorado, between the two largest cities in Colorado, Denver and Colorado Springs.  I am a native and have lived in almost ever corner of the state.  I was born in a little town on the southern border, Trinindad, but only spent a short part of my life there.  I grew up mostly in the Southeast Corner near Lamar and graduated highschool in McClave.
                      <br/>
                      Like most 18 year old kids, I had no idea what I wanted to do.  I watched a lot of kungfu movies as a kid and secretly wanted to be a ninja when I grew up.  Nobody told me that wasn't a real thing. :)  I lasted a semester in college and then went into the real world.  Very quickly, I met my wife, had a child, and the reality of the world set in.  I had to get an education and support a family.  I went back to school, concentrated on criminal justice and received a Bachelor's Degree with honors in Sociology.  I quickly got a job with the Colorado Department of Corrections and later with the Colorado State Patrol.  
                      <br/>
                      For the last 15 years I dedicated my life to protecting the citizens of Colorado while serving with the Colorado State Patrol (CSP).  I started in the southwest corner of Colorado and later moved to the front range.  I was a road trooper in both rural and metro areas.  During my career, I served as a public information officer, a field training officer, a super-user for technology, and a trainer.  I was also trained as a Crisis Intervention Officer and as a Level IV Accident reconstructionist, which entailed an understanding and application of physics' concepts.  
                      <br/>
                      With about eight years in my career, I interviewed and was selected for the North Colorado Recruiter Position.  For CSP, I implemented the first online connections with potential recruits, using sites like LinkedIn and Monster.  Shortly thereafter, I was asked to assist with CSP's implementation of CALEA accrediation for their training branch.  I worked with a team of fantastic individuals who became life-long friends.  As if training cadets, writing policies, meeting with stakeholders, and planning and implementing changes for CSP training wasn't enough, I decided to advance my knowledge and skills and take on an advanced degree in management.  Over two years I spent sleepless nights working on rearch and building projects, but finally earned a Master's Degree in Management through the Colorado State University System.  
                      <b/>
                      After successfully completing the accreditation and assisting with CSP's Tri-Arc Accreditation, which I believe was the second state agency in the country to receive such accolades, I was asked to take on the role of CSP's Registrar.  I this position, I oversaw the training requirements and records for all CSP members.  I implimented an online registration and hub for continuing education, with the help of several members, moved CSP from paper records to digital.  As a team my section digitized training records back to 1989.  This was a huge benefit to members, administration, and outside stakeholders, as our records were more complete, more accurate, and tremendous time was saved with producing requested records.  
                      <b/>
                      After a few years serving in that role, I decided to go back into the field.  For a short time I was a trooper again in the metro region, before I was selected as a Sergeant in the Colorado Springs area.  I led a team of highly motivated and wonderfully personable individuals.  We had many exciting and scary experiences, from foot chases, to armed individuals, to pursuits, shootings, standoffs, and just about everything a young police officer would hope to experience in a long career.  
                      <br/>
                      In 2021, I decided after long-consideration to start a new life outside of law enforcement.  I took with me years of experience with            


                    </p>
                </div>

                <div className="pic1to3Div">
                    <img id="fam1" src={fam1} alt="family photo" />
                    <img id="riot1" src={riot1} alt="riot cops" />
                    <img id="becAndDogs" src={becAndDogs} alt="man and women with dogs" />
                </div>
          </div>
          
          <div className="container2">
                <div className="allOtherPics">
                    <img id="recruiter" src={recruiter} alt="recruiter and man talking" />
                    <img id="schoolShooting" src={schoolShooting} alt="police officers" />
                    <img id="hiker" src={hiker} alt="hiker" width="50%" />
                    <img id="familyHiking" src={familyHiking} alt="family hiking" width="50%" />
                </div>
                
                {/* <Footer /> */}
          </div>
    </div>
  );
}

export default MeetDave;