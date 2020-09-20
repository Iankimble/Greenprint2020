import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Step_2 = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div>
      <Container fluid>
        <Jumbotron>
          <h1>Assets</h1>
          <label>How much is your home worth?</label>
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
            Do you have a retirement fund? If yes, how much have you saved?
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
          <label>How much liquid cash? (real money) do you have?</label>
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
          <label>
            Do you have a savings account? If yes, how much have you invested
            into savings?
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
          <label>
            Do you own a vehicle? If yes, how much is your vehicle valued at?
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
          <label>
            Do you own miscellanious items that have appreciated over time?
            (jewlery, paintings, etc)? if yes, what is the valuation of these
            items?
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
      <button>Submit</button>
    </div>
  );
};

export default Step_2;
