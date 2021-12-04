import shield from './photos/barclay_shield.png';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
      <div className="navigation-div">
        <nav>
          <Link to="/meet-dave">
          <p className="nav-link">MEET DAVE</p>
          </Link>
          <Link to="/resume">
          <p className="nav-link">RESUME</p>
          </Link>
          <Link to="/projects">
          <p className="nav-link">PROJECTS</p>
          </Link>
          <Link to="/contact-me">
          <p className="nav-link">LET'S CONNECT</p>
          </Link>
        </nav>

        <div className="shield-name">
          <Link to="/"><img id="shield" src={shield} alt="shield" /></Link>
          <h1 id="david-title">DAVID BARCLAY GURULE<br/>
          <p id="subtitle">Full Stack Software Developer</p>
          </h1>
        </div>
      </div>
  );
}

export default Navigation;