import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
class Footer extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", margin: "25px" }}>
        <Row>
          <Col>Iankimbledev.com</Col>
          <Col> &copy; Ian Kimble 2020</Col>
          <Col> Contact</Col>
        </Row>
      </div>
    );
  }
}
export default Footer;
