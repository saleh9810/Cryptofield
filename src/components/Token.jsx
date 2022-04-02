import React from "react";
import { ProgressBar } from "react-bootstrap";
import visa from "../assets/image/visa.png";
import masterCard from "../assets/image/masterCard.png";
import payoneer from "../assets/image/payoneer.png";
import payPal from "../assets/image/payPal.png";
import tokenImg from "../assets/image/token-img.png";

const Token = () => {
  return (
    <section id="token" className="token">
      <header className="token__header text-center">
        <p>Token</p>
        <h3>Token Sale</h3>
      </header>
      <div className="container token__box d-flex  align-items-start ">
        <div className="token__content__text col-lg-6 col-md-12">
          <div className="token__content__text__boxs d-flex">
            <div className="token__content__text__boxs__box">
              <h4>Starting Time</h4>
              <p>April 23,2022 (Monday 9:00am)</p>
            </div>
            <div className="token__content__text__boxs__box">
              <h4>Ending Time</h4>
              <p>April 23,2022 (Monday 9:00am)</p>
            </div>
          </div>
          <div className="token__content__text__boxs d-flex">
            <div className="token__content__text__boxs__box">
              <h4> Marcket Caps</h4>
              <p>$118.23 (Billion)</p>
            </div>
            <div className="token__content__text__boxs__box">
              <h4>Low -High 24 H:</h4>
              <p>$6,455.83- $7,071.42</p>
            </div>
          </div>
          <div className="token__content__text__boxs d-flex">
            <div className="token__content__text__boxs__box">
              <h4>Available Token</h4>
              <p>$120.23 (Billion)</p>
            </div>
            <div className="token__content__text__boxs__box">
              <h4>Acceptable Currency</h4>
              <p>Btc, Eth, Ltc</p>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>

        <div className="token__img  col-lg-5 col-md-12">
          <figure className="token__img__cover">
            <img src={tokenImg} alt="cover" />
          </figure>
          <div className="d-flex token__img__boxs mb-4">
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
          <div className="token__img__progress">
            <div className="token__img__progress__text d-flex justify-content-between">
              <p>Pre- sale</p>
              <p>Soft cap</p>
              <p>Bonus</p>
            </div>
            <div className="token__img__progress__percentage">
              <ProgressBar now={80} />
            </div>
            <div className="token__img__button text-center">
              <a href="#s" className="main-button">
                Purchase Token Now{" "}
              </a>
            </div>
            <div className="token__img__visa">
              <img src={visa} alt="visa" />
              <img src={payoneer} alt="payoneer" />
              <img src={payPal} alt="payPal" />
              <img src={masterCard} alt="masterCard" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
