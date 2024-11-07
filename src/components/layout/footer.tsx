import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>© Invertia, 2024</p>
      <div className="socials">
        <a href="https://www.instagram.com/invertia.ai/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/invertia-ai">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
