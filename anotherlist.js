import React from 'react';
import { Col, Row, Container, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import './home.css';
import { ProductsAvailable } from './constant';
import Popup from 'reactjs-popup';


/*
This is a component of varieties of products appearing
in no particular order
*/
class ListItems extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

    toggle() {
       this.setState({
        modal: !this.state.modal
    });
  }

 
  render() {
    return (
     <div>
        <Container>
           <h5 style={{textAlign: 'center'}}>
             <Link to={ProductsAvailable}>Products Available</Link>
           </h5>
           <Jumbotron className="show-products-available" style={{backgroundColor: 'white'}}>
              <Row>
                  <Col md={3}>
                     <div className="details">
                        <img src='/images/egg-crates.jpeg' alt="#" style={{width: '150px'}} /><br />
                        <b>Crates of Eggs</b><br />
                        <Button color="danger" onClick={this.toggle} style={{fontSize: "0.9em",lineHeight: '15px',backgroundColor: 'darkslateblue',
                           width: '150px'}}> Buy{this.props.buttonLabel}
                        </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.props.toggle}>Details</ModalHeader>
                            <ModalBody>
                               <figure>
                                 <img src='/images/egg-crates.jpeg' alt="#"  id="img" /><br />
                               </figure><hr />
                               <figurecaption className="details">
                                   <p>
                                     <b>Crates of Eggs</b><br />Location: Ihiagwa, Owerri, Imo State<br />Name:Abu poultry farm<br />
                                     Mobile: +2347064389280<br /><b>#1,500</b><br />
                                     Get 5% discount when you buy five crates or more.
                                   </p>
                               </figurecaption>
                           </ModalBody>
                           <ModalFooter>
                               <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                               <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                           </ModalFooter>
                        </Modal>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="details">
                       <img src='/images/Palm Oil.jpg' alt="#" style={{width: '150px'}} /><br />
                       <b>Palm Oil</b><br />
                       <Button color="danger" onClick={this.toggle} style={{fontSize: "0.9em",lineHeight: '15px',backgroundColor: 'darkslateblue',
                           width: '150px'}}> Buy{this.props.buttonLabel}
                       </Button>
                       <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
                         <ModalHeader toggle={this.toggle}>Details</ModalHeader>
                         <ModalBody>
                           <figure>
                             <img src='/images/Palm oil.jpg' alt="#"  id="img" /><br />
                           </figure><hr />
                           <figurecaption className="details">
                              <p>
                                <b>Crates of Eggs</b><br />Location: Ihiagwa, Owerri, Imo State<br />Name:Abu poultry farm<br />
                                     Mobile: +2347064389280<br /><b>#12,500</b><br />
                                     Get 5% discount when you buy five crates or more.
                              </p>
                            </figurecaption>
                         </ModalBody>
                         <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                         </ModalFooter>
                     </Modal>
                     </div>
                                                                    &nbsp;&nbsp;&nbsp;
                </Col>
                <Col md={3}>
                  <div className="details">
                      <img src='/images/onion-bags.jpg' alt="#" style={{width: '150px', height: '115px'}} /><br />
                      <b>Bags of Onions </b><br />
                      <Button color="danger" onClick={this.toggle} style={{fontSize: "0.9em",lineHeight: '15px',backgroundColor: 'darkslateblue',
                           width: '150px'}}> Buy{this.props.buttonLabel}
                      </Button>
                      <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
                     <ModalHeader toggle={this.toggle}>Details</ModalHeader>
                     <ModalBody>
                        <figure>
                          <img src='/images/onion-bags.jpg' alt="#" id="img" /><br />
                        </figure><hr />
                        <figurecaption className="details">
                            <p><b>Bags of onions</b><br />Location: Gurara, Niger State<br />Name:Abu poultry farm<br />
                              Mobile: +2347064389280<br /><b>#7,000</b><br />
                              Get 5% discount when you buy five crates or more.
                            </p>
                        </figurecaption>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
               </Modal>
               </div>
            </Col>
            <Col md={3}>
               <div className="details">
                 <img src='/images/Groundnut Oil.jpeg' alt="#" style={{width: '150px', height: '120px'}} />
               </div>
                                                                         &nbsp;&nbsp;&nbsp;
               <div className="details">
                  <p>
                    <b>Heritage vegetable Oil</b><br />Location: Ikeja, Lagos<br />Name: Shoperite<br />#1,500 per keg
                  </p>
               </div>
            </Col>
          </Row>
                   <br />
          <Row>
             <Col md={3}>
                <div className="details">
                  <img src='/images/poultry-chicken.jpg' alt="#" style={{width: '150px'}} />
                </div>
                                                                        &nbsp;&nbsp;&nbsp;
                <div className="details">
                  <p>
                    <b>Abu poultry farm</b><br />Location: Lagos<br />Name: My Store<br />#1,350
                  </p>
                </div>
             </Col>
             <Col md={3}>
                <div className="details">
                  <img src='/images/greenBanana.jpeg' alt="#" style={{width: '150px', height: '100px'}} />
                </div>
                                                                       &nbsp;&nbsp;&nbsp;
                <div className="details">
                  <p>
                    <b>Banana</b><br />Location: Lagos<br />Name: My Store<br />#500 / bunch
                  </p>
                </div>
             </Col>
             <Col md={3}>
               <div className="details">
                  <img src='/images/bagsofrice.jpg' alt="#" style={{width: '150px', height: '100px'}} />
               </div>
                                                                      &nbsp;&nbsp;&nbsp;
               <div className="details">
                 <p>
                   <b>Bags of rice</b><br />Location: Lagos<br />Name: My Store<br />#12,500 per bag
                 </p>
               </div>
             </Col>
             <Col md={3}>
               <div className="details">
                  <img src='/images/Dry pepper.jpg'alt="#"  style={{width: '150px', height: '100px'}} />
               </div>
                                                                      &nbsp;&nbsp;&nbsp;
               <div className="details">
                  <p>
                    <b>Dry pepper</b><br />Location: Agbara, Lagos<br />Name: My Store<br />#4,500 per basket
                 </p>
               </div>
            </Col>
        </Row>
                <br />
        <Row>
            <Col md={3}>
              <div className="details">
                <img src='/images/lettuse.jpg' alt="#" style={{width: '150px'}} />
              </div>
                                                                         &nbsp;&nbsp;&nbsp;
              <div className="details">
                <p>
                  <b>Lettuses</b><br />Location: Lagos<br />Name: My Store<br />#950
                </p>
              </div>
            </Col>
           <Col md={3}>
             <div className="details">
                <img src='/images/pigfarm.jpg' alt="#" style={{width: '155px', height: '115px'}} />
             </div>
                                                                         &nbsp;&nbsp;&nbsp;
             <div className="details">
                <p>
                  <b>Pig farm</b><br />Location: Lagos<br />Name: My Store<br />#11,500
                </p>
             </div>
          </Col>
          <Col md={3}>
            <div className="details">
              <img src='/images/carrot.jpg' alt="#" style={{width: '150px', height: '115px'}} />
            </div>
                                                                       &nbsp;&nbsp;&nbsp;
            <div className="details">
              <p>
                 <b>Carrots</b><br />Location: Lagos<br />Name: My Store<br />#4,500 per bunch
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="details">
              <img src='/images/poultry.jpg' alt="#" style={{width: '150px', height: '100px'}} />
            </div>
                                                                     &nbsp;&nbsp;&nbsp;
            <div className="details">
              <p>
                <b>Poultry farm</b><br />Location: Owerri<br />Name: My Store<br />#1,250
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="details">
              <img src='/images/tomtoes.jpg' alt="#" style={{width: '150px', height: '115px'}} />
            </div>
                                                                   &nbsp;&nbsp;&nbsp;
            <div className="details">
              <p>
                <b>Tomatoes</b><br />Location: Lagos<br />Name: My Store<br />#4,599 per basket
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="details">
              <img src='/images/beans.jpg'alt="#"  style={{width: '155px', height: '115px'}} />
            </div>
                                                                       &nbsp;&nbsp;&nbsp;
            <div className="details">
              <p>
                <b>Maize</b><br />Location: Gurara, Niger State<br />Name: My Store<br />#11,500
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="details">
              <img src='/images/ogbono.jpg' alt="#" style={{width: '150px', height: '115px'}} />
            </div>
                                                                      &nbsp;&nbsp;&nbsp;
            <div className="details">
              <p>
                <b>Docanut(Ogbono)</b><br />Location: Idumota, Lagos State<br />Name: My Store<br />#2,500
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="details">
              <img src='/images/ripeBanana.jpg' alt="banana" style={{width: '150px', height: '100px'}} /><br /><br />
              <Popup trigger={<button>Trigger</button>}>
              <div style={{background: 'whitesmoke'}}>
                <p>
                  <b>Ripe Bananas</b><hr />Location: Ore, Ondo State<br />Name: My Store<br />#1,250
                </p>
              </div>
              </Popup>
            </div> <br />
                                                                     &nbsp;&nbsp;&nbsp;
            <div className="details">
                                  
            </div>
          </Col>
        </Row>
               <div className="link-to-more">
                   <Link to='/more-products/'>
                       More
                   </Link>
               </div>
     </Jumbotron>
  </Container>
 </div>
    );
  }
}

   

export default ListItems;
