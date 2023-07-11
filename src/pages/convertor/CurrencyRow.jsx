import React from "react";
import {Container, Row, Col, Form} from "react-bootstrap";
import "../../index.css";
const CurrencyRow = props => {
  const {currencyOptions, selectedCurrency, onChangeCurrency, amount} = props;
  return (
    <>
      <div className="container shadow bg-light">
        <Form>
          <Container>
            <Row className="justify-content-center">
              <Col sm={12} md={2} className="mt-2">
                <div className="form-group">
                  <input type="number" className="py-3 shadow" value={amount} />
                </div>
              </Col>
              <Col sm={12} md={2} className="mt-2">
                <Form.Group controlId="network">
                  <select
                    className="py-3 shadow"
                    value={selectedCurrency}
                    onChange={onChangeCurrency}
                  >
                    {currencyOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
      <br />
    </>
  );
};

export default CurrencyRow;
