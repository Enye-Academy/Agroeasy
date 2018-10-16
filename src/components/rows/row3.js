import React, { Component } from 'react';
import { Col, Row, Container, Badge, Jumbotron, Button, 
ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../home.css';


//this is role number-3 for items on anothrlist.js
class Row3 extends Component {
	render() {
		return (
                 <Container>
                    <Row>
                       <Col md={3}>
                         <div className="details">
                           <img src='/images/lettuse.jpg' alt="#" style={{width: '150px', height: '150px'}} />
                         </div>
                                                                         &nbsp;&nbsp;&nbsp;
                         <div className="details"><br />
                         <p>
                           <h6>Lettuses &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Badge color="light">#950</Badge></h6>
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
                <img src='/images/pigfarm.jpg' alt="#" style={{width: '155px', height: '150px'}} />
             </div>
                                                                         &nbsp;&nbsp;&nbsp;
             <div className="details"><br />
                <p>
                  <h6>Pig farm &nbsp; &nbsp; &nbsp; <Badge color="light">#11,500</Badge></h6>
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
              <img src='/images/carrot.jpg' alt="#" style={{width: '150px', height: '150px'}} />
            </div>
                                                                       &nbsp;&nbsp;&nbsp;
            <div className="details"><br />
              <p>
                 <h6>Carrots &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Badge color="light">#4,500</Badge></h6>
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
              <img src='/images/poultry.jpg' alt="#" style={{width: '150px', height: '150px'}} />
            </div>
                                                                     &nbsp;&nbsp;&nbsp;
            <div className="details"><br />
              <p>
                <h6>Poultry farm &nbsp; <Badge color="light">#1,250</Badge></h6>
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
export default Row3;