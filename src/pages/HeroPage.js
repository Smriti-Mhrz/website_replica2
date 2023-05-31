import React from "react";
import heroImage from "../assets/images/heroimage.jpg";
import atm from "../assets/images/atm.ico";
import freetag from "../assets/images/freetag.png"
import dollar from "../assets/images/dollarsign.png"
import headphone from "../assets/images/headphone.png"
import { Card, Service ,Button} from "../components";

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
          image={freetag} text="Free Cancellation"/>
          <Service
          image={dollar} text="No Hidden Charges"/>
          <Service
          image={headphone} text="24/7 Customer Support"/>
      </div>

      <div className="hero__advertise">
        <h2>Book a car rental near you by giving us a call!</h2>
        <Button type="button" name="+12-345-678-89089"/>
      </div>
    </div>
  );
};
