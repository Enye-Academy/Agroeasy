import React, { Component } from 'react';
import { Col, Row, Container, Badge, Jumbotron, Button, 
ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../home.css';

//this the second on component anotherlist.js
class Row2 extends Component {
	render() {
		return (
                  <Container>
                          <Row>
                               <Col md={3}>
                <div className="details">
                  <img src='/images/poultry-chicken.jpg' alt="#" style={{width: '150px', height: '150px'}} />
                </div>
                                                                        &nbsp;&nbsp;&nbsp;
                <div className="details"><br />
                  <p>
                    <h6>Abu's farm &nbsp; &nbsp; <Badge color="light">#1,350</Badge></h6>
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
                  <img src='/images/greenBanana.jpeg' alt="#" style={{width: '150px', height: '150px'}} />
                </div>
                                                                       &nbsp;&nbsp;&nbsp;
                <div className="details"><br />
                  <p>
                    <h6>Banana &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Badge color="light">#500</Badge></h6>
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
                  <img src='/images/bagsofrice.jpg' alt="#" style={{width: '150px', height: '150px'}} />
               </div>
                                                                      &nbsp;&nbsp;&nbsp;
               <div className="details"><br />
                 <p>
                   <h6>Bags of rice &nbsp; <Badge color="light">#12,500</Badge></h6>
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
                  <img src='/images/Dry pepper.jpg'alt="#"  style={{width: '150px', height: '150px'}} />
               </div>
                                                                      &nbsp;&nbsp;&nbsp;
               <div className="details"><br />
                  <p>
                    <h6>Dry pepper &nbsp; &nbsp; <Badge color='light'>#4,500</Badge></h6>
                    <ButtonToolbar>
                   <ButtonGroup>
                     <Button color="primary" size="sm" active>Buy Now</Button>{' '}
                     <Button color="light" size="sm">More Info</Button>{' '}
                   </ButtonGroup>
                </ButtonToolbar>
                 </p>
               </div>
            </Col>
              </Row>
           </Container>
		);
	}
} 

export default Row2;