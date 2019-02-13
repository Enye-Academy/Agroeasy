import {  SIGNUP_REQUEST } from './actionTypes';

/**
 * Triggers request to sign up the user
 *
 * @function
 * @param {Object} payload An object of user details captured from body
 * @return {Object} The {@link actionTypes.SIGNUP_REQUEST SIGNUP_REQUEST} action.
 */
export const signupRequest = payload => ({
    payload,
    type: SIGNUP_REQUEST,
});
