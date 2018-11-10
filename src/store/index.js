import configureStore from './configureStore';
import producerSaga from '../sagas/producer.saga';


const store = configureStore();
store.runSaga(producerSaga);

export default store;