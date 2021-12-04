import './Contact.css';
import { Link } from 'react-router-dom';
import linkedintype from './photos/linkedintype.png';
import linkedinpic from './photos/linkedinpic.png';
import githubtype from './photos/githubtype.png';
import githubpic from './photos/githubpic.png';
import shield from './photos/barclay_shield.png';
import Navigation from '../../components/navigation/Navigation.jsx'

const handleChange = () => {
  console.log('info added');
}

const Contact = () => {
  return (
    <div className="ContactDiv">
    <Navigation />
      <h3>davidgurulejr@gmail.com</h3>
      
      <img src={githubtype} alt="linkedin" />
      <img src={githubpic} alt="linkedin" />
        <br/>     
      <img src={linkedintype} alt="linkedin" />
      <img src={linkedinpic} alt="linkedin" />
      <div className="coloredSeparator">torquoise color</div>
      <div className="forms">
      <form className="contact-me-form">
      <h3>CONTACT ME!</h3>
      <h5>Let's Connect</h5>
      <input
      id='input-name'
      placeholder='Your Name'
      // value={}
      required
      onChange={handleChange}
      />
      <input
      id='input-subject'
      placeholder='Subject'
      // value={}
      required
      onChange={handleChange}
      />
      <input
      id='input-content'
      placeholder='Content'
      // value={}
      required
      onChange={handleChange}
      />
      <button type='submit' className='contact-me-submit'>send</button>
      </form>

      <form className="review-form">
      <h3>KNOW DAVE?</h3>
      <h5>Please, add a review or encouraging words.</h5>
      <input
      id='input-name'
      placeholder='Your Name'
      // value={}
      required
      onChange={handleChange}
      />
      <input
      id='input-subject'
      placeholder='Subject'
      // value={}
      required
      onChange={handleChange}
      />
      <input
      id='input-content'
      placeholder='Content'
      // value={}
      required
      onChange={handleChange}
      />
      <button type='submit' className='contact-me-submit'>send</button>
      </form>
      </div>
      <h2>Home</h2>
      <Link to="/">
      <img src={shield} alt="shield"/>
      </Link>
    </div>
  );
}

export default Contact;