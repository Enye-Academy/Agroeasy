import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';


class CounterApp extends Component {
  

render() {
  return(
       <div>
          <h4 style={{color: 'black'}}>{this.props.counter}</h4>
          <Button color='danger' onClick={()=>this.props.increaseCounter()}>Increase</Button>&nbsp;&nbsp;
          <Button color='primary' onClick={()=>this.props.decreaseCounter()}>decrease</Button>&nbsp;&nbsp;
          <Button color='success' onClick={()=>this.props.multiplyCounter()}>Multiply</Button>&nbsp;&nbsp;
          <Button color='dark' onClick={()=>this.props.squareRootCounter()}>Double</Button>
       </div>
   );
 }
}


function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter() { dispatch({ type: 'INCREASE_COUNTER'}); },   
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
        multiplyCounter: () => dispatch({type: 'MULTIPLY_COUNTER'}),
        squareRootCounter: () => dispatch({type: 'SQUARE_ROOT'})
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)
