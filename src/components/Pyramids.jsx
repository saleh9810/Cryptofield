import React from "react";
import pyramid1 from "../assets/image/fullPy1.svg";
import pyramid2 from "../assets/image/fullPy1.svg";

const Pyramids = () => {
  return (
    <section className="pyramids">
      <div className="container">
        <div className="pyramids__content d-flex text-center">
          <div className="pyramids__content__box1">
            <h3 className="">Initial Token Distribution</h3>
            <div className="pyramids__content__box1__pyramid d-flex align-items-start">
              <figure className="">
                <img className="" src={pyramid1} alt="pyramid1" />
              </figure>
            </div>
          </div>
          <div className="pyramids__content__box2">
            <h3 className="">Sale Proceed Allocation</h3>

            <div className="pyramids__content__box2__pyramid d-flex align-items-start">
              <figure className="pyramids__content__box2__pyramid__img-box">
                <img className="" src={pyramid2} alt="pyramid1" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pyramids;
