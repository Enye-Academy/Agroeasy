import { SET_COOKIE, REMOVE_COOKIE, SIGNUP_SUCCESS, RESET_STATE } from './actionTypes';

/**
 * Triggers request to set cookie
 *
 * @function
 * @params {String} payload - The data passed into the the action
 * @return {Object} The {@link actionTypes.SET_COOKIE SET_COOKIE} action.
 */
export const setCookie = payload => ({
    payload,
    type: SET_COOKIE,
});

/**
 * Triggers request to remove cookie
 *
 * @function
 * @return {Object} - The {@link actionTypes.REMOVE_COOKIE REMOVE_COOKIE} action.
 */
export const removeCookie = () => ({
    type: REMOVE_COOKIE,
});

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @param {Object} payload An object containing signup status (success or failure) provided 
 * the endpoint is reachable
 * @return {Object} The {@link actionTypes.SIGNUP_SUCCESS SIGNUP_SUCCESS} action.
 */
export const signupSuccess = payload => ({
    payload,
    type: SIGNUP_SUCCESS,
});

/**
 * Triggers request to reset redux state to initial
 *
 * @function
 * @return {void} The {@link actionTypes.RESET_STATE RESET_STATE} action.
 */
export const resetSigninState = () => ({
    type: RESET_STATE,
});
