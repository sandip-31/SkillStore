import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assest/logo1.png";
import { Link } from "react-router-dom";

function Header() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
