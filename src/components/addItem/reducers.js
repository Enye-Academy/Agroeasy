import { REQUEST_PRODUCT_LIST, UPDATE_PRODUCT_DETAILS } from './actionTypes';
import { INITIAL_STATE } from './constants';

export default (state = { ...INITIAL_STATE }, action ) => {
    switch (action.type) {
    case REQUEST_PRODUCT_LIST:
        return {
            ...state,
            isSending: true,
        };
    case UPDATE_PRODUCT_DETAILS:
        return {
            ...state,
            isSending: true,
        };
    default:
        return state;
    }
};
