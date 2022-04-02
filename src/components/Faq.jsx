import React from "react";
import faqImg from "../assets/image/faq.png";

const Faq = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq__content d-flex">
          <div className="faq__content__text col-lg-5">
            <header className="faq__content__text__header">
              <p>Faqs</p>
              <h3>Frequently Questions</h3>
            </header>
            <div className="faq__content__text__nav d-flex">
              <p className="faq__content__text__nav__paragraph">Ganeral</p>
              <p className="faq__content__text__nav__paragraph">Token</p>
              <p className="faq__content__text__nav__paragraph">Register</p>
              <p className="faq__content__text__nav__paragraph">Collection</p>
              <p className="faq__content__text__nav__paragraph">Exclusive</p>
            </div>
            <div className="faq__content__text__box">
              <h4>What is ICO Crypto? </h4>
              <p className="">
                Don’t get shirty with me owt to do with me arse down the have it
                car boot happy days no biggie bevriy only aquid goods in my flat
                the little rotter cheeky.!
              </p>
            </div>

            <div className="faq__content__text__box">
              <h4> What cryptocurrencies can I use to purchase? </h4>
              <p className="d-none">
                Don’t get shirty with me owt to do with me arse down the have it
                car boot happy days no biggie bevriy only aquid goods in my flat
                the little rotter cheeky.!
              </p>
            </div>

            <div className="faq__content__text__box">
              <h4>How can I participate in the ICO Token sale? </h4>
              <p className="d-none">
                Don’t get shirty with me owt to do with me arse down the have it
                car boot happy days no biggie bevriy only aquid goods in my flat
                the little rotter cheeky.!
              </p>
            </div>
            <div className="faq__content__text__box">
              <h4>How do I benefit from the ICO Token? </h4>
              <p className="d-none">
                Don’t get shirty with me owt to do with me arse down the have it
                car boot happy days no biggie bevriy only aquid goods in my flat
                the little rotter cheeky.!
              </p>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="faq__content__img">
            <figure>
              <img src={faqImg} alt="faq-img col-lg-5" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
