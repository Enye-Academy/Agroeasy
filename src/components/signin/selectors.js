import { NAME } from './constants';

/**
 * Selects the <tt>isLoading</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state status of the signin
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getIsLoading = state => state[NAME].isLoading;

/**
 * Selects the <tt>message</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state message of signin if failed
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getSigninfailureMessage = state => state[NAME].message;

/**
 * Selects the <tt>status</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {string} the state status of the signin
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getSigninStatus = state => state[NAME].status;
