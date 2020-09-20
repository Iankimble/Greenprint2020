import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import style from "../styles/formStyle.module.css";
import { Fade } from "react-reveal";
const Step_3 = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Fade>
        <Container fluid>
          <Jumbotron className={style.budgetFormFit}>
            <h1> Your Transportation Expenses</h1>
            <label>
              If you are leasing a vehicle, how much do you pay per month for
              your vehicle?
            </label>
            <br />
            $
            <input
              id="autoPayment"
              name="auto_payment"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.auto_payment}
              onChange={props.handleChange}
            />
            <br />
            <label>How much do you pay for auto insurance per month?</label>
            <br />
            $
            <input
              id="autoInsurance"
              name="auto_insurance"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.auto_insurance}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do you ride on publication transportation? If yes, how much do you
              pay to ride per month?
            </label>
            <br />
            $
            <input
              id="publicTrans"
              name="public_transportation"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.public_transportation}
              onChange={props.handleChange}
            />
          </Jumbotron>
        </Container>
      </Fade>
    </div>
  );
};
export default Step_3;
