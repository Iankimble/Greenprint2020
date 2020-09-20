import React from "react";
import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";
import "../styles/fonts/fonts.module.css";
import style from "../styles/foundational_styling.module.css";
import { Link } from "react-router-dom";
import budgetImg from "../styles/images/budgetImg.png";
import { Fade } from "react-reveal";

const Home = () => (
  <div style={{ width: "auto" }}>
    <Container fluid>
      <Jumbotron fluid style={{ margin: "" }} className={style.landingBgTheme}>
        <Row>
          <Col lg="6" sm="12">
            <Fade left>
              <img
                src={budgetImg}
                alt="budgeting demo"
                className={style.demoImage}
              />
            </Fade>
          </Col>
          <Col
            lg="6"
            sm="12"
            style={{
              textAlign: "center",
              margin: "auto",
            }}
          >
            <Fade top>
              <h1>
                <b>Welcome to Greenprint</b>
              </h1>
              <p className={style.welcomeText}>
                Greenprint is a financial literacy application that provides
                users with a variety of practical calculators to help illustrate
                their finances. Coupled with our finance blog, written by
                professional accountants, advisors and financial experts, the
                purpose of this application is to educate and promote good
                financial habits and health.
              </p>

              <br />
              <Link to="/budget">
                <Button
                  variant="primary"
                  size="lg"
                  className={style.submitButton}
                >
                  Try or Budget Calculator
                </Button>
              </Link>
            </Fade>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  </div>
);
export default Home;
