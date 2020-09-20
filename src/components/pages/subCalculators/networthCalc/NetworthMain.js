import React, { Component } from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";

import Step1 from "./networth_step_1";
import Step2 from "./networth_step_2";

class Networth extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      progressPoint: 0,

      // Liabilities
      mortgage: 0,
      studentLoans: 0,
      carLoan: 0,
      creditCardDebt: 0,
      personalLoans: 0,

      // Assets
      valueOfHome: 0,
      retirementFunds: 0,
      savingsAndInvestments: 0,
      valueOfCar: 0,
      liquidCash: 0,
      Other: 0,
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
    if (this.state.currentStep === 2) {
      this.calculate();
    }
  };

  nextStep = () => {
    let currentStep = this.state.currentStep;
    let progressPoint = this.state.progressPoint;
    currentStep = currentStep > 2 ? 1 : currentStep + 1;
    progressPoint = progressPoint > 100 ? 0 : progressPoint + 50;
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
    progressPoint = progressPoint - 50;
    this.setState({
      currentStep: currentStep,
      progressPoint: progressPoint,
      display_results: false,
    });
  };

  nextButton = () => {
    let currentStep = this.state.currentStep;
    if (currentStep < 2) {
      return <Button onClick={this.nextStep}>Next</Button>;
    }
    return null;
  };

  previousButton = () => {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return <Button onClick={this.previousStep}>Previous</Button>;
    }
    return null;
  };

  calculate = () => {};

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Container fluid>
          <Jumbotron>
            <h1> Networth Calculator </h1>
          </Jumbotron>
          <Form>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
            />
          </Form>

          <div>
            {this.previousButton()}
            {this.nextButton()}
          </div>
        </Container>
      </div>
    );
  }
}
export default Networth;
