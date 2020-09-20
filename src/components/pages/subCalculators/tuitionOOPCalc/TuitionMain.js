import React, { Component } from "react";
import { Jumbotron, Container, Button, Form } from "react-bootstrap";

class Tuition extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
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
            <h1> Tuition Calculator </h1>
          </Jumbotron>
          <div>
            <Container fluid>
              <Jumbotron>
                <h1>Form</h1>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                </Form>
              </Jumbotron>
            </Container>
          </div>

          <div>
            <button>Submit</button>
          </div>
        </Container>
      </div>
    );
  }
}
export default Tuition;
