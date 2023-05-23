import React from "react";
import { Link, useLocation  } from "react-router-dom";
import "./stylingmain.css";

const HomePage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="HomePage">
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
      <div className="mainContent">
        <h1>Medical Images Processing and Visualization</h1>
      </div>
    </div>
  );
};

export default HomePage;
