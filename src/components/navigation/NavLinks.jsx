import { Link } from 'react-router-dom';

const NavLinks = () => {
  return ( 
      <ul className="nav-links">
          <li><Link to="/meet-dave">MEET DAVE</Link></li>
          <li><Link to="/resume">RESUME</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/contact-me">LET'S CONNECT</Link></li>
      </ul>
   );

}
 
export default NavLinks;