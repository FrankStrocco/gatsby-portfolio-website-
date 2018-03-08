import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Full Stack Engineer. Specializing in Ruby on Rails and React.js. Came
          from the Gaming industry where after 14 years of technical animation,
          I discovered coding for writing tools for my Animators and fell in
          love with it.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <ul>
                <li>Frank Strocco</li>
                <li> San Diego, CA 92117 US</li>
                <li>frank.strocco@gmail.com</li>
              </ul>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
