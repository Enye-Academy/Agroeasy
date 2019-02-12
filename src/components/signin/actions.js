import { SIGNIN_REQUEST } from './actionTypes';

/**
 * Triggers request to sign in a user
 *
 * @function
 * @param {Object} payload An object of user signin details captured from body
 * @return {Object} The {@link actionTypes.SIGNIN_REQUEST SIGNIN_REQUEST} action.
 */
export const signinRequest = payload => ({
    payload,
    type: SIGNIN_REQUEST,
});
