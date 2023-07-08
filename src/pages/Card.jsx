import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import "./../index.css";
const Card = () => {
  return (
    <>
      <div className="mt-5">
        <Container className="mt-5 mb-3">
          <Row className="justify-content-center">
            <Col sm={12} md={4} lg={4} className="mt-5">
              <div className="py-3 px-3 card">
                <h3 className="text-center text-uppercase">Telco Charges</h3>
                <p>
                  This charges comes from the network operator you find yourself
                  on thus the telecommunication company. The charge is 0.75% in
                  total or deduction.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} className="mt-5">
              <div className="py-3 px-3 card">
                <h3 className="text-center text-uppercase">E-Levy Charges</h3>
                <p>
                  This charges comes from the government, this charges comes in
                  the form tax on all your withdrawals. The charge is 15% in
                  total or deduction.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} className="mt-5">
              <div className="py-3 px-3 card">
                <h3 className="text-center text-uppercase">Quick Notice</h3>
                <p>
                  Withdrawals ranging from 100 cedis and below are e-levy free
                  thus there is no e-levy charges applied to such withdrawals,
                  only telco charges.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
    </>
  );
};

export default Card;
