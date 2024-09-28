import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import logo from "./../assets/navlogo.png";
import "./Styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [theme, setTheme] = useState("light-theme");


  useEffect(() => {

    document.body.className = theme;
  }, [theme]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
  };



  return (
    <>

      <div className={`navbar ${theme}`}>
        <nav className="nav">
          <div className="container">

            <div className="navigation">
              <div className="left">
                <img src={logo} alt="Logo" />
                <div className="text gdsctext">GDG RCOEM</div>
              </div>


              <div className="links">
                <div className="linktext">Home</div>
                <div className="linktext">Events</div>
                <div className="linktext">Team</div>
                <div className="linktext">Alumni</div>
                <div className="linktext">Contact</div>


                <div className="button" onClick={toggleTheme}>
                  <FontAwesomeIcon
                    icon={theme === "dark-theme" ? faToggleOn : faToggleOff}
                    size="2x"
                  />
                </div>
              </div>
            </div>



            <div className="mobile-toggle">
              <button onClick={handleMobileMenuToggle}>
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>


      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>

          <li className="linktext">Home</li>
          <li className="linktext">Events</li>
          <li className="linktext">Team</li>
          <li className="linktext">Alumni</li>
          <li className="linktext">Contact</li>
        </ul>


      </div>

    </>
  );
};

export default Navbar;
