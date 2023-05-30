import React from "react";
import heroImage from "../assets/images/heroimage.jpg";
import atm from "../assets/images/atm.ico";
import freetag from "../assets/images/freetag.png"
import { Card, Service } from "../components";

export const HeroPage = () => {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src={heroImage} alt="heroimage" />
      </div>
      <div className="hero__card">
        <div className="card-wrapper1">
          <Card
            image={atm}
            title="Faster pick-up"
            text="We have your contract already prepared"
          />
        </div>
        <div className="card-wrapper2">
          <Card
            image={atm}
            title="Rental Journey"
            text="Over 70 years of experience"
          />
        </div>
        <div className="card-wrapper3">
          <Card
            image={atm}
            title="Better service"
            text="We know you better, we serve you better"
          />
        </div>
      </div>
      <div className="hero__image-link">
        <p>
          Image from <a href="https://billionphotos.com/">Billionphotos</a>
        </p>
      </div>
      <div className="hero__service">
        <Service
          image={freetag} text="Cancellation"/>
      </div>
    </div>
  );
};
