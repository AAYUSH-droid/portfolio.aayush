import React from "react";
import "./header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import Typical from "react-typical";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div>
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Aayush</h1>
                <p>I'm a</p>{" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Active Open Source Contributer",
                    1000,
                    "Enthusiastic Dev ",
                    1000,
                    "Front End Developer ",
                    1000,
                    "React Js Developer ",
                    1000,
                    "CS Student ",
                    1000,
                  ]}
                />
              </div>
            </div>

            <div className="tag-cmp app__flex">
              {/* <p className="p-text">Front End Web Developer</p> */}
              {/* <p className="p-text">CS student</p> */}
              <button className="header-resume">
                <a href="#contact" className="head-text">
                  Let's Connect.
                </a>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.headerImg} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.react, images.javascript, images.cpp].map(
            (circle, index) => (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="profile_bg" />
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
