import React, { Component } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardFooter
} from "shards-react";

export class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="mt-5">Projects</h4>
        <Row>
          <Col lg="4" sm="12" className="mt-3">
            <Card>
              <CardImg src="https://place-hold.it/300x200" />
              <CardBody>
                <CardTitle>Project Name</CardTitle>
                <p>Project Description</p>
                <Button>View project &rarr;</Button>
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>
          <Col lg="4" sm="12" className="mt-3">
            <Card>
              <CardImg src="https://place-hold.it/300x200" />
              <CardBody>
                <CardTitle>Project Name</CardTitle>
                <p>Project Description</p>
                <Button>View project &rarr;</Button>
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>
          <Col lg="4" sm="12" className="mt-3">
            <Card>
              <CardImg src="https://place-hold.it/300x200" />
              <CardBody>
                <CardTitle>Project Name</CardTitle>
                <p>Project Description</p>
                <Button>View project &rarr;</Button>
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>
          <Col lg="4" sm="12" className="mt-3">
            <Card>
              <CardImg src="https://place-hold.it/300x200" />
              <CardBody>
                <CardTitle>Project Name</CardTitle>
                <p>Project Description</p>
                <Button>View project &rarr;</Button>
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>
          <Col lg="4" sm="12" className="mt-3">
            <Card>
              <CardImg src="https://place-hold.it/300x200" />
              <CardBody>
                <CardTitle>Project Name</CardTitle>
                <p>Project Description</p>
                <Button>View project &rarr;</Button>
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>
          <Col lg="4" sm="12" className="mt-3">
            <Card>
              <CardImg src="https://place-hold.it/300x200" />
              <CardBody>
                <CardTitle>Project Name</CardTitle>
                <p>Project Description</p>
                <Button>View project &rarr;</Button>
              </CardBody>
              <CardFooter>Card footer</CardFooter>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Projects;
