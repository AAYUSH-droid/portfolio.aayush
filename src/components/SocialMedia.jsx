import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/AAYUSH-droid">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/aayushhhsharma">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/aayush-sharma-5239321b8/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="mailto:sharma31aayush@gmail.com">
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
