import React from "react";
import "./Footer.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#Home" className="logo">
            Vishal.
          </a>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Connect">Connect</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul class="social-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/vishal-kumar-375a25250/"
                target="_blank"
                rel="noreferrer"
              >
                <TiSocialLinkedin/>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/vishalverma9572"
                target="_blank"
                rel="noreferrer"
              >
               <LuGithub/>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/hey_vishalverma?t=3OK3GqPMBgpJle7qEQx84g&s=09"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter/>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hey_vishalverma"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoInstagram/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PortFolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
