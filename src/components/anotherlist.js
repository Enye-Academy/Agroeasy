import React from 'react';
import { Col, Row, Container, Jumbotron } from 'reactstrap';
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
  render() {
    return (
        <Container fluid>
           <Jumbotron className="show-products-available" style={{backgroundColor: 'white'}}>
             <Row>
                <Col md={4}></Col> 
               <Col md={8}>
                  <div style={{ marginTop: '25px'}}>
                        <h6 style={{textAlign: 'center', marginTop: "-8%", marginBottom: "-8px"}}>
                          <Link to={ProductsAvailable}>Products Available</Link>
                        </h6>
                 </div>
                       <br />
                       <Row>
                         <Row1 />
                       </Row>
                       <br />
                       <Row>
                         <Row2/>
                       </Row>
                       <br />
                       <Row>
                         <Row3 />
                       </Row>
                       <br />
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
 
    );
  }
}



export default ListItems;
