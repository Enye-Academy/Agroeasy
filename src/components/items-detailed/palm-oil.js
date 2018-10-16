import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, Container, Row, Col,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Home } from "../constant";
import '../home.css'

const Palmoil = (props) => {
  return (
    <Container>
          <Row>
               <Col>
                   <Card>
                      <CardImg top width="100%" src="#" alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Crates of Eggs</CardTitle>
                        <CardSubtitle>Details</CardSubtitle>
                        <CardText className="Details">
                          <p>
                             <b>guuh</b>
                          </p>
                        </CardText>
                        <Button size="sm" color="danger" >Buy Now</Button>
                        <Link to={Home}><Button size="sm">Back</Button></Link>
                     </CardBody>
                  </Card>
               </Col>
          </Row>
    </Container>
  );
};

export default Palmoil;