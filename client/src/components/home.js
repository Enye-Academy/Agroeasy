import React from 'react';
import { InputGroup, InputGroupAddon, Jumbotron, Col,
         Button, Input, Row, Container
} from 'reactstrap';
import './home.css';
import Footer from './footer';
import Navibar from './Navibar';
import AnotherList from './anotherlist';

/*
this is the home page, where sub-components (the Navibar, AnotherList and footer components)
are exported to and displayed
*/
 class Home extends React.Component {
    render() {
        return (
            <div>
                  <Jumbotron className="bg-img">
                            <Navibar />
                        <Row style ={{marginTop:'100px'}}>
                           <Col md="12">
                                <h1> Welcome Guest</h1>
                                <h4> Make us your distributor and we will tell the world about your business.</h4>
                                <p style={{textAlign: 'center'}}>
                                    <h4> Dear customer, we make sure you get a discount anytime you patronize us.
                                         Give us a try.
                                    </h4>
                                 </p>
                          </Col>
                       </Row>
                       <br/><br/>
                       <Container style={{width: '550px', textAlign: 'center'}}>
                             <InputGroup>
                                  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                  <Input placeholder="search" />
                                  <Button onClick={this.search}>Ok</Button>
                             </InputGroup>
                       </Container>
                   </Jumbotron>
                   <AnotherList />
                   <hr />
                   <Footer />
            </div>

        );
    }
}
export default Home;
