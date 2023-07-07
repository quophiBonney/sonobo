import React, {useState, useEffect} from "react";
import "./Components.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {HiMenuAlt3} from "react-icons/hi";
import {Link, useLocation} from "react-router-dom";
import logo from "../assets/images/bgless-logo.png";
import secondLogo from "../assets/images/bgless-logo.png";
const Navigation = () => {
  const location = useLocation();
  const [first, setFirst] = useState(secondLogo);
  const [toggleIcon, setToggleIcon] = useState("text-light");
  const [navLink, setNavLink] = useState(
    "text-light navLink text-decoration-none"
  );
  const [navbar, setNavbar] = useState("navbar-transparent");
  useEffect(() => {
    const changeNavbarBackground = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = 1;
      if (scrollPosition > scrollHeight) {
        setNavbar("navbar-black");
        setFirst(logo);
        setNavLink("text-dark navLink");
        setToggleIcon("text-dark");
      } else {
        setNavbar("navbar-transparent");
        setFirst(secondLogo);
        setNavLink("text-light navLink");
        setToggleIcon("text-light");
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  }, []);
  const handleLinkClick = () => {
    const navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle) {
      navbarToggle.click();
    }
  };
  return (
    <div>
      <Navbar expand="lg" className={`fixed-top ${navbar}`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="h-50 logo-container">
            <img
              src={`${first}`}
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
                className={`toggle-icon ${toggleIcon}`}
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
                to="/"
                active={location.pathname === "/" ? "true" : undefined}
                className={
                  location.pathname === "/"
                    ? `m-2 ${navLink} border-bottom border-bottom-width-2 border-bottom-color-black`
                    : `m-2 ${navLink}`
                }
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="/works"
                active={location.pathname === "/works" ? "true" : undefined}
                className={
                  location.pathname === "/works"
                    ? `m-2 ${navLink} border-bottom border-bottom-width-2 border-bottom-color-black`
                    : `m-2 ${navLink}`
                }
                onClick={handleLinkClick}
              >
                How It Works
              </Link>
              <Link
                to="/about-us"
                active={location.pathname === "/about-us" ? "true" : undefined}
                className={
                  location.pathname === "/about-us"
                    ? `m-2 ${navLink} border-bottom border-bottom-width-2 border-bottom-color-black`
                    : `m-2 ${navLink}`
                }
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                active={location.pathname === "/contact" ? "true" : undefined}
                className={
                  location.pathname === "/contact"
                    ? `m-2 ${navLink} border-bottom border-bottom-width-2 border-bottom-color-black`
                    : `m-2 ${navLink}`
                }
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
