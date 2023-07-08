import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import appstore from "./../assets/images/appstore.png";
import playstore from "./../assets/images/playstore.png";
import logo from "./../assets/images/see.png";
const AboutApp = () => {
  return (
    <>
      <Container className="shadow bg-light">
        <Row className="justify-content-center">
          <Col sm={12} md={4} lg={4} className="mt-4 mb-3">
            <div className="text-center shadow mb-3 px-3">
              <img
                src={playstore}
                alt="play store logo"
                className="img-fluid img-responsive mb-3 mt-3"
              />
              <p className="">
                The <strong>SONOBO App</strong> will be on the google play store
                for the android users get access to its installation and usage.
              </p>
              <br />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-4">
            <div className="text-center shadow mb-3 px-3">
              <img
                src={appstore}
                alt="app store logo"
                className="img-fluid img-responsive mb-3 mt-3"
              />
              <p className="">
                The <strong>SONOBO App</strong> will be on the apple store for
                the IOS users get access to its installation and usage.
              </p>
              <br />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-4 mb-3">
            <div className="text-center shadow px-3">
              <img
                src={logo}
                alt="sonobo app logo"
                className="img-fluid img-responsive mb-3 mt-3"
                style={{objectFit: "fill"}}
              />
              <p className="">
                This platform is the best platform to know all the stipulated
                charges on all your mobile money charges in Ghana.
              </p>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
};

export default AboutApp;
