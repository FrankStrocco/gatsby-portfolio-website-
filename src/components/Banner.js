import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaInstagram,
  FaGithubSquare
} from "react-icons/lib/fa";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1>Frank Strocco</h1>
      <h3>
        Full Stack <span>Web Developer</span>, specializing in &nbsp;
        <span>Ruby on Rails</span> and <span>React</span>{" "}
        <p>I'm Passionate about creating great, clean looking websites.</p>
        <a className="smoothscroll" href="#about">
          start scrolling and learn more about me.
        </a>
      </h3>
    </div>
  </div>
);

export default Banner;
