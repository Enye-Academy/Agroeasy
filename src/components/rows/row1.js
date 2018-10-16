import React, { Component } from 'react';
import { Col, Row, Container, Badge, Jumbotron, Button, 
ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Eggcrates, Palmoil, Onionbag } from "../constant";
import '../home.css';

//this the first on component anotherlist.js
class Row1 extends Component {
	render() {
		return (
                 <Container>
                       <Row>
                              <Col md={3}>
                     <div className="details">
                        <img src='/images/egg-crates.jpeg' alt="#" style={{width: '150px', height: '150px'}} /><br />
                    </div>
                                   &nbsp;&nbsp;&nbsp;
                    <div className="details"><br />
                       <p>
                           <h6>Egg crates  &nbsp; &nbsp; &nbsp; <Badge color="secondary">#1,200</Badge></h6>
                           <ButtonToolbar>
                           <ButtonGroup>
                             <Button color="primary" size="sm" active>Buy Now</Button>{' '}
                             <Link to={Eggcrates}><Button color="light" size="sm">More Info</Button>{' '}</Link>
                          </ButtonGroup>
                       </ButtonToolbar>
                       </p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="details">
                       <img src='/images/Palm Oil.jpg' alt="#" style={{width: '150px', height: '150px'}} /><br />
                    </div>
                                 &nbsp;&nbsp;&nbsp;
                    <div className="details"><br />
                      <p>
                        <h6>Palm Oil &nbsp; &nbsp; &nbsp; &nbsp; <Badge color="light">#9,500</Badge></h6>
                        <ButtonToolbar>
                           <ButtonGroup>
                             <Button color="primary" size="sm" active>Buy Now</Button>{' '}
                             <Link to={Palmoil}><Button color="light" size="sm">More Info</Button>{' '}</Link>
                          </ButtonGroup>
                       </ButtonToolbar>
                     </p>
                    </div>
                </Col>
                <Col md={3}>
                  <div className="details">
                      <img src='/images/onion-bags.jpg' alt="#" style={{width: '150px', height: '150px'}} /><br />         
               </div>
                          &nbsp;&nbsp;&nbsp;
                <div className="details"><br />
                     <p>
                        <h6>Bags of Onions <Badge color="light">#1,500</Badge></h6>
                    <ButtonToolbar>
                   <ButtonGroup>
                     <Button color="primary" size="sm" active>Buy Now</Button>{' '}
                     <Link to={Onionbag}><Button color="light" size="sm">More Info</Button>{' '}</Link>
                   </ButtonGroup>
                </ButtonToolbar>
                     </p>
                </div>     
            </Col>
            <Col md={3}>
               <div className="details">
                 <img src='/images/Groundnut Oil.jpeg' alt="#" style={{width: '150px', height: '150px'}} />
               </div>
                               &nbsp;&nbsp;&nbsp;
               <div className="details"><br />
                  <p>
                    <h6>Vegetable Oil <Badge color="light">#1,500</Badge></h6>
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

export default Row1;