import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

class Retirement extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Jumbotron>
          <Container>
            <h1> 401K Calculator </h1>
            <ul>
              <li>Form</li>
              <li>
                Does user have an employer sponsored plan? how much do they put
                in? how much does employer match?
              </li>
              <li>
                Does user have any other money they are allocating to an
                investment plan
              </li>
              <li> return...</li>
            </ul>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default Retirement;
