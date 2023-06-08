import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Service = ({ image, text }) => {
  useEffect(() => {
    Aos.init({duration: 1500});
  });
  return (
    <div className="service">
      <div className="service-image" data-aos="fade-right">
        <img src={image} />
      </div>
      <span data-aos="fade-right">{text}</span>
    </div>
  );
};
