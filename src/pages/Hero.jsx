import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Typewriter, Cursor} from "react-simple-typewriter";
const Hero = () => {
  const text = Typewriter({
    words: ["Mobile Money", "E-levy"],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <div className="container-fluid">
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={12} className="text-center mt-5">
            <h1 className="text-uppercase mt-5 main-text">
              The &nbsp;
              <span className="text-light">
                {text}
                <Cursor />
              </span>
              &nbsp; charges on your withdrawals
            </h1>
            <p className="">
              Your days of not knowing the charges on your mobile money
              withdrawals are over.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
