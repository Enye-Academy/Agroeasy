import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CounterApp from './countApp';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case  'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
        case 'MULTIPLY_COUNTER':
            return {counter: state.counter+1 * 2}
        case 'SQUARE_ROOT':        
            return {counter: state.counter}
    }
    return state;
}

const store = createStore(reducer)


class MyCount extends Component {
render() {
  return(
         <Provider store={store}>
           <CounterApp />
         </Provider>
   );
 }
}

export default MyCount;