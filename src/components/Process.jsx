import React, { useEffect } from "react";
import processImg from "../assets/image/process-img.png";
import icon1 from "../assets/image/process-icon1.png";
import icon2 from "../assets/image/process-icon2.png";
import icon3 from "../assets/image/process-icon3.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="process">
      <div
        data-aos="fade-down"
        className="container process__box d-flex align-items-center justify-content-center "
      >
        <div className="process__content__text col-lg-5">
          <p className="process__content__text__process">Work process</p>
          <h3 className="process__content__text__title">
            Crypto Working Process
          </h3>
          <p className="process__content__text__paragraph">
            Don’t get shirty with me owt to do with me arse down the pub have it
            car boot happy days no biggie bevriy only aquid Im goods in my flat
            the little rotter cheeky.!
          </p>
          <div className="process__content__text__icons">
            <div className="process__content__text__icons__box  d-flex">
              <figure color="col-lg-6 ">
                <img src={icon1} alt="icon1" />
              </figure>
              <div className="col-lg-6">
                <h6>ico Platform </h6>
                <p>
                  For business which a product online product listings in the
                </p>
              </div>
            </div>
            <div className="process__content__text__icons__box  icons__box  d-flex">
              <figure color="col-lg-6">
                <img src={icon2} alt="icon1" />
              </figure>
              <div className="col-lg-6">
                <h6>Investors </h6>
                <p>
                  For business which a product online product listings in the
                </p>
              </div>
            </div>
            <div className="process__content__text__icons__box d-flex">
              <figure color="col-lg-6">
                <img src={icon3} alt="icon1" />
              </figure>
              <div className="col-lg-6">
                <h6>Investments </h6>
                <p>
                  For business which a product online product listings in the
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="process__img  col-lg-6">
          <figure>
            <img className="w-100" src={processImg} alt="ico-img" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Process;
