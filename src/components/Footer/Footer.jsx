import React from "react";
import { Link } from "react-scroll";
import style from "./Footer.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div>
        <div className={style.name}>Tarun</div>
        <div className={style.link}>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="techStack" smooth={true} duration={500}>
            Skills
          </Link>
          <Link to="contactUs" smooth={true} duration={500}>
            Contact me
          </Link>
        </div>
      </div>
      <div className={style.icons}>
        <a
          className={style.icons}
          href="https://www.linkedin.com/in/tarun-bhadauria/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/TarunBhadauria"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className={style.icons}
          href="https://www.instagram.com/tarunbhadauria_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a href="/" >
          <FaTwitter />
        </a>
        <a href="/">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Footer;
