import shield from './photos/barclay_shield.png';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="navigation-div">
    <nav>
      <Link to="/meet-dave">
      <h2 className="nav-link">MEET DAVE</h2>
      </Link>
      <Link to="/resume">
      <h2 className="nav-link">RESUME</h2>
      </Link>
      <Link to="/projects">
      <h2 className="nav-link">PROJECTS</h2>
      </Link>
      <Link to="/contact-me">
      <h2 className="nav-link">LET'S CONNECT</h2>
      </Link>
    </nav>
    <div className="shield-name">
    <Link to="/">
    <img id="shield" src={shield} alt="shield" />
    </Link>
    <h1 id="david-title">
      DAVID BARCLAY GURULE
      <br/>
      <span><p id="subtitle">Full Stack Software Developer</p></span>
    </h1>
    </div>
    </div>
  );
}

export default Navigation;