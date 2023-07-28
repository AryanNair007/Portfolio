import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav>
      <p>Aryan Nair</p>
      <div className="buttons">
        <Link to="projectsSection" smooth={true} duration={1000}>
          <button>PROJECTS</button>
        </Link>
        <Link to="aboutMeSection" smooth={true} duration={1000}>
          <button>ABOUT ME</button>
        </Link>
        <Link to="contactSection" smooth={true} duration={1000}>
          <button>CONTACTS</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
