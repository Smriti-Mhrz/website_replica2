import React from "react";
import data from "../database/cardb.json";
import seatimg from "../assets/images/seat.png";
import suitcase from "../assets/images/suitcase.png";
import { Button } from "../components";

export const CarSection = () => {
  return (
    <div className="section__wrapper">
      <div className="wrapper-head">
        <h2>Best car & van rentals from top suppliers</h2>
        <p>
          Our suppliers provide both automatic and manual transmission vehicles
          in the US, however, availability may vary depending on the supplier
          and the location where you are renting the vehicle.
        </p>
      </div>
      <div className="wrapper-body">
        {data.cars.map((item) => {
          return (
            <>
              <div className="body-image">
                <img src={item.img} />
              </div>
              <h4>{item.name}</h4>
              <div className="body-icons">
                <div>
                  <img src={seatimg} alt="seatko image" />
                  <span>Seats: {item.seat}</span>
                </div>
                <div>
                  <img src={suitcase} alt="suitcaseko image" />
                  <span>Suitcase: {item.suitcase}</span>
                </div>
              </div>
              <div className="body-text">
                <p>{item.desc}</p>
              </div>
              <a href="https://nicepage.com/website-design">
                <Button name="Book Now" />
              </a>
            </>
          );
        })}
      </div>

      {/* link */}
      <p>
        Images from <a href="https://www.freepik.com/">Freepik</a>
      </p>
      <div className="wrapper-ad">
        <h2>Best valued deals from top car rental companies in USA</h2>
        <p>In the USA, we have tie-ups with Sixt, Alamo, Europcar, Fox, Dollar, National, Hertz Rent-A-Car, Advantage & many others.</p>
        <Button name="Learn More"/>
      </div>
    </div>
  );
};
