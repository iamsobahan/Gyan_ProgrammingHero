import React from "react";
import "./About.css";
import logoOne from "../../images/alogo.png";
import logoTwo from "../../images/alogo2.png";
import logoThree from "../../images/alogo3.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about_part">
      <div className="title">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          commodi, fugit suscipit ut
        </p>
      </div>
      <div className="flex_about">
        <div>
          <img src={logoOne} alt="" />
          <h3>Online Classes</h3>
          <Link to="/service">Learn more</Link>
        </div>
        <div>
          <img src={logoTwo} alt="" />
          <h3>Online & Offline Support</h3>
          <Link to="/service">Learn more</Link>
        </div>
        <div>
          <img src={logoThree} alt="" />
          <h3>Lifetime Support</h3>
          <Link to="/service">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
