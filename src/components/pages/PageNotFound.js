import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

const PageNotFound = () => (
  <div style={{ width: "auto", textAlign: "center" }}>
    <Container fluid>
      <Jumbotron fluid style={{ margin: "", backgroundColor: "transparent" }}>
        <Row>
          <Col>
            <h1> 404</h1>
            <p>Sorry, page not found.</p>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  </div>
);
export default PageNotFound;
