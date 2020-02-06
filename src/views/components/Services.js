import React, { Component } from 'react';
import { Container, Button, Row, Col, Card, CardBody, CardTitle, CardHeader, CardImg, CardFooter } from "shards-react";

export class Services extends Component {
  render() {
    return (
    <React.Fragment>
      <h4 className='mt-5'>Services</h4> 
        <Row>    
          <Col lg="6" sm="12" className='mt-3'>
            <Card>     
              <CardBody>
                <CardTitle>
                  <i className="far fa-eye fa-2x"> UI Design</i>
                </CardTitle>
                  <p className="lead">
                    A web application's usability is measured by the extent to which its intended usecase is achieved. A good user interface facilitates seemless user interaction without drawing unnecessary attention to itself. Chamai Dev Studio is dedicated to creating great UIs that are tailored to your needs and built according to your specifications.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" sm="12" className='mt-3'>
              <Card>
                <CardBody>
                  <CardTitle>
                    <i className="far fa-file-code fa-2x"> Web Development</i>
                  </CardTitle>
                  <p className="lead">
                  Writing markup and coding: the main non-design aspects of building web applications. Chamai Dev Studio utilizes technologies such as HTML, CSS, JavaScript, React and other libraries to develop efficient web applications that meet industry standards. Get in touch to learn more about how to get started with your own.
                  
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </React.Fragment>
    )
  }
}

export default Services
