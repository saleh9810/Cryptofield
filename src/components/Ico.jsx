import React, { useEffect } from "react";
import icoImg from "../assets/image/ico-img.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Ico = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="ico">
      <div
        data-aos="fade-up"
        className="container  ico__box d-flex align-items-center justify-content-center "
      >
        <div className="ico__img  col-lg-6">
          <figure>
            <img className="w-100" src={icoImg} alt="ico-img" />
          </figure>
        </div>
        <div className="ico__content__text col-lg-6">
          <p className="ico__content__text__what">WHAT IS ICO CRYPTO</p>
          <h3 className="ico__content__text__title">
            We’ve built a Platform to buy and sell shares.
          </h3>
          <p className="ico__content__text__future">
            ICO Crypto is a platform for the future of funding that powering dat
            for the new equity blockchain.
          </p>
          <p className="ico__content__text__while">
            While existing solutions offer to solve just one problem at a time
            our team is up to build a secure, useful, & easy-to-use product
            based on integration, and even a digital arbitration system.
          </p>
          <p className="ico__content__text__while">
            While existing solutions offer to solve just one problem at a time
            our private blockchain. It will include easy cryptocurrency payments
            integration, and even a digital arbitration system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ico;
