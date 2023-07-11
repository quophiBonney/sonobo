import React, {useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Typewriter, Cursor} from "react-simple-typewriter";
import svg from "../../assets/images/cheap.png";
import "../../index.css";
const CovertorHero = () => {
  var firstcurrency = Typewriter({
    words: ["Dollar", "Euro"],
    loop: {},
    typeSpeed: 120,
  });
  const fromCurrency = Typewriter({
    words: ["Yen", "Rupee"],
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
                Currency conversion made simple
              </h1>
              <p className="text-light">
                {firstcurrency}&nbsp; to &nbsp;
                <span>{fromCurrency}</span>
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

export default CovertorHero;
