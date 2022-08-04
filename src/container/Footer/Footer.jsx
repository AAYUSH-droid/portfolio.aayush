import React from "react";
import "./footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.gmail} />
          <a href="mailto:sharma31aayush@gmail.com" className="p-text">
            sharma31aayush@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} />
          <a href="tel:+91 9347243575" className="p-text">
            +91 9347243575
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.linkedIn} />
          <a
            href="https://www.linkedin.com/in/aayush-sharma-5239321b8/"
            className="p-text"
          >
            Aayush
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.github} />
          <a href="https://github.com/AAYUSH-droid" className="p-text">
            AAYUSH-droid
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
