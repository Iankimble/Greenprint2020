import React, { Component } from "react";
import { getBlogContent } from "../../../API";
import moment from "moment";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import style from "../../styles/foundational_styling.module.css";

export class BlogList extends Component {
  constructor() {
    super();
    this.state = {
      blog: [],
      error: false,
      perPage: 2,
      isLoading: true,
    };
  }

  loadMore = () => {
    this.setState({
      perPage: this.state.perPage + 2,
    });
  };

  isLoadingGraphic = () => (
    <div>
      <img src="" alt="" style={{}} />
      <h1>
        <i>Loading...</i>
      </h1>
      <br />
    </div>
  );

  errorPage = () => (
    <div>
      <img src="" alt="" style={{}} />
      <h1>
        <i>Sorry an error occured</i>
      </h1>
    </div>
  );

  componentDidMount() {
    getBlogContent().then((data) => {
      if (data.error) {
        this.setState({
          error: true,
        });
      } else
        this.setState({
          blog: data.reverse(),
          isLoading: false,
        });
    });
  }

  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    let listdata = this.state.blog.slice(0, this.state.perPage).map((post) => {
      return (
        <Container key={post.id}>
          <div>
            <Card style={{ margin: "5px" }}>
              <Row style={{ margin: "5px", textAlign: "center" }}>
                <Col xs="auto" sm="auto" md="auto" lg={6} xl={6} style={{}}>
                  <img
                    src={`https://greenprint-strapi-server.herokuapp.com${post.image.url}`}
                    alt="blogImage.png"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </Col>
                <Col xs="auto" sm="auto" md="auto" lg={6} xl={6} style={{}}>
                  <h1>{post.title}</h1>
                  <p>
                    {post.blurb}
                    <br />
                    <br />
                    {moment(post.createdAt).format("MMMM Do YYYY")}
                    <br />
                    <Link to={`/article/${post.id}`}>
                      <Button
                        style={{ marginTop: "100px" }}
                        className={style.submitButton}
                      >
                        Read More
                        <br />
                      </Button>
                    </Link>
                  </p>
                </Col>
              </Row>
            </Card>
          </div>
        </Container>
      );
    });
    if (this.state.isLoading === true) {
      return (
        <div>
          {this.isLoadingGraphic()}
          <div className="sweet-loading">
            <PuffLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={this.state.loading}
            />
          </div>
        </div>
      );
    }
    if (this.state.isLoading === true && this.state.error === true) {
      return <div>{this.errorPage()}</div>;
    } else {
      return (
        <div style={{ margin: "55px" }}>
          <Fade top>{listdata}</Fade>
          <Button
            size="lg"
            block
            onClick={this.loadMore}
            className={style.submitButton}
          >
            Load More
          </Button>
        </div>
      );
    }
  }
}

export default BlogList;
