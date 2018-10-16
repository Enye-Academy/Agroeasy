import React from 'react';

class Action extends Component {
	render() {
		return (
               increaseCounter() { dispatch({ type: 'INCREASE_COUNTER', value: 20 }); },   
               decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
               multiplyCounter: () => dispatch({type: 'MULTIPLY_COUNTER'}),
               squareRootCounter: () => dispatch({type: 'SQUARE_ROOT'})
			);
	}
}