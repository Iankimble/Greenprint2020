import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import style from "../styles/formStyle.module.css";
import { Fade } from "react-reveal";

const Step_4 = (props) => {
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Fade>
        <Container fluid>
          <Jumbotron className={style.budgetFormFit}>
            <h1>Additional Life Expenses</h1>
            <label>
              Are you planning on, or currently attending school? If yes, how
              much do you pay in tuition per month?
            </label>
            <br />
            $
            <input
              id="tuition"
              name="tuition"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.tuition}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Have you attended a higher learning institution and did you take
              out any loans? if yes, how much do you pay per month in repaying
              your student loans?
            </label>
            <br />
            $
            <input
              id="studentLoans"
              name="student_loans"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.student_loans}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do you pay for internet, phone and/or cable? If yes, how much do
              you pay per month for these services?
            </label>
            <br />
            $
            <input
              id="phoneInternet"
              name="phone_internet"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.phone_internet}
              onChange={props.handleChange}
            />
            <br />
            <label>
              How much do you pay on recreational and leisure activities per
              month (ex. shopping, eating out, etc.)?
            </label>
            <br />
            $
            <input
              id="entertainment"
              name="entertainment_recreation"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.entertainment_recreation}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do you have any out of pocket medical expenses that you pay on a
              monthly basis? If yes, how much do you pay?
            </label>
            <br />
            $
            <input
              id="medicalExpense"
              name="medical_expenses"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.medical_expenses}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do you have any work monthly work related expenses? If yes, how
              much do you pay for those expenses per month?
            </label>
            <br />
            $
            <input
              id="workExpense"
              name="work_expenses"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.work_expenses}
              onChange={props.handleChange}
            />
            <br />
            <label>
              Do you have any debts that you actively pay per month? If, yes how
              much do you pay toward your debt per month?
            </label>
            <br />
            $
            <input
              id="debts"
              name="debts"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={props.debts}
              onChange={props.handleChange}
            />
          </Jumbotron>
        </Container>
      </Fade>
    </div>
  );
};
export default Step_4;
