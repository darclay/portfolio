import linkedintype from './photos/linkedintype.png';
import linkedinpic from './photos/linkedinpic.png';
import githubtype from './photos/githubtype.png';
import githubpic from './photos/githubpic.png';
import mailpic from './photos/mailpic.png';
import './Footer.css';

const Footer = () => {
  return (
      <div className="footerDiv">
        <div className="upper-section">
            <h1 className="quote">we are all better when we are in it together</h1>
        </div>
        <div className="lower-section">
            <h2 id="letsConnect">LET'S CONNECT</h2>
            
            <section className="connect-links">
                <div id="one">
                <p id="github">GitHub</p>
                <img className="footericons" src={githubpic} alt="linkedin" />
                </div>
                
                <div id="two">
                <p id="linkedin">Linked</p>
                <img className="footericons" src={linkedinpic} alt="linkedin" />
                </div>

                <div id="three">
                <p id="mail">Email</p>
                <img className="footericons" src={mailpic} alt="mail pic" />
                </div>
            </section>
        </div>
      </div>
  );
}

export default Footer;