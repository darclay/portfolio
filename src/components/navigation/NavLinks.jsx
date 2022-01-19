import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/meet-dave">ABOUT</Link>
      </li>
      <li>
        <Link to="/resume">RESUME</Link>
      </li>
      <li>
        <Link to="/projects">PROJECTS</Link>
      </li>
      <li>
        <Link to="/contact-me">CONTACT</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
