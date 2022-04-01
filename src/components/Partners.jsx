import React, { useEffect } from "react";
import partnersImg1 from "../assets/image/partners-img1.png";
import partnersImg2 from "../assets/image/partners-img2.png";
import partnersImg3 from "../assets/image/partners-img3.png";
import partnersImg4 from "../assets/image/partners-img4.png";
import partnersImg5 from "../assets/image/partners-img5.png";
import partnersImg6 from "../assets/image/partners-img6.png";
import partnersImg7 from "../assets/image/partners-img7.png";
import partnersImg8 from "../assets/image/partners-img8.png";
import partnersImg9 from "../assets/image/partners-img9.png";
import partnersImg10 from "../assets/image/partners-img10.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Partners = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="partners text-center">
      <div data-aos="fade" className="container">
        <header className="partners__header text-center">
          <p>Partners</p>
          <h3>ico Crypto Partners</h3>
        </header>
        <div className="partners__icons">
          <img src={partnersImg1} alt="partnersImg1" />
          <img src={partnersImg2} alt="partnersImg2" />
          <img src={partnersImg3} alt="partnersImg3" />
          <img src={partnersImg4} alt="partnersImg4" />
          <img src={partnersImg5} alt="partnersImg5" />
          <img src={partnersImg6} alt="partnersImg6" />
          <img src={partnersImg7} alt="partnersImg7" />
          <img src={partnersImg8} alt="partnersImg8" />
          <img src={partnersImg9} alt="partnersImg9" />
          <img src={partnersImg10} alt="partnersImg10" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
