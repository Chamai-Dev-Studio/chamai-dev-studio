import React, { Component } from "react";
import { Container, Button, Card } from "shards-react";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";

export default class Home extends Component {
  render() {
    return (
      <Container fluid className="main-content-container px-2 pb-4">
        <div style={{ textAlign: "center", display: "65vh" }}>
          <h1 className="display-2 pt-5">set state</h1>
          <br />
          <br />
          <h3 className="display-5 mt-3">UI Design | Web Development</h3>
          <br />
          <Button pill className="btn-lg mt-3">
            Contact
          </Button>
        </div>
        <br />
        <Services />
        <Projects />
        <About />
      </Container>
    );
  }
}
