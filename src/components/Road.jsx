import React from "react";
import roadImg from "../assets/image/Group2.png";
import icon1 from "../assets/image/roadIcon1.png";
import icon2 from "../assets/image/roadIcon2.png";
import icon3 from "../assets/image/roadIcon3.png";
import icon4 from "../assets/image/roadIcon4.png";

const Road = () => {
  return (
    <section className="road">
      <header className="road__header text-center">
        <p>Road map</p>
        <h3>Our Road Map</h3>
      </header>
      <div className="road__content">
        <figure className="road__content__img text-center">
          <img src={roadImg} alt="road-img"></img>
        </figure>

        <div className="road__content__text">
          <div className="icons__box road__content__text__box1 d-flex ">
            <figure color="col-lg-6">
              <img src={icon1} alt="icon1" />
            </figure>
            <div className="col-lg-6">
              <h6>White Paper </h6>
              <p>
                While existing solutions offer to solve just one problem team is
                up to build a secure, use use product based integration, and
                even a digital.
              </p>
            </div>
          </div>
          <div className="icons__box road__content__text__box2 d-flex ">
            <figure color="col-lg-6">
              <img src={icon2} alt="icon1" />
            </figure>
            <div className="col-lg-6">
              <h6>Launch </h6>
              <p>
                While existing solutions offer to solve just one problem team is
                up to build a secure, use use product based integration, and
                even a digital.
              </p>
            </div>
          </div>
          <div className="icons__box road__content__text__box3 d-flex ">
            <figure color="col-lg-6">
              <img src={icon3} alt="icon1" />
            </figure>
            <div className="col-lg-6">
              <h6>Money </h6>
              <p>
                While existing solutions offer to solve just one problem team is
                up to build a secure, use use product based integration, and
                even a digital.
              </p>
            </div>
          </div>
          <div className="icons__box road__content__text__box4 d-flex ">
            <figure color="col-lg-6">
              <img src={icon4} alt="icon1" />
            </figure>
            <div className="col-lg-6">
              <h6>Reward </h6>
              <p>
                While existing solutions offer to solve just one problem team is
                up to build a secure, use use product based integration, and
                even a digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Road;
