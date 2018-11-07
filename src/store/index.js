import { createStore, applyMiddleware  } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";

import rootSaga from '../sagas/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store with reducers and create
// mount it on the Store 
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
 
// then run the saga
sagaMiddleware.run(rootSaga);