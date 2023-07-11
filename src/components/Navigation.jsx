import React, {useState, useEffect} from "react";
import "./Components.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {HiMenuAlt3} from "react-icons/hi";
import {Link} from "react-router-dom";
import logo from "../assets/images/bgless-logo.png";
const Navigation = () => {
  const handleLinkClick = () => {
    const navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle) {
      navbarToggle.click();
    }
  };
  return (
    <div>
      <Navbar expand="lg" className="fixed-top navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="h-50 logo-container">
            <img
              src={logo}
              className="img-responsive img-fluid"
              id="logo"
              alt="logo"
              style={{width: "100%", height: "60px", objectFit: "cover"}}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            id="navbar-toggle"
            aria-controls="responsive-navbar-nav"
            onFocus={e => e.target.blur()}
            style={{border: "0"}}
          >
            <span className="">
              <HiMenuAlt3
                className="toggle-icon text-light"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/convertor"
                className="btn btn-calculate m-2"
                onClick={handleLinkClick}
              >
                Convert Currency
              </Link>
              <Link
                to="/coming-soon"
                className="btn btn-calculate m-2"
                onClick={handleLinkClick}
              >
                Coming Soon
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
