import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Typewriter, Cursor} from "react-simple-typewriter";
import app from "./../assets/images/client1.png";
const Banner = () => {
  const text = Typewriter({
    words: ["apple app store", "google play store"],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <div className="container-fluid">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6} className="mb-5 mt-5">
            <h1 className="text-uppercase main-text text-light">
              Sonobo App will be released on soon....
            </h1>
            <p className="text-light">
              The app will be available on the {text}
              <Cursor />
            </p>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mb-5 text-center mt-5"
            id="sec-column"
          >
            <img
              src={app}
              alt=""
              className="img-fluid img-responsive mt-5 img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
