import shield from "./photos/barclay_shield.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks.jsx";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <NavLinks />
      <div className="shieldName">
        <h1 id="david-title">
          DAVID BARCLAY GURULE
          <br />
          <p id="subtitle">Full Stack Software Developer</p>
        </h1>
      </div>
    </nav>
  );
};

export default Navigation;
