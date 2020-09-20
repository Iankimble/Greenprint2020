import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Jumbotron>
          <Container fluid>
            <h1> Calculator </h1>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default Calculator;
