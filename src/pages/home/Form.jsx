import React, {useState} from "react";
import {Container, Row, Col, Form, Button, Alert} from "react-bootstrap";
import Card from "./Card";

const CalcForm = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [network, setNetwork] = useState("MTN");
  const [totalCharges, setTotalCharges] = useState(0);
  const [elevyCharges, setElevyCharges] = useState(1.5);
  const [telcoCharges, setTelcoCharges] = useState(0.75);
  const [calculateClicked, setCalculateClicked] = useState(false);

  const handleWithdrawalAmountChange = e => {
    setWithdrawalAmount(e.target.value);
  };

  const handleNetworkChange = e => {
    setNetwork(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Withdrawal Amount:", withdrawalAmount);
    console.log("Network:", network);
    console.log("Total Charges:", totalCharges);
  };

  const handleCalculate = () => {
    const calculatedElevyCharges = (withdrawalAmount * elevyCharges) / 100;
    const calculatedTelcoCharges = (withdrawalAmount * telcoCharges) / 100;

    if (network === "MTN" || network === "AirtelTigo") {
      setTotalCharges(calculatedElevyCharges + calculatedTelcoCharges);
    } else if (network === "Vodafone") {
      setTotalCharges(calculatedElevyCharges);
    } else if (network === "Glo") {
      setTotalCharges(calculatedElevyCharges);
    } else {
      alert("Please choose a network operator");
    }

    setCalculateClicked(true);
  };

  return (
    <>
      <div className="container shadow bg-light">
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row className="justify-content-center">
              {calculateClicked && (
                <>
                  <div className="col-sm-12 col-md-6 col-lg-3 mt-3 mb-3">
                    <div className="shadow py-2 charge-container">
                      <h5 className="text-uppercase mt-2 text-dark text-center">
                        Network : {network}
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 mt-3 mb-3">
                    <div className="shadow py-2 charge-container">
                      <h5 className="text-uppercase mt-2 text-dark text-center">
                        E-levy Charges : {elevyCharges}
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 mt-3 mb-3">
                    <div className="shadow py-2 charge-container">
                      <h5 className="text-uppercase mt-2 text-dark text-center">
                        Telco Charges : {telcoCharges}
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 mt-3 mb-3">
                    <div className="shadow py-2 charge-container">
                      <h5 className="text-uppercase mt-2 text-dark text-center">
                        Total Charges : &#8373;{totalCharges}
                      </h5>
                    </div>
                  </div>
                </>
              )}
              <Col sm={12} md={4} className="mt-2">
                <Form.Group controlId="withdrawalAmount">
                  <Form.Control
                    type="number"
                    className="py-3 shadow"
                    value={withdrawalAmount}
                    onChange={handleWithdrawalAmountChange}
                    placeholder="&#8373;110"
                  />
                  <small className="text-dark description">
                    Withdrawal Amount
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12} md={4} className="mt-2">
                <Form.Group controlId="network">
                  <Form.Control
                    as="select"
                    className="py-3 shadow"
                    value={network}
                    onChange={handleNetworkChange}
                  >
                    <option value="MTN">MTN</option>
                    <option value="AirtelTigo">AirtelTigo</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="Glo">Glo</option>
                  </Form.Control>
                  <small className="text-dark description">
                    Network (MTN, AirtelTigo, Vodafone, Glo)
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12} md={4} className="mt-2">
                <Button
                  type="submit"
                  className="btn btn-calculate form-control py-3 shadow"
                  onClick={handleCalculate}
                >
                  Calculate
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
        <Card />
      </div>
      <br />
    </>
  );
};

export default CalcForm;
