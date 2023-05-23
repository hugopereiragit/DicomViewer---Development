import React from "react";
import { Link, useLocation   } from "react-router-dom";

const HelpPage: React.FC = () => {

  return (
    <div className="HelpPage">
      <div className="navBar">
      <Link to="/" className={location.pathname === "/" ? "activeNavButton navButton" : "navButton"}>
          Home
        </Link>
        <Link to="/LoadingImages" className={location.pathname === "/LoadingImages" ? "activeNavButton navButton" : "navButton"}>
          Load Dicom Images
        </Link>
        <Link to="/viewpage" className={location.pathname === "/viewpage" ? "activeNavButton navButton" : "navButton"}>
          Viewmodes
        </Link>
        <Link to="/Help" className={location.pathname === "/Help" ? "activeNavButton navButton" : "navButton"}>
          Help
        </Link>
        <Link to="/Contacts" className={location.pathname === "/Contacts" ? "activeNavButton navButton" : "navButton"}>
          Contact Info
        </Link>
      </div>
    </div>
  );
};

export default HelpPage;
