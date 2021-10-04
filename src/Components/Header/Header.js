import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

const Header = () => {
  const activeStyle = {
    color: "#fd7e14",
  };
  return (
    <nav>
      <Container>
        <div className="display-flex">
          <img src={logo} alt="" />
          <ul>
            <NavLink activeStyle={activeStyle} to="/home">
              Home
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/about">
              About us
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/service">
              Services
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/teacher">
              Teachers
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/contact">
              Contact us
            </NavLink>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
