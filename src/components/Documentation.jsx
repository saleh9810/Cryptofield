import React from "react";
import pdf from "../assets/image/pdf.png";

const Documentation = () => {
  return (
    <section className="documentation ">
      <header className="documentation__header text-center">
        <p>Documents</p>
        <h3>Project Documentation</h3>
      </header>
      <div className="documentation__content container d-flex   justify-content-center">
        <figure>
          <img src={pdf} alt="pdf" />
          <figcaption>Terms & Conditions</figcaption>
        </figure>
        <figure>
          <img src={pdf} alt="pdf" />
          <figcaption>White Pappers</figcaption>
        </figure>
        <figure>
          <img src={pdf} alt="pdf" />
          <figcaption>Privacy Policy</figcaption>
        </figure>
        <figure>
          <img src={pdf} alt="pdf" />
          <figcaption>Business Profile</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Documentation;
