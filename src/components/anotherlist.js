import React from 'react';
import { Col, Row, Container, Badge, Jumbotron, Button, 
ButtonGroup, ButtonToolbar, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import './home.css';
import { ProductsAvailable } from './constant';
import Row4 from './rows/row4';
import Row3 from './rows/row3';
import Row2 from './rows/row2';
import Row1 from './rows/row1';

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
        <Container fluid>
           <h5 style={{textAlign: 'center'}}>
             <Link to={ProductsAvailable}>Products Available</Link>
           </h5>
           <Jumbotron className="show-products-available" style={{backgroundColor: 'white'}}>
             <Row>
                 <Col md={3}>
                     <div> 
                         <form></form>
                     </div>
                 </Col>
               <Col md={9}>
                     <Row>
                        <Row1 />
                     </Row>
                 <br /><br />
                    <Row>
                       <Row2 />
                    </Row>
                <br /><br />
                    <Row>
                       <Row3 /> 
                    </Row>
               <br /><br />
                    <Row>
                       <Row4 />
                    </Row>
         
               <div className="link-to-more">
                   <Link to='/more-products/'>
                       More
                   </Link>
               </div>
            </Col>
         </Row>
      </Jumbotron>
     </Container>
 </div>
    );
  }
}

   

export default ListItems;
