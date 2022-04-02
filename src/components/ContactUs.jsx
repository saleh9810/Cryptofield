import React from "react";
import loction from "../assets/image/loction.png";
import phone from "../assets/image/phone.png";
import email from "../assets/image/email.png";
import global from "../assets/image/global.png";

const ContactUs = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <header className="contact__header text-center">
          <p>Contact Us</p>
          <h3>Get in Touch</h3>
        </header>
        <div className="contact__content d-flex">
          <div className="contact__content__Information col-lg-5">
            <h4 className="mb-5">Contact Information</h4>
            <div className="ontact__content__Information__box icons__box d-flex">
              <figure color="col-lg-6">
                <img src={loction} alt="loction" />
              </figure>
              <div className="col-lg-6">
                <h6>Office address </h6>
                <p>
                  Suite 1307, Level 12, Tropical Center 218 New Elephant Road,
                  Dhaka - 1205
                </p>
              </div>
            </div>
            <div className="ontact__content__Information__box icons__box d-flex">
              <figure color="col-lg-6">
                <img src={phone} alt="loction" />
              </figure>
              <div className="col-lg-6">
                <h6>Phone number </h6>
                <p>+8801678170593, 01919-264687 02-9611936</p>
              </div>
            </div>
            <div className="ontact__content__Information__box icons__box d-flex">
              <figure color="col-lg-6">
                <img src={email} alt="loction" />
              </figure>
              <div className="col-lg-6">
                <h6>Email address </h6>
                <p>support@blackfriday.com support@blackfriday.com</p>
              </div>
            </div>
            <div className="ontact__content__Information__box icons__box d-flex">
              <figure color="col-lg-6">
                <img src={global} alt="loction" />
              </figure>
              <div className="col-lg-6">
                <h6>Website address</h6>
                <p>admincryptocurrency.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="contact__content__send col-lg-5">
            <h4>Send us a Message</h4>
            <form className="contact__content__send__inputs ">
              <div className="contact__content__send__inputs__box ">
                <input
                  className="me-5 input "
                  type="text"
                  placeholder="Your Name"
                />
                <input type="text" className="input" placeholder="Your Email" />
              </div>
              <input
                className="mt-4 input w-100"
                type="text"
                placeholder="Subject"
              />
              <div className="mt-4">
                <textarea placeholder="Your Message" rows="6" cols="56" />
              </div>
              <button className="main-button mt-4">Submit Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
