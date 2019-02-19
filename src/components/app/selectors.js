import { NAME } from './constants';
/**
 * Selects the <tt>isLoggedIn</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state of the signout
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getLoginStatus = state => state[NAME].isLoggedIn;

/**
 * Selects the <tt>user</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state data of the signin which contains user and token
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getUserData = state => state[NAME].user;

/**
 * Selects the <tt>status</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state of the signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getSignUpStatus = state =>  state[NAME].status;

/**
 * Selects the <tt>message</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state of the signup
 * {@link module:signup/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getSignUpMessage = state => state[NAME].message;
