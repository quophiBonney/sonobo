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
      console.log("Telco & e-levy charges apply");
      setTotalCharges(calculatedElevyCharges + calculatedTelcoCharges);
    } else if (network === "Vodafone") {
      setTotalCharges(calculatedElevyCharges);
    } else {
      alert("Please choose a network operator");
    }

    setCalculateClicked(true);
  };

  return (
    <div className="container-fluid form-container">
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row className="justify-content-center">
            {calculateClicked && (
              <div className="d-flex w-100 text-center">
                <div className="text-light">
                  <h3 className="text-uppercase">
                    E-levy Charges: {elevyCharges}
                  </h3>
                </div>
                <div className="mx-auto text-light">
                  <h3 className="text-uppercase">
                    Telco Charges: {telcoCharges}
                  </h3>
                </div>
                <div className="ms-auto text-light">
                  <h3 className="text-uppercase">
                    Total Charges: {totalCharges}
                  </h3>
                </div>
              </div>
            )}
            <Col sm={12} md={4} className="mt-5">
              <Form.Group controlId="withdrawalAmount">
                <Form.Control
                  type="number"
                  value={withdrawalAmount}
                  onChange={handleWithdrawalAmountChange}
                  placeholder="110"
                />
                <Form.Text className="text-light">Withdrawal Amount</Form.Text>
              </Form.Group>
            </Col>
            <Col sm={12} md={4} className="mt-5">
              <Form.Group controlId="network">
                <Form.Control
                  as="select"
                  value={network}
                  onChange={handleNetworkChange}
                >
                  <option value="MTN">MTN</option>
                  <option value="AirtelTigo">AirtelTigo</option>
                  <option value="Vodafone">Vodafone</option>
                  <option value="Glo">Glo</option>
                </Form.Control>
                <Form.Text className="text-light">
                  Network (MTN, AirtelTigo, Vodafone, Glo)
                </Form.Text>
              </Form.Group>
            </Col>
            <Col sm={12} md={4} className="mt-5">
              <Button
                type="submit"
                className="btn btn-calculate form-control"
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
  );
};

export default CalcForm;
