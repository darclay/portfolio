import shield from './photos/barclay_shield.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation-div">
    <nav>
      <Link to="/meet-dave">
      <h2>MEET DAVE</h2>
      </Link>
      <Link to="/resume">
      <h2>RESUME</h2>
      </Link>
      <Link to="/projects">
      <h2>PROJECTS</h2>
      </Link>
      <Link to="/contact-me">
      <h2>LET'S CONNECT</h2>
      </Link>
    </nav>
    <div>
    <Link to="/">
    <img src={shield} alt="shield" />
    </Link>
    <h1 id="david-title">DAVID BARCLAY GURULE</h1>
    </div>
    </div>
  );
}

export default Navigation;