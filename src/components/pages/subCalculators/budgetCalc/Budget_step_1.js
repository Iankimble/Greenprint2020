import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import style from "../styles/formStyle.module.css";
import { Fade } from "react-reveal";

const Step_1 = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Fade>
        <Container fluid>
          <Jumbotron className={style.budgetFormFit}>
            <h1> Your Income </h1>
            <label>How much money do you make per month? </label>
            <br />
            $
            <input
              id="monthlyIncome"
              name="monthly_income"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.monthly_income}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do you make any additaional income per month that you'd like to
              add?
            </label>
            <br />
            $
            <input
              id="additionalMonthlyIncome"
              name="additional_monthly_income"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.additional_monthly_income}
              onChange={props.handleChange}
            />
            <br />
          </Jumbotron>
        </Container>
      </Fade>
    </div>
  );
};
export default Step_1;
