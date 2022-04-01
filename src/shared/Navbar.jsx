import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import list from "../assets/image/list.png";

const GlobalNavbar = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (window.screen.width < 1200) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 1100px)").matches) {
      setActive(false);
    } else {
      setActive(true);
    }
  });

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-header__container  d-flex">
        <div className="navbar-header__title">
          <h3>
            <img alt="logo" src={logo}></img> Cryptofield
          </h3>
        </div>
        <div className="navbar-header__list">
          <ul className={isActive ? "d-none" : null}>
            <li>What Is Ico</li>
            <li>Token Sale</li>
            <li>Road Map</li>
            <li>Apps</li>
            <li>Team</li>
            <li>Faqs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={`" ${isActive ? "d-none" : "navbar-header__buttons"}`}>
          <a href="#s" className="me-3 sign-up">
            Sign up
          </a>
          <a href="#s" className="login">
            Login
          </a>
        </div>

        <img
          src={list}
          alt="list-icon"
          className="list"
          onClick={toggleClass}
        />
        <p onClick={toggleClass} className={`${isActive ? "d-none" : "close"}`}>
          X
        </p>
      </div>
    </header>
  );
};

export default GlobalNavbar;
