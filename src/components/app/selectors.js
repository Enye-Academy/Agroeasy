import { NAME } from './constants';

/**
 * Selects the <tt>siginStatus</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state status of the signin
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getSiginStatus = state => state[NAME].siginStatus;

/**
 * Selects the <tt>sigintData</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state data of the signin which contains user and token
 * {@link module:signin/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getSiginData = state => state[NAME].signinData;

/**
 * Selects the <tt>signupStatus</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state status of the signup
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getSignupStatus = state => state[NAME].signupStatus;

/**
 * Selects the <tt>signupData</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Object} the state data of the signup which contains title message
 * {@link module:app/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getSignupData = state => state[NAME].signupData;
