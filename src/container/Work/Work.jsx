import React, { useState, useEffect } from "react";
import "./work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const works = [
  {
    title: "BuyMate",
    description:
      "Designed developed a Full Stack Web App with backend on Node.js, Express.js and MongoDB database and frontend using ReactJS and state management using Redux.",
    codeLink: "https://github.com/AAYUSH-droid/BuyMate",
    projectLink:
      "https://www.youtube.com/watch?v=y1L-zRZlLM8&ab_channel=aayushsharma",
    imageUrl: images.buymate,
    tag: "MERN",
  },
  {
    title: "CareerSpot Jobio",
    description:
      "Created a Job tracking app that allows users to SignUp/SignIn, add ,update and delete jobs.Used NodeJs for backend, Express for creating server and ReactJs for frontend.",
    codeLink: "https://github.com/AAYUSH-droid/CareerSpot",
    projectLink: "https://main--monumental-gnome-c88b94.netlify.app/",
    imageUrl: images.careerspot,
    tag: "MERN",
  },
  {
    title: "React Meetup App",
    description:
      "A meetup app made with ReactJs and firebase. Choose the place, Add to favorites, visit!",
    codeLink: "https://github.com/AAYUSH-droid/Meetups-app",
    projectLink: "https://meetup-app-ten.vercel.app/",
    imageUrl: images.meetup,
    tag: "React JS",
  },
  {
    title: " Tesla-Ecommerce",
    description: "A tesla webite with a modern UI",
    codeLink: "https://github.com/AAYUSH-droid/Tesla-Clone",
    projectLink: "https://tesla-reactredux-app.netlify.app/",
    imageUrl: images.tesla,
    tag: "Redux React App",
  },
  {
    title: "Bankist App",
    description: "A bank app with real world features to manage your money!",
    codeLink: "https://github.com/AAYUSH-droid/Bankist-App",
    projectLink: "https://bankistapp-jshtmlcss.netlify.app/",
    imageUrl: images.bankist,
    tag: "JavaScript",
  },
  {
    title: "Expense Tracker",
    description: "A Expense Tracker with modern UI to manage daily expenses.",
    codeLink: "https://github.com/AAYUSH-droid/Expense-Tracker",
    projectLink: "https://expenseetracker-reactjs.netlify.app/",
    imageUrl: images.expTracker,
    tag: "JavaScript",
  },
  {
    title: "Dice Game",
    description: "A fun dice Game with smooth UI, which we all love to play!!",
    codeLink: "https://github.com/AAYUSH-droid/Dice-game",
    projectLink: "https://dice-game-aayush-droid.vercel.app/",
    imageUrl: images.diceGame,
    tag: "JavaScript",
  },
  {
    title: "Guess the Number Game",
    description: "Guess the correct number and make a highscore!!",
    codeLink: "https://github.com/AAYUSH-droid/Guess-the-number-Game",
    projectLink:
      "https://guess-the-number-game-git-main-aayush-droid.vercel.app/",
    imageUrl: images.GuessNumberGame,
    tag: "JavaScript",
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My
        <span> Project </span>
        <span> Section</span>
      </h2>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app-flex" key={index}>
            <div className="app__work-img app-flex">
              <img src={work.imageUrl} alt="work"></img>
              <motion.div
                className="app__work-hover app-flex"
                whileHover={{ opacity: [1, 1] }}
                transition={{
                  duration: 0.25,
                  ease: " easeInOut",
                  staggerChildren: 0.5,
                }}
              >
                <a href={work.projectLink} target="blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.4] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.4] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tag} </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

// export default AppWrap(Work, "app");

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
