import "./Contact.css";
import { Link } from "react-router-dom";
import linkedinpic from "./photos/linkedinpic.png";
import githubpic from "./photos/githubpic.png";
import shield from "./photos/barclay_shield.png";
import NavBar from "../../components/navigation/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const handleChange = () => {
  console.log("info added");
};

const Contact = () => {
  return (
    <div className="contactDiv">
      <NavBar />

      <h3 className="contactDavidEmail">davidgurulejr@gmail.com</h3>
      {/* <section className="connect-links">
                <a href="https://github.com/darclay" target="_blank">
                <div id="one">
                <p id="github">GitHub</p>
                <img className="footericons" src={githubpic} alt="linkedin" />
                </div>
                </a>
                
                <a href="https://www.linkedin.com/in/david-gurule-865624212/" target="_blank">
                <div id="two">
                <p id="linkedin">Linked</p>
                <img className="footericons" src={linkedinpic} alt="linkedin" />
                </div>
                </a>

                <a href="mailto:davidgurulejr@gmail.com" target="_blank">
                <div id="three">
                <p id="mail">Email</p>
                <img className="footericons" src={mailpic} alt="mail pic" />
                </div>
                </a>
            </section> */}

      <hr className="separator3" />

      <div className="forms">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScU44xptFY097OX7BNt62SaQru-8DgzzbxQuNkDkt-c7bF04w/viewform?embedded=true"
          width="80%"
          height="1000px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>

        {/* <form className="reviewForm">
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
            </form> */}
      </div>
      <div className="bottomBackHome">
        <Link className="bottomLink" to="/">
          <p>Back to Home</p>
          <img id="shield" src={shield} alt="shield" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
