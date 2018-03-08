import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaChevronCircleUp
} from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          <li>
            <a href="https://github.com/FrankStrocco">
              <FaGithub />
            </a>
          </li>
        </ul>

        <ul className="copyright">
          <li>&copy; Copyright 2018 CeeVee</li>
          <li>
            Design by
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
            Developed in React ⚛️ by &nbsp;
            <a href="http://www.amanhimself.me">Aman Mittal</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
