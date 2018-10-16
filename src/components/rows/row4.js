import React, { Component } from 'react';
import { Col, Row, Container, Badge, Jumbotron, Button, 
ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../home.css';

class Rowfour extends Component {
	render () {
		return (
                <Container>
                       <Row>
                             <Col md={3}>
            <div className="details">
              <img src='/images/tomtoes.jpg' alt="#" style={{width: '150px', height: '150px'}} />
            </div>
                                                                   &nbsp;&nbsp;&nbsp;
            <div className="details"><br />
              <p>
                <h6>Tomatoes &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <Badge color="light">#4,500</Badge></h6>
                <ButtonToolbar>
                   <ButtonGroup>
                     <Button color="primary" size="sm" active>Buy Now</Button>{' '}
                     <Button color="light" size="sm">More Info</Button>{' '}
                   </ButtonGroup>
                </ButtonToolbar>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="details">
              <img src='/images/beans.jpg'alt="#"  style={{width: '155px', height: '150px'}} />
            </div>
                                                                       &nbsp;&nbsp;&nbsp;
            <div className="details"><br />
              <p>
                <h6 >Maize &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Badge color="light">#11,500</Badge></h6>
                <ButtonToolbar>
                   <ButtonGroup>
                     <Button color="primary" size="sm" active>Buy Now</Button>{' '}
                     <Button color="light" size="sm">More Info</Button>{' '}
                   </ButtonGroup>
                </ButtonToolbar>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="details">
              <img src='/images/ogbono.jpg' alt="#" style={{width: '150px', height: '150px'}} />
            </div>
                                                                      &nbsp;&nbsp;&nbsp;
            <div className="details"><br />
              <p>
                <h6>Docanut &nbsp; &nbsp; &nbsp; &nbsp; <Badge color="light">#2,500</Badge></h6>
              <ButtonToolbar>
                   <ButtonGroup>
                     <Button color="primary" size="sm" active>Buy Now</Button>{' '}
                     <Button color="light" size="sm">More Info</Button>{' '}
                   </ButtonGroup>
                </ButtonToolbar>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="details">
             <div>
              <img src='/images/ripeBanana.jpg' alt="142*100" style={{width: '150px', height: '150px', display: 'block'}} />
              </div><br />
              <div>
                <p>
                  <h6>Ripe banana &nbsp; <Badge color="light">#1,250</Badge></h6>
                <ButtonToolbar>
                   <ButtonGroup>
                     <Button color="primary" size="sm" active>Buy Now</Button>{' '}
                     <Button color="light" size="sm">More Info</Button>{' '}
                   </ButtonGroup>
                </ButtonToolbar>
              </p>
              </div>
              
            </div> <br />
                                &nbsp;&nbsp;&nbsp;
          </Col>
        </Row>
                </Container> 
		);
	}
}

export default Rowfour;