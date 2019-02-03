import { REQUEST_PRODUCT_LIST, UPDATE_PRODUCT_DETAILS } from './actionTypes';

/**
 * Triggers request to update product item details
 *
 * @function
 * @return {Object} The {@link actionTypes.UPDATE_PRODUCT_DETAILS UPDATE_PRODUCT_DETAILS}
 * action.
 */
export const requestProductList = () => ({
    type: REQUEST_PRODUCT_LIST,
});

/**
 * Triggers request to update product item details
 *
 * @function
 * @return {Object} The {@link actionTypes.UPDATE_PRODUCT_DETAILS UPDATE_PRODUCT_DETAILS}
 * action.
 */
export const updateProductDetails = payload => ({
    payload,
    type: UPDATE_PRODUCT_DETAILS,
});

/**
 * Triggers request to update product item details
 *
 * @function
 * @return {Object} The {@link actionTypes.UPDATE_PRODUCT_DETAILS UPDATE_PRODUCT_DETAILS}
 * action.
 */
export const updateProductList = () => ({
    type: REQUEST_PRODUCT_LIST,
});
