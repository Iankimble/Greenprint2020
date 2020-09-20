import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import styles from "../styles/nav_styles.module.css";
import { Fade } from "react-reveal";
import nav_styles from "../styles/nav_styles.module.css";
import style from "../styles/nav_styles.module.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          width: "auto",
          margin: "15px",
          backgroundColor: "#a64dff",
          borderRadius: "25px",
        }}
        className={nav_styles}
      >
        <Navbar.Brand>
          <Link id="RouterNavLink" to="/" className={style.homeButton}>
            GreenPrint
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle bsPrefix={styles.calc}>
                Calculators
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  backgroundColor: "#fbf9f9",
                  fontSize: "15px",
                }}
              >
                <Fade top>
                  <Dropdown.Item
                    as={Link}
                    to={"/budget"}
                    style={{ margin: "5px" }}
                  >
                    Budget Calculator
                  </Dropdown.Item>
                </Fade>
                <Fade top>
                  <Dropdown.Item
                    as={Link}
                    to={"/goals"}
                    style={{ margin: "5px" }}
                    disabled
                  >
                    Goal Calculator
                  </Dropdown.Item>
                </Fade>
                <Fade top>
                  <Dropdown.Item
                    as={Link}
                    to={"/networth"}
                    style={{ margin: "5px" }}
                    disabled
                  >
                    Networth Calculator
                  </Dropdown.Item>
                </Fade>

                {/*Need more time to review and structure formula*/}
                <Fade top>
                  <Dropdown.Item
                    as={Link}
                    to={"/tuition"}
                    style={{ margin: "5px" }}
                    disabled
                  >
                    Out-of-Pocket Tuition Calculator
                  </Dropdown.Item>
                </Fade>

                {/* Student loan repayment calculator with interest*/}
                <Fade top>
                  <Dropdown.Item
                    as={Link}
                    to={"/tuition"}
                    style={{ margin: "5px" }}
                    disabled
                  >
                    Student Loan Repayment Calculator
                  </Dropdown.Item>
                </Fade>
                {/* Consulting with finance team to review practicality and functionality of calculator*/}
                <Fade top>
                  <Dropdown.Item
                    as={Link}
                    to={"/401k"}
                    style={{ margin: "5px" }}
                    disabled
                  >
                    401k Calculator
                  </Dropdown.Item>
                </Fade>
              </Dropdown.Menu>
            </Dropdown>
            <Link
              id="RouterNavLink"
              style={{ margin: "5px" }}
              to="/blog"
              className={style.calc}
            >
              Blog
            </Link>
            <Link
              id="RouterNavLink"
              style={{ margin: "5px" }}
              to="/about"
              className={style.calc}
            >
              About
            </Link>
            <Link
              id="RouterNavLink"
              style={{ margin: "5px" }}
              to="/contact"
              className={style.calc}
            >
              Contact Us
            </Link>

            {/*Currently discussing content with financial experts*/}

            {/* <Link id="RouterNavLink" style={{ margin: "5px" }} to="/events">
              Events
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
