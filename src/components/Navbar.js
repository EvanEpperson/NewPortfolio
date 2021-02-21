import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {animateScroll as scroll } from 'react-scroll'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={toggleHome}>
            Evan Epperson
            <i className="fas fa-laptop-code" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://docs.google.com/document/d/1UqJWz-CXBLsbm4yZmbHU6DIrdUIYa9kvWI9tTfrOc54/edit"
                className="nav-links"
                onClick={closeMobileMenu}
                download
              >
              Resume
              </a>
            </li>
            <li>
              <a
                href="mailto:eppersonevan@gmail.com"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Me
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
