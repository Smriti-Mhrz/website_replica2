import React from "react";
import person from "../assets/images/kti.jpg";
import img1 from "../assets/images/coimg1.jpg";
import img2 from "../assets/images/coimg2.jpg";
import img3 from "../assets/images/coimg3.jpg";
import img4 from "../assets/images/coimg4.jpg";
import img5 from "../assets/images/coimg5.jpg";
import img6 from "../assets/images/coimg6.jpg";
import foregroundimage from "../assets/images/foregroundimage.jpg";
import whatsapp from "../assets/images/whatsapp.png";
import chat from "../assets/images/chat.png";
import { Button } from "../components";

export const Coursel = () => {
  return (
    <div className="coursel__wrapper">
      <div className="wrapper-box"> </div>

      {/* ............Coursel section.......... */}
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
            <img src={img1} alt="image" />
          </div>
          <div className="image">
            <img src={img2} alt="image" />
          </div>
          <div className="image">
            <img src={img3} alt="image" />
          </div>
          <div className="image">
            <img src={img4} alt="image" />
          </div>
          <div className="image">
            <img src={img5} alt="image" />
          </div>
          <div className="image">
            <img src={img6} alt="image" />
          </div>
        </div>
        <div className="wrapper2-information">
          <h2>Car Rental Traveler Information</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="link">
            Images from <a href="https://www.freepik.com/">Freepik</a>
          </p>
          <Button name="Learn More" />
        </div>
      </div>

      {/*......... Last Part.............. */}
      <div className="last__part">
        <div className="last-background"></div>
        <div className="foreground-image">
          <img src={foregroundimage} alt="image" />
        </div>
        <div className="paragraph">
          <h2>Car Rentals from $14</h2>
          <p>
            Dignissim suspendisse in est ante in nibh mauris. Varius quam
            quisque id diam vel quam elementum pulvinar etiam. Nunc pulvinar
            sapien et ligula ullamcorper malesuada proin. Nunc mattis enim ut
            tellus elementum sagittis vitae et leo.
          </p>
          <p>
            Images from <a href="https://www.freepik.com/">Freepik</a>
          </p>
          <Button name="learn more" />
        </div>
      </div>

      {/* ......Contact Us Part........... */}
      <section className="contact__wrapper">
        <div className="wrapper-boxs">
          <h4>Manage Booking</h4>
          <p>Complete the form to review, cancel or extend your booking.</p>
          <input type="text" placeholder="Enter a valid email address" />
          <Button name="submit" />
        </div>
        <div className="wrapper-boxs">
          <span className="boxs-image">
            <img src={whatsapp} alt="whatsapp" />
          </span>
          <h4>Whatsapp Support</h4>
          <p> Add us on Whatsapp &send queries for instant reply.</p>
          <Button className="button-number" name="+12-345-678-8909"/>
        </div>
        <div className="wrapper-boxs">
          <span className="boxs-image">
            <img src={chat} alt="chatlogo" />
          </span>
          <h4>Live Chat</h4>
          <p>The fastest way to get in touch with an Expert</p>
          <Button className="button-chat" name="live chart" />
        </div>
      </section>

      {/* .....last-text....... */}
      <div className="last_text">
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
      </div>
    </div>
  );
};
