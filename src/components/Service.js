import React from "react";
import { Animator } from "react-scroll-motion";

export const Service = ({ image, text }) => {
  return (
    <div className="service">
      {/* <ScrollConhtainer>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}/> */}
      <div className="service-image">
        <img src={image} />
      </div>
      <span>{text}</span>
      {/* </ScrollConhtainer> */}
    </div>
  );
};

