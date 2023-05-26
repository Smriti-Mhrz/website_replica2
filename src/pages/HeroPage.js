import React from "react";
import heroImage from "../assets/images/heroimage.jpg";
import atm from '../assets/images/atm.ico';
import { Card } from "../components";

export const HeroPage = () => {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src={heroImage} alt="heroimage" />
      </div>
      <div className="hero__card">
        <div className="card-wrapper1">
        <Card image={atm} title="Faster pick-up" text="We have your contract already prepared"/>
        </div>
        <div className="card-wrapper2">
        <Card image={atm} title="Faster pick-up" text="We have your contract already prepared"/>
        </div>
        <div className="card-wrapper3">
        <Card image={atm} title="Faster pick-up" text="We have your contract already prepared"/>
        </div>
      </div>
    </div>
  );
};
