import React from "react";
import "./about.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const abouts = [
    {
      title: "Front-end Developer",
      description:
        "Love to juggle through code and structure UI which can give user a good experience while surfing.",
      imageUrl: images.about02,
    },
    {
      title: "React Developer",
      description:
        "I feel happpy while designing and implementing user-facing features for websites and applications using React.js.",
      imageUrl: images.about03,
    },
    {
      title: "Web Designer",
      description:
        "I am a web desinger with a passion for building beautiful and functional web applications.",
      imageUrl: images.about01,
    },
    {
      title: "Data Structures and Algorithms",
      description:
        "Good DSA skills will have better and more efficient approaches to solving a problem.",
      imageUrl: images.dataStructues,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        About
        <span> Me </span>
        {/* means */}
        {/* <span> Good Business</span> */}
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            className="app__profile-item"
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={about.imageUrl} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
