import React, { Component } from "react";
import { getSinglePost } from "../../../API";
import reactStringReplace from "react-string-replace";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import ReactPlayer from "react-player";

class SingleBlogItem extends Component {
  state = {
    postId: "",
    singlePost: [],
    imageUrl: "",
  };

  componentDidMount = () => {
    const postId = this.props.match.params.postId;

    getSinglePost(postId).then((data) => {
      if (data.error) {
      } else {
        this.setState({
          postId: postId,
          singlePost: data,
          imageUrl: data.image.url,
        });
      }
    });
  };

  render() {
    let text = this.state.singlePost.body;

    // Conditional for if the post has a video; remove the image link.
    if (this.state.singlePost.video) {
      return (
        <div>
          <Container style={{ textAlign: "center" }}>
            <Row>
              <Col>
                <h1>{this.state.singlePost.title}</h1>
                <h4>{this.state.singlePost.subtitle}</h4>
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ReactPlayer url={this.state.singlePost.video} />
                </div>

                <div>
                  <br />
                  <p>
                    Written by {this.state.singlePost.author} <br />
                    <i>
                      {moment(this.state.singlePost.written_on).format(
                        "MMMM Do YYYY"
                      )}
                    </i>
                  </p>

                  {reactStringReplace(text, /(\^)/g, (match, i) => (
                    <p key={i}>{match}</p>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    return (
      // Conditional for if the post does not have a video; keep the image link.
      <div>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <h1>{this.state.singlePost.title}</h1>
              <h4>{this.state.singlePost.subtitle}</h4>
              <img
                src={
                  "https://greenprint-strapi-server.herokuapp.com" +
                  this.state.imageUrl
                }
                alt=""
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                }}
              />
              <div>
                <br />
                <p>
                  Written by {this.state.singlePost.author} <br />
                  <i>
                    {moment(this.state.singlePost.written_on).format(
                      "MMMM Do YYYY"
                    )}
                  </i>
                </p>
                {reactStringReplace(text, /(\^)/g, (match, i) => (
                  <p key={i}>{match}</p>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SingleBlogItem;
