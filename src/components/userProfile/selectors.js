import { NAME } from './constants';
/**
 * Selects the <tt>message</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state of the signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getUserData = state => state[NAME].userInfo;
