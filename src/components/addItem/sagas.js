import { effects } from 'redux-saga';

import { REQUEST_PRODUCT_LIST } from './actionTypes';
import { getFakeData } from './selectors';
import { updateProductList } from './actions';

/**
 * Handles requesting the list of producer items
 *
 * @return {Void} - void
 */
function* requestProducersItems(){
    try {
        // TODO: connect saga generator to backend api
        // for now use fake data
        const productList = yield effects.select(getFakeData);
        yield effects.put(updateProductList(productList));
    } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_PRODUCT_LIST REQUEST_PRODUCT_LIST} action.
 * Triggers request to pull the products list of items
 *
 * @return {void}
 */
function* watchRequestProductList(){
    try {
        yield effects.takeLatest(REQUEST_PRODUCT_LIST, requestProducersItems);
    } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* (){
    yield effects.all([
        watchRequestProductList(),
    ]);
}
