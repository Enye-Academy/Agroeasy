import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index';
import { createStore, applyMiddleware  } from "redux";


export default function configureStore(initialState) {

  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(reducer, initialState, applyMiddleware(/* other middleware,if any, for later use */sagaMiddleware)),
    runSaga: sagaMiddleware.run
  };
}
