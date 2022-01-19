import "./Contact.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Contact = () => {
  return (
    <div className="contactDiv">
      <NavBar />
      <h3 className="contactDavidEmail">davidgurulejr@gmail.com</h3>
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
      </div>
      <div className="bottomBackHome"></div>
      <Footer />
    </div>
  );
};

export default Contact;
