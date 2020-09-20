import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import style from "../styles/formStyle.module.css";
import { Fade } from "react-reveal";
const Step_2 = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Fade>
        <Container fluid>
          <Jumbotron className={style.budgetFormFit}>
            <h1> Your Home Expenses </h1>
            <label>How much do you pay in rent or mortgage per month?</label>
            <br />
            $
            <input
              id="monrtgageRent"
              name="mortgage_rent"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.mortgage_rent}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do if pay home owners or renters insurance? If yes, how much do
              you pay per month?
            </label>
            <br />
            $
            <input
              id="homeRentInsurance"
              name="home_renters_insurance"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.home_renters_insurance}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do you pay for utilities at your home (ex. gas, water, eletricity,
              etc), if yes, how much do you pay for utilities in total per
              month?
            </label>
            <br />
            $
            <input
              id="homeUtilities"
              name="home_utilities"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.home_utilities}
              onChange={props.handleChange}
            />
            <br />
            <label>
              How much do you pay for groceries and home supplies per month?
            </label>
            <br />
            $
            <input
              id="groceriesSupplies"
              name="groceries_supplies"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.groceries_supplies}
              onChange={props.handleChange}
            />
            <br />
          </Jumbotron>
        </Container>
      </Fade>
    </div>
  );
};
export default Step_2;
