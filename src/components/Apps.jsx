import React from "react";
import apple from "../assets/image/apple.png";
import androeed from "../assets/image/androeed.png";
import windows from "../assets/image/windows.png";
import mockup from "../assets/image/Mockup.png";
import listStyle from "../assets/image/circle.png";

const Apps = () => {
  return (
    <section id="apps" className="apps">
      <div className="container">
        <div className="apps__content d-flex">
          <div className="apps__content__text col-lg-5">
            <p className="apps__content__text__our">
              Our Desktop And Mobile App
            </p>
            <h3 className="apps__content__text__title">
              Trade any where any Time
            </h3>
            <p className="apps__content__text__paragraph">
              While existing solutions offer to solve just one problem at a time
              our <br /> integration, and even a digital arbitration system.
            </p>
            <ul className="apps__content__text__list">
              <li className="apps__content__text__list__item">
                <img src={listStyle} alt="circle" className="circle" />{" "}
                Crypto-news curation
              </li>
              <li className="apps__content__text__list__item">
                <img src={listStyle} alt="circle" className="circle" />
                Natural Language Understanding
              </li>
              <li className="apps__content__text__list__item">
                <img src={listStyle} alt="circle" className="circle" /> Wallet
                aggregation
              </li>
              <li className="apps__content__text__list__item">
                <img src={listStyle} alt="circle" className="circle" />{" "}
                Professional Network
              </li>
              <li className="apps__content__text__list__item">
                <img src={listStyle} alt="circle" className="circle" /> No more
                expensive fees
              </li>
            </ul>
            <div className="apps__content__text__buttons d-flex align-items-center">
              <a className="main-button" href="#1">
                Download App
              </a>
              <div className="apps__content__text__buttons__icons">
                <img src={apple} alt="apple-logo" />
                <img src={androeed} alt="androeed-logo" />
                <img src={windows} alt="windows-logo" />
              </div>
            </div>
          </div>

          <div className="apps__content__img col-lg-6">
            <figure>
              <img src={mockup} alt="mobile&lab-img" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
