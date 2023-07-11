import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Typewriter, Cursor} from "react-simple-typewriter";
import svg from "../../assets/images/cheap.png";
import "../../index.css";
const Hero = () => {
  const text = Typewriter({
    words: ["Momo", "E-levy"],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <>
      <div className="container-fluid">
        <Container className="">
          <Row className="justify-content-center">
            <Col sm={12} md={6} lg={6} className="mb-5 mt-5">
              <h1 className="text-uppercase main-text text-light">
                {text}
                <Cursor />
                &nbsp; charges on your withdrawals
              </h1>
              <p className="text-light">
                Your days of not knowing the charges on your mobile money
                withdrawals are over.
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
                src={svg}
                alt=""
                className="img-fluid img-responsive mt-3 img"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
