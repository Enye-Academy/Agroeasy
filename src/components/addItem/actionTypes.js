import { NAME } from './constants';

/**
 * Fired by the {@link actions.requestProductList requestProductList}
 * action creator.
 *
 * @type {String}
 */
export const REQUEST_PRODUCT_LIST = `${NAME}/REQUEST_PRODUCT_LIST`;

/**
 * Fired by the {@link actions.updateProductDetails updateProductDetails}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_PRODUCT_DETAILS = `${NAME}/UPDATE_PRODUCT_DETAILS`;

/**
 * Fired by the {@link actions.updateProductList updateProductList}
 * action creator.
 *
 * @type {String}
 */
export const UPDATE_PRODUCT_LIST = `${NAME}/UPDATE_PRODUCT_LIST`;
