import React, { Component } from "react";
import Details from "./about/Details";
import { Row, Col } from "shards-react";

export class About extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="mt-5">About</h4>
        <Row>
          <Col lg="4" className="mt-3">
            <Details />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default About;
