import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import BlogList from "./libraryBlog/BlogList";

const Blog = () => (
  <div style={{ textAlign: "center" }}>
    <Container fluid>
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <h1>Greenprint Blog</h1>
      </Jumbotron>
    </Container>
    <BlogList />
  </div>
);

export default Blog;
