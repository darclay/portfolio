import linkedintype from "./photos/linkedintype.png";
import linkedinpic from "./photos/linkedinpic.png";
import githubtype from "./photos/githubtype.png";
import githubpic from "./photos/githubpic.png";
import mailpic from "./photos/mailpic.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="upper-section">
        <h1 className="quote">we are all better when we are in it together</h1>
      </div>
      <div className="lower-section">
        <h2 id="letsConnect">LET'S CONNECT</h2>

        <section className="connect-links">
          <a href="https://github.com/darclay" target="_blank">
            <div id="one">
              <p className="footerWords" id="github">
                GitHub
              </p>
              <img className="footericons" src={githubpic} alt="linkedin" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/david-gurule-865624212/"
            target="_blank"
          >
            <div id="two">
              <p className="footerWords" id="linkedin">
                Linked
              </p>
              <img className="footericons" src={linkedinpic} alt="linkedin" />
            </div>
          </a>

          <a href="mailto:davidgurulejr@gmail.com" target="_blank">
            <div id="three">
              <p className="footerWords" id="mail">
                Email
              </p>
              <img className="footericons" src={mailpic} alt="mail pic" />
            </div>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Footer;
