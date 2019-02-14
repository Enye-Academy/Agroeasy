import { NAME } from './constants';

/**
 * Selects the <tt>isLoading</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the loading status of the signin state
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getIsLoading = state => state[NAME].isLoading;
