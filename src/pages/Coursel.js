import React from "react";
import person from "../assets/images/kti.jpg";
import img1 from "../assets/images/coimg1.jpg";
import img2 from "../assets/images/coimg2.jpg";
import img3 from "../assets/images/coimg3.jpg";
import img4 from "../assets/images/coimg4.jpg";
import img5 from "../assets/images/coimg5.jpg";
import img6 from "../assets/images/coimg6.jpg";
import { Button } from "../components";

export const Coursel = () => {
  return (
    <div className="coursel__wrapper">
      <div className="wrapper-box"></div>
      <div className="coursel-image">
        <img src={person} alt="girls" />
      </div>
      <div className="coursel-section">
        <h2>Rent the perfect car</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip consequat.
        </p>
        <span>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
        </span>
        <Button name="start now" />
      </div>
      <p>
        Image from <a href="https://www.freepik.com/">Freepik</a>
      </p>
      <div className="coursel__wrapper2">
        <div className="wrapper2-image">
          <div className="image">
            <img src={img1} />
          </div>
          <div className="image">
            <img src={img2} />
          </div>
          <div className="image">
            <img src={img3} />
          </div>
          <div className="image">
            <img src={img4} />
          </div>
          <div className="image">
            <img src={img5} />
          </div>
          <div className="image">
            <img src={img6} />
          </div>
        </div>
        <div className="wrapper2-information">
          <h2>Car Rental Traveler Information</h2>
          <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="link">
        Image from <a href="https://www.freepik.com/">Freepik</a>
      </p>
      <Button name="Learn More"/>
        </div>
      </div>
    </div>
  );
};
