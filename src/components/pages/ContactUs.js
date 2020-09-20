import React, { Component } from "react";
import { Jumbotron, Container, Col, Row, Form, Button } from "react-bootstrap";
import { contactUs } from "../../API";
import { Fade } from "react-reveal";
import style from "../styles/foundational_styling.module.css";

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      to: "ian.kimble571@gmail.com",
      name: "",
      from: "",
      subject: "",
      text: "",
      error: "",
      displayForm: true,
      displayConfirmation: false,
    };
  }

  // Function that takes the input feild data and sets the values to the state properties.
  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  // onclick that takes in the data from state and passes it into a variable.
  submit = (event) => {
    event.preventDefault();
    const { to, from, subject, text } = this.state;
    const msg = {
      to,
      from,
      subject,
      text,
    };

    // the variable that contains the new state data is passed through the function that
    // sends that data to the contact API.
    contactUs(msg).then((msg) => {
      // If there is an error it will throw an error, otherwise code will clear the state and send
      // the input data to the server.
      if (msg.error) this.setState({ eror: msg.error });
      else
        this.setState({
          error: "",
          from: "",
          subject: "",
          text: "",
        });
    });

    // Once the data is sent to the server, confirmation of it being sent will now be true.
    this.setState({ displayConfirmation: true, displayForm: false });
  };

  // A function that contains JSX for the form that can be rendered within 1 line of code
  contactForm = (name, from, text, subject) => (
    <Form
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        alignContent: "center",
      }}
    >
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name"
          onChange={this.handleChange("name")}
          value={name}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={this.handleChange("from")}
          value={from}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="select"
          title="Subject"
          value={text}
          placeholder="select"
          onChange={this.handleChange("subject")}
        >
          <option>Please select a subject</option>

          <option>I would like to review my finances</option>
          <option>I would like to buy a home </option>
          <option>I would like to make a big purchase</option>
          <option>I'm having trouble saving money</option>
          <option>Other</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          rows="8"
          placeholder="Write your message here..."
          onChange={this.handleChange("text")}
          value={subject}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        size="lg"
        block
        onClick={this.submit}
        className={style.submitButton}
      >
        Submit
      </Button>
    </Form>
  );

  // When the form is sent and transmitted, this function contains the logic to display a confirmation page
  // in JSX.
  confirmationOfSubmission = () => (
    <Fade bottom>
      <div>
        <img src="" alt="" />
        <h1> Thank you for your inquiry!</h1>
        <p> One of our team members will be following up with you shortly</p>
      </div>
    </Fade>
  );

  render() {
    const { name, from, subject, text } = this.state;
    // When a user sumbits a form successfully a confirmation message will display using conditional terinary
    // logic.
    return (
      <div>
        <Container fluid style={{ textAlign: "center" }}>
          <Jumbotron style={{ backgroundColor: "transparent" }}>
            <Row>
              <Col>
                <h1>Contact Us</h1>
                <p style={{ fontSize: "20px" }}>
                  Have any questions, concerns, or would like to learn more
                  about Greenprint? Please complete the form below and we will
                  be in touch with you shortly.
                </p>
              </Col>
            </Row>
            <Row>
              {this.state.displayForm ? (
                <Col>{this.contactForm(name, from, subject, text)}</Col>
              ) : null}
              {this.state.displayConfirmation ? (
                <Col>{this.confirmationOfSubmission()}</Col>
              ) : null}
            </Row>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default ContactUs;
