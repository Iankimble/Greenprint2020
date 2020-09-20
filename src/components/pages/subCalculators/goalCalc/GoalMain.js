import React, { Component } from "react";
import { Jumbotron, Container, Form, Row, Col } from "react-bootstrap";

class Goals extends Component {
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

  calculate = () => {
    let userMoney = 20;
    console.log(`money I can contribute to my goal ${userMoney}`);
    let weekly = 7;
    // let weeklyCount = "";

    // let biWeekly = 14;
    // let biWeeklyCount = "";

    // let month = 30.43;
    // let monthlyCount = "";

    let userGoal = 100;
    console.log(`my goal is ${userGoal}`);

    let monthlyPay = userGoal / userMoney;
    console.log(
      `will take ${monthlyPay} months to reach goal if saving per month`
    );

    let weeklyPay = monthlyPay * 4;
    console.log(`will take ${weeklyPay} weeks if saving per week`);

    let biweeklyPay = weekly * 2;
    console.log(`will take ${biweeklyPay} weeks if saving every two weeks`);

    let convert = require("convert-units");
    //______________________________________________________________________________
    let count = 0;
    for (let i = 0; i <= userGoal; i++) {
      count = i / userMoney;
    }
    //count in weeks
    // this calculation assumes the user will be saving the user money e/ week
    console.log(count);

    // this calculation is assuming the user is saving the same amout of money at the same weekly frequency
    // but now it is in months
    let countMonth = convert(count).from("week").to("month");
    console.log(countMonth);

    // what I need to discover is what the monthly amount changes to ... presumably it should be the users money
    // multiplied by 4

    //_____________________________________________________________________________
    // logic that converts weeks to months
    // logic that converts months to years

    // let countTwo = new Array(count);
    // let countThree = countTwo.length;
    // console.log(countThree);

    // let countFour = countThree / 7;
    // console.log(countFour);

    // let countFive = countFour / userMoney;
    // console.log(countFive);

    // loop and count to the goal number
    // count every 7th number
    // for every 7 number thats a count
    // mulitply the count to the user's money > goal
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Container fluid>
          <Jumbotron>
            <h1> Goal Calculator </h1>
            <p>
              This calculator will help determine how long it will take to
              accomplish your financial goal
            </p>
          </Jumbotron>
          <div>
            <Container fluid>
              <Jumbotron>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label column lg={10}>
                          What is your goal?
                          <br />
                          <i>
                            Setting a goal starts with specificity. What exactly
                            would are you saving up for?
                          </i>
                        </Form.Label>
                        <Col>
                          $
                          <input
                            id=""
                            name=""
                            type="number"
                            min="0.00"
                            max="1000000.00"
                            step="0.01"
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label column lg={10}>
                          How much do you need to reach your goal financially?
                        </Form.Label>
                        <Col>
                          $
                          <input
                            id=""
                            name=""
                            type="number"
                            min="0.00"
                            max="1000000.00"
                            step="0.01"
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label column lg={10}>
                          How much have you saved toward your goal?
                        </Form.Label>
                        <Col>
                          $
                          <input
                            id=""
                            name=""
                            type="number"
                            min="0.00"
                            max="1000000.00"
                            step="0.01"
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label column lg={10}>
                          How much money can you commit to your goal?
                          <br />
                          <i>
                            To determine how much money you have to spend, use
                            our budget calculator
                          </i>
                        </Form.Label>
                        <Col>
                          $
                          <input
                            id=""
                            name=""
                            type="number"
                            min="0.00"
                            max="1000000.00"
                            step="0.01"
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>
                  </Col>
                  <Col md={12} lg={6}>
                    <h1>Results</h1>
                  </Col>
                </Row>
              </Jumbotron>
            </Container>
          </div>
          <div>
            <button onClick={this.calculate}>Submit</button>
          </div>
        </Container>
      </div>
    );
  }
}
export default Goals;
