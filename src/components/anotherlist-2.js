import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './home.css';
import Counterlist from './anotherlist';


const initialState = {
  modal: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MODAL1':
            return { modal: !state.modal }
    }
    return state
}

const store = createStore(reducer);
/*
This is a component of varieties of products appearing
in no particular order
*/
class AnotherList extends React.Component {
  
  render() {
    return (
            <Provider store={store}>
               <Counterlist />
            </Provider>
    );
  }
}

export default AnotherList;
