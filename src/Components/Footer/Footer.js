import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import logo from "../../images/footerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFax, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer_part">
      <Container>
        {/*  footer logo */}
        <img src={logo} alt="" />
        <div className="display_grid">
          <div>
            <h2>Contact us</h2>
            <h4>gyan@itfirm.com</h4>
            <h4>321 . 125 . 547 . 64 | 365 . 258 . 357 . 32</h4>
            <h4>www.gyanitfirm.com</h4>
          </div>

          <div>
            <h2>Open Hours</h2>
            <h4>Mon - Fri : 10 AM - 08 PM</h4>
            <h4>Saturday : 02 PM - 08 PM</h4>
            <h4>Sunday : Holiday</h4>
          </div>

          <div>
            <h2>Address</h2>
            <h4>1234, Parkstreet Avenue Road</h4>
            <h4>Newyork Main City</h4>
            <h4>America - 11200</h4>
          </div>
        </div>
        <div>
          {/* font awesome icon */}
          <FontAwesomeIcon className="icons" icon={faVoicemail} />
          <FontAwesomeIcon className="icons" icon={faPhone} />
          <FontAwesomeIcon className="icons" icon={faFax} />
        </div>
      </Container>
      {/* header part */}
      <header>
        Copyright 2021 - Gyan Technologies Ltd. | info@gyan.com | +8801999498887
        (10AM-5PM) by GYAN
      </header>
    </div>
  );
};

export default Footer;
