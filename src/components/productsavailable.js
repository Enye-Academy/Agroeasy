import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import './home.css';
import Spices from './stuffs/spices';
import FoodItems from './stuffs/fooditems';
import Livestockpoultry from './stuffs/livestockpoultry';
import FruitsAndVegetables from './stuffs/fruitandvegetables';

/*
List of items according to groups
*/
export default class ProductsAvailable extends Component {
       render() {
         return (
                 <Container>
                       <Row>
                            <Col className="items" md={3}>
                                 <FoodItems />
                            </Col>
                            <Col className="items" md={3}>
                                <Livestockpoultry /> 
                            </Col>
                            <Col className="items" md={3}>
                                 <FruitsAndVegetables />
                            </Col>
                            <Col className="items" md={3}>
                                 <Spices />
                            </Col>
                       </Row>
                 </Container>
         );
       }
}
