import React from "react";
import logo from "../assets/image/logo.png";
import instagramFooter from "../assets/image/instagram-footer.png";
import iconFooter from "../assets/image/iconFooter.png";
import icon3Footer from "../assets/image/icon3Footer.png";
import icon4Footer from "../assets/image/icon4Footer.png";

const Footer = () => {
  return (
    <footer>
      <h4>
        <img src={logo} alt="logo" /> Cryptofield
      </h4>

      <div className="icons">
        <img src={instagramFooter} alt="instagramFooter" />
        <img src={iconFooter} alt="iconFooter" />
        <img src={icon3Footer} alt="icon3Footer" />
        <img src={icon4Footer} alt="icon3Footer" />
      </div>

      <p>All Right Reserved. Designed and Developed by LabArtisan</p>
    </footer>
  );
};

export default Footer;
