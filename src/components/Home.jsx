import React from "react";
import GlobalNavbar from "../shared/Navbar";
import homeImg from "../assets/image/home-img.png";
import halal from "../assets/image/imghalal.png";

const Home = () => {
  return (
    <section className="home">
      <GlobalNavbar />
      <div className="container home__box d-flex align-items-center justify-content-center">
        <div className="home__content   col-lg-6">
          <div className="d-flex mb-4">
            <div className="main-box">
              <p className="number">10</p>
              <p className="text">DAYS</p>
            </div>
            <div className="main-box">
              <p className="number">24</p>
              <p className="text">HOUR</p>
            </div>
            <div className="main-box">
              <p className="number">60</p>
              <p className="text">MINU</p>
            </div>
            <div className="main-box">
              <p className="number">33</p>
              <p className="text">SECO</p>
            </div>
          </div>
          <div className="home__content__text">
            <h1>Algorithmic & Blockchain Solutions for Crypto Investments</h1>
          </div>
          <div className="home__content__buttons mt-5">
            <a href="#s" className="me-3 main-button">
              Buy Tokens
            </a>
            <a href="#s" className="secondary-button">
              sign up to join
            </a>
          </div>
        </div>
        <div className="home__img col-lg">
          <figure>
            <img className="homeImg" src={homeImg} alt="homeimg" />
            <img className="halal" src={halal} alt="halal" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Home;
