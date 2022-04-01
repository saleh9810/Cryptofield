import React from "react";
import team1 from "../assets/image/team1.png";
import team2 from "../assets/image/team2.png";
import team3 from "../assets/image/team3.png";
import team4 from "../assets/image/team4.png";

import twiter from "../assets/image/Twiter.png";
import vimeo from "../assets/image/vimeo.png";
import instagram from "../assets/image/instagram.png";
import behance from "../assets/image/Behance.png";
import linkedin from "../assets/image/linkedin.png";

const Leadership = () => {
  return (
    <section className="leadership">
      <header className="leadership__header text-center">
        <p>Our Team</p>
        <h3>The Leadership Team</h3>
      </header>
      <div className="container">
        <div className="leadership__content d-flex">
          <div className="leadership__content__box text-center">
            <figure>
              <img src={team1} alt="team-img" />
              <figcaption>
                <h5>Vanessa Kirby</h5>
                <p> Lead Blockchain</p>
              </figcaption>
            </figure>
            <p>Continually Onceptal Techncally Professionally monezeturk</p>
            <div className="leadership__content__box__icons">
              <img src={twiter} alt="twiter" />
              <img src={behance} alt="behance" />
              <img src={instagram} alt="instagram" />
              <img src={vimeo} alt="vimeo" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="leadership__content__box text-center">
            <figure>
              <img src={team2} alt="team-img" />
              <h5>Vanessa Kirby</h5>
              <p> Lead Blockchain</p>
            </figure>
            <p>Continually Onceptal Techncally Professionally monezeturk</p>
            <div className="leadership__content__box__icons">
              <img src={twiter} alt="twiter" />
              <img src={behance} alt="behance" />
              <img src={instagram} alt="instagram" />
              <img src={vimeo} alt="vimeo" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="leadership__content__box text-center">
            <figure>
              <img src={team3} alt="team-img" />
              <figcaption>
                <h5>Vanessa Kirby</h5>
                <p> Lead Blockchain</p>
              </figcaption>
            </figure>
            <p>Continually Onceptal Techncally Professionally monezeturk</p>
            <div className="leadership__content__box__icons">
              <img src={twiter} alt="twiter" />
              <img src={behance} alt="behance" />
              <img src={instagram} alt="instagram" />
              <img src={vimeo} alt="vimeo" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="leadership__content__box text-center">
            <figure>
              <img src={team4} alt="team-img" />
              <figcaption>
                <h5>Vanessa Kirby</h5>
                <p> Lead Blockchain</p>
              </figcaption>
            </figure>
            <p>Continually Onceptal Techncally Professionally monezeturk</p>
            <div className="leadership__content__box__icons">
              <img src={twiter} alt="twiter" />
              <img src={behance} alt="behance" />
              <img src={instagram} alt="instagram" />
              <img src={vimeo} alt="vimeo" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
