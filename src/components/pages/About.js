import React from "react";
import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import style from "../styles/foundational_styling.module.css";

import ericImg from "../styles/images/EricProfileImg.jpg";
import IanImg from "../styles/images/IanProfileImg.png";

const About = () => (
  <Container fluid>
    <div style={{ textAlign: "center" }}>
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <h1> About </h1>
        <p style={{ fontSize: "20px" }}>
          Greenprint is a financial literacy application that provides users
          with a variety of practical calculators to help illustrate their
          finances. Coupled with our finance blog, written by professional
          accountants, advisors and financial experts, the purpose of this
          application is to educate and promote good financial habits and
          health.
        </p>
      </Jumbotron>
      <Row>
        <Col>
          <h2>Contributers</h2>
          <p style={{ fontSize: "20px" }}>
            Greenprint was founded by Ian Kimble and Eric Murchinson. Inspired
            by a shared experience and compassion to help financially empower
            black and brown communities through education.
          </p>
        </Col>
      </Row>
      <Fade top>
        <Row style={{ margin: "15px", justifyContent: "center" }}>
          <Card style={{ width: "15rem", margin: "10px" }}>
            <Card.Img
              variant="top"
              src={IanImg}
              style={{
                height: "200px",
                width: "200px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
              }}
            />
            <Card.Body>
              <Card.Title>Ian Kimble</Card.Title>
              <Card.Text>Web developer and graphic designer.</Card.Text>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/iank6/"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className={style.submitButton}>
                  LinkedIn
                </Button>
              </a>
            </Card.Body>
          </Card>

          <Card style={{ width: "15rem", margin: "10px" }}>
            <Card.Img
              variant="top"
              src={ericImg}
              style={{
                height: "200px",
                width: "200px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
              }}
            />
            <Card.Body>
              <Card.Title>Eric Murchinson</Card.Title>
              <Card.Text>Financial Advisor and entrepreneur.</Card.Text>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ericmurchison/"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className={style.submitButton}>
                  LinkedIn
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Row>
      </Fade>
    </div>
  </Container>
);
export default About;
