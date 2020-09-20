import React, { Component } from "react";
import {
  Form,
  Button,
  Jumbotron,
  Container,
  ProgressBar,
  Table,
  Col,
  Row,
} from "react-bootstrap";

import Chart from "react-google-charts";

import Step1 from "./Budget_step_1";
import Step2 from "./Budget_step_2";
import Step3 from "./Budget_step_3";
import Step4 from "./Budget_step_4";
import Step5 from "./Budget_step_5";

import style from "../../../styles/foundational_styling.module.css";

// sendReportToDB is a function that will send user data to db
import { sendReportToUser } from "../../../../API";
import Zoom from "react-reveal/Zoom";

class Budget extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      progressPoint: 0,

      monthly_income: 0,
      additional_monthly_income: 0,
      monthly_gross: 0,

      // Primary Expenses (Needs)
      mortgage_rent: 0,
      home_renters_insurance: 0,
      home_repairs: 0,
      home_utilities: 0,
      groceries_supplies: 0,

      auto_payment: 0,
      public_transportation: 0,
      auto_insurance: 0,

      work_expenses: 0,

      // Debt Repayment
      debts: 0,
      student_loans: 0,
      tuition: 0,
      medical_expenses: 0,

      // Secondary Expenses (Wants)
      entertainment_recreation: 0,
      personal_other: 0,
      phone_internet: 0,

      // Savings, Emergencies and Investments
      retirement_fund: 0,
      emergency_fund: 0,
      savings_fund: 0,

      // Calculations results
      net_monthly_income: 0,

      total_home_expenses: 0,
      total_auto_expenses: 0,
      education_expenses: 0,
      personal_expenses: 0,
      savings_expenses: 0,

      general_savings: 0,
      general_emergency: 0,
      general_investment_retirement: 0,

      total_expense: 0,

      // Weekly

      // Display Results
      display_graph: false,
      display_results: false,
      display_hero: false,
      display_confirm: false,
      display_form: true,

      // User information
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.currentStep === 5) {
      this.calculate();
    }
  };

  nextStep = () => {
    let currentStep = this.state.currentStep;
    let progressPoint = this.state.progressPoint;
    currentStep = currentStep > 6 ? 1 : currentStep + 1;
    progressPoint = progressPoint > 100 ? 0 : progressPoint + 20;
    this.setState({
      currentStep: currentStep,
      progressPoint: progressPoint,
      display_results: false,
    });
  };

  previousStep = () => {
    let currentStep = this.state.currentStep;
    let progressPoint = this.state.progressPoint;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    progressPoint = progressPoint - 20;
    this.setState({
      currentStep: currentStep,
      progressPoint: progressPoint,
      display_results: false,
    });
  };

  nextButton = () => {
    let currentStep = this.state.currentStep;
    if (currentStep < 5) {
      return (
        <Button
          size="lg"
          block
          sticky
          className={style.submitButton}
          onClick={this.nextStep}
        >
          Next
        </Button>
      );
    }
    return null;
  };

  previousButton = () => {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <Button
          size="lg"
          block
          sticky
          className={style.submitButton}
          onClick={this.previousStep}
        >
          Previous
        </Button>
      );
    }
    return null;
  };

  // Function that calculate user input
  calculate = () => {
    let progressPoint = this.state.progressPoint;
    progressPoint = 100;

    // Income calculations
    let primaryIncome = +this.state.monthly_income;
    let additionalIncome = +this.state.additional_monthly_income;

    let totalIcome = primaryIncome + additionalIncome;

    // Home calculations
    let homePayment = +this.state.mortgage_rent;
    let homeUtility = +this.state.home_utilities;
    let homeInsurance = +this.state.home_renters_insurance;
    let groceriesSupplies = +this.state.groceries_supplies;

    // Total Home Expenses
    let totalHome =
      homePayment + homeUtility + homeInsurance + groceriesSupplies;

    // Auto calculations
    let autoPayment = +this.state.auto_payment;
    let autoInsurance = +this.state.auto_insurance;
    let publicTrans = +this.state.public_transportation;

    // Totla Auto Expenses
    let totalAuto = autoPayment + autoInsurance + publicTrans;

    // Other living expense calculations
    let tuition = +this.state.tuition;
    let debts = +this.state.debts;
    let studentLoans = +this.state.student_loans;
    let medicalExpenses = +this.state.medical_expenses;
    let workExpense = +this.state.work_expenses;

    // Total Debt Expenses
    let totalDebtExpense =
      tuition + debts + studentLoans + medicalExpenses + workExpense;

    let primaryExpenses =
      tuition + debts + studentLoans + medicalExpenses + workExpense;

    // Less important expenses
    let entertainement = +this.state.entertainment_recreation;
    let phoneInternet = +this.state.phone_internet;

    let secondaryExpenses = entertainement + phoneInternet;

    // Savings and investments
    let retirementFund = +this.state.retirement_fund;
    let emergencyFund = +this.state.emergency_fund;
    let savingsFund = +this.state.savings_fund;

    // Total Savings/ retirement
    // let totalSavingsInvestments = retirementFund + emergencyFund + savingsFund;

    // Total needs
    let totalPrimary = totalHome + totalAuto + primaryExpenses;

    // Total wants
    let totalSecondary = secondaryExpenses;

    // Total Securiy
    let totalSafe = retirementFund + emergencyFund + savingsFund;

    // Left over for you
    let allExpense = totalPrimary + totalSecondary + totalSafe;
    let leftOver = totalIcome - allExpense;

    // Total leftover

    this.setState({
      progressPoint: progressPoint,
      currentStep: 6,
      display_results: true,

      monthly_gross: totalIcome,
      totalHome: totalHome,
      totalAuto: totalAuto,
      totalPersonal: secondaryExpenses,
      totalSaved: totalSafe,
      totalDebt: totalDebtExpense,
      totalExpense: allExpense,
      totalLeft: leftOver,
    });
  };

  submitForm = (e) => {
    // Function that sends the state data to the server
    e.preventDefault();

    this.setState({
      display_confirm: true,
      display_form: false,
    });

    const data = {
      monthly_income: this.state.monthly_income,
      mortgage_rent: this.state.mortgage_rent,
      home_insurance: this.state.home_renters_insurance,
      living_utilities: this.state.living_utilities,
      grocery_home: this.state.groceries_supplies,
      auto_payment: this.state.auto_payment,
      auto_insuracnce: this.state.auto_insurance,
      public_transportation: this.state.public_transportation,
      commercial_credit: this.state.debts,
      student_loan_repayment: this.state.student_loans,
      medical_expenses: this.state.medical_expenses,
      tuition_expense: this.state.tuition,
      work_expenses: this.state.work_expenses,
      entertainment: this.state.entertainment_recreation,
      miscellaneous: this.state.personal_other,
      internet_phone: this.state.phone_internet,
      retirement_savings: this.state.retirement_fund,
      emergency_fund: this.state.emergency_fund,
      general_savings: this.state.general_savings,
      totatl_gross_income: this.state.totatl_gross_income,
      total_expense_allocation: this.state.total_expense,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
    };
    sendReportToUser(data);
    // sendReportToDB(data);
  };

  render() {
    const { firstName, lastName, phone, email } = this.state;

    return (
      <div style={{ textAlign: "center", width: "auto" }}>
        <Container fluid>
          <Jumbotron style={{ backgroundColor: "transparent" }}>
            <h1> Budget Calculator </h1>
            <p style={{ fontSize: "20px" }}>
              The purpose of this calculator is to provide users with a quick
              breakdown of their expenses.
            </p>
            <ProgressBar
              now={this.state.progressPoint}
              label={`${this.state.progressPoint} %`}
              min={0}
              max={100}
              style={{ backgroundColor: "transparent" }}
              variant="info"
            />
          </Jumbotron>
          {/* </Container> */}
          {this.state.display_results ? (
            <div style={{ textAlign: "center" }}>
              <h1>Your results</h1>
              <Zoom>
                <Row style={{ textAlign: "center", margin: "10px" }}>
                  <Col
                    style={{ display: "inline-block" }}
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                  >
                    <b> Monthly Expenses at a Glance</b>
                    <Chart
                      width={"auto"}
                      height={"auto"}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Expense", "Amount"],
                        ["Home", this.state.totalHome],
                        ["Auto", this.state.totalAuto],
                        ["Personal", this.state.totalPersonal],
                        ["Debt", this.state.totalSaved],
                        ["Savings and Investments", this.state.totalSaved],
                        ["LeftOver", this.state.totalLeft],
                      ]}
                      options={{
                        title: "",
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Dignissim diam quis enim lobortis scelerisque
                      fermentum dui faucibus.
                    </p>
                  </Col>
                  <Col style={{}} xs={12} sm={12} md={6} lg={6} xl={6}>
                    {this.state.display_form ? (
                      <div>
                        <b>Get your personalized report via email</b>
                        <p>complete the form below</p>
                        <Form>
                          <label>First name</label>
                          <br />
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={firstName}
                            onChange={this.handleChange}
                            disabled
                          />
                          <br />
                          <label>Last name</label>
                          <br />
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={lastName}
                            onChange={this.handleChange}
                            disabled
                          />
                          <br />
                          <label>Phone number</label>
                          <br />
                          <input
                            id="phone"
                            name="phone"
                            type="text"
                            value={phone}
                            onChange={this.handleChange}
                            disabled
                          />
                          <br />
                          <label>Email</label>
                          <br />
                          <input
                            id="email"
                            name="email"
                            type="text"
                            value={email}
                            onChange={this.handleChange}
                            disabled
                          />
                          <br />
                          <br />
                          <button disabled onClick={this.submitForm}>
                            Submit
                          </button>
                        </Form>
                      </div>
                    ) : null}
                    {this.state.display_confirm ? (
                      // Sending data to DB is still being worked on
                      // <div>
                      //   <b>Thanks!</b>
                      //   <br />
                      //   Your Personalized budget report will be sent to your email
                      //   momentarily.
                      // </div>

                      <div>
                        <b>Under Construction</b>
                        <br />
                        We apologize for the inconvenience. This feature is
                        currently under construction.
                      </div>
                    ) : null}
                  </Col>
                </Row>
              </Zoom>
              <b>Detailed Expense Breakdown</b>
              <Row style={{ width: "auto", margin: "15px" }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Type of Expense</th>
                      <th>Current expense allocation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <th colSpan="2">Home Expenses</th>
                    <tr>
                      <td>Mortage/ Rent</td>
                      <td> ${this.state.mortgage_rent}</td>
                    </tr>
                    <tr>
                      <td>Home owners/Renters Insurance</td>
                      <td>${this.state.home_renters_insurance}</td>
                    </tr>
                    <tr>
                      <td>Living Utilities</td>
                      <td>${this.state.home_utilities}</td>
                    </tr>
                    <tr>
                      <td>Groceries and Home Supplies</td>
                      <td>${this.state.groceries_supplies}</td>
                    </tr>
                    <th colSpan="2">Auto Expenses</th>
                    <tr>
                      <td>Auto Payment (Lease or Finance)</td>
                      <td>${this.state.auto_payment}</td>
                    </tr>
                    <tr>
                      <td>Auto Insurance</td>
                      <td>${this.state.auto_insurance}</td>
                    </tr>
                    <tr>
                      <td>Public Transportation</td>
                      <td>${this.state.public_transportation}</td>
                    </tr>
                    <th colSpan="2">Debt Repayments</th>
                    <tr>
                      <td>Commercial Credit repayment</td>
                      <td>${this.state.debts}</td>
                    </tr>
                    <tr>
                      <td>Student Loan repayment</td>
                      <td>${this.state.student_loans}</td>
                    </tr>
                    <tr>
                      <td>Medical Expenses</td>
                      <td>${this.state.medical_expenses}</td>
                    </tr>
                    <tr>
                      <td>Tuition Expenses</td>
                      <td>${this.state.tuition}</td>
                    </tr>
                    <th colSpan="2">Personal Expenses</th>
                    <tr>
                      <td>Work Expenses</td>
                      <td>${this.state.work_expenses}</td>
                    </tr>

                    <tr>
                      <td>Entertainment</td>
                      <td>${this.state.entertainment_recreation}</td>
                    </tr>
                    <tr>
                      <td>miscellaneous</td>
                      <td>${this.state.personal_other}</td>
                    </tr>
                    <tr>
                      <td>Internet and Phone</td>
                      <td>${this.state.phone_internet}</td>
                    </tr>
                    <th colSpan="2">Savings and Investments</th>
                    <tr>
                      <td>Retirement Savings</td>
                      <td>${this.state.retirement_fund}</td>
                    </tr>
                    <tr>
                      <td>Emergency Fund</td>
                      <td>${this.state.general_emergency}</td>
                    </tr>
                    <tr>
                      <td>General Savings </td>
                      <td>${this.state.savings_fund}</td>
                    </tr>
                    <th colSpan="2">
                      <b>Income Summary</b>
                    </th>
                    <tr>
                      <td>Total Gross Income</td>
                      <td>${this.state.monthly_gross}</td>
                    </tr>
                    <tr>
                      <td>Total Expense Allocation</td>
                      <td>${this.state.totalExpense}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Total leftover Income</b>
                      </td>
                      <td>
                        <b>${this.state.totalLeft}</b>
                      </td>
                    </tr>

                    <tr></tr>
                  </tbody>
                </Table>
              </Row>
            </div>
          ) : null}

          <Form onSubmit={this.handleSubmit} style={{ width: "auto" }}>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              monthly_income={this.state.monthly_income}
              additional_monthly_income={this.state.additional_monthly_income}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              mortgage_rent={this.state.mortgage_rent}
              home_renters_insurance={this.state.home_renters_insurance}
              home_utilities={this.state.home_utilities}
              groceries_supplies={this.state.groceries_supplies}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              auto_payment={this.state.auto_payment}
              auto_insurance={this.state.auto_insurance}
              public_transportation={this.state.public_transportation}
            />
            <Step4
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              tuition={this.state.tuition}
              student_loans={this.state.student_loans}
              phone_internet={this.state.phone_internet}
              entertainment_recreation={this.state.entertainment_recreation}
              medical_expenses={this.state.medical_expenses}
              work_expenses={this.state.work_expenses}
              debts={this.state.debts}
            />
            <Step5
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              emergency_fund={this.state.emergency_fund}
              savings_fund={this.state.savings_fund}
              retirement_fund={this.state.retirement_fund}
            />
          </Form>

          <div>
            <Row>
              <br />
              <Col>{this.previousButton()}</Col>
              <Col>{this.nextButton()}</Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Budget;
