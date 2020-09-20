import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import style from "../styles/formStyle.module.css";
import { Fade } from "react-reveal";
import styleTwo from "../../../styles/foundational_styling.module.css";

const Step_5 = (props) => {
  if (props.currentStep !== 5) {
    return null;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Fade>
        <Container fluid>
          <Jumbotron className={style.budgetFormFit}>
            <h1> Your Investments and Retirement </h1>
            <label>
              Do you have an emergency fund? if yes, how much do you put into
              that fund per month?
            </label>
            <br />
            $
            <input
              id="emergencyFund"
              name="emergency_fund"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.emergency_fund}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do you have a savings account? If yes, how much do you put into
              savings per month?
            </label>
            <br />
            $
            <input
              id="savingsFund"
              name="savings_fund"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.savings_fund}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do you have a retirement plan? If yes, how much is your
              contribution to your plan per month(note: this calculation does
              not include interest or inflation rates)?
            </label>
            <br />
            $
            <input
              id="retirementFund"
              name="retirement_fund"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.retirement_fund}
              onChange={props.handleChange}
            />
          </Jumbotron>
        </Container>
      </Fade>
      <button
        className={styleTwo.submitButton}
        style={{
          width: "150px",
          height: "50px",
          borderRadius: "20px",
          fontSize: "20px",
        }}
      >
        Submit
      </button>
      <br />
      <br />
    </div>
  );
};
export default Step_5;
