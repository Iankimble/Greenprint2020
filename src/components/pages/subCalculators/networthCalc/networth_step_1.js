import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Step_1 = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <Container fluid>
        <Jumbotron>
          <h1>Liabilities</h1>
          <label>If you've purchased a home, how much is your mortgage? </label>
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
          <label>Do you have student loans? If yes, how much do you owe?</label>
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
            Are you leasing to own a vehicle? If yes, how much is your auto
            loan?
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
            Have you accumilated debt through credit? If yes, how much do you
            owe?
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
            Have you taken out any personal loans? If yes, how much do you owe?
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
    </div>
  );
};

export default Step_1;
