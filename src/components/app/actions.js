import { RESET_STATE, SIGNIN_SUCCESS } from './actionTypes';

/**
 * Triggers request to update redux store on success
 *
 * @function
 * @param {Object} payload An object containing signin status and data 
 * returned from siginn endpoint
 * @return {Object} The {@link actionTypes.SIGNIN_SUCCESS SIGNIN_SUCCESS} action.
 */
export const signinSuccess = payload => ({
    payload,
    type: SIGNIN_SUCCESS,
});

/**
 * Triggers request to reset redux state to initial
 *
 * @function
 * @return {void} The {@link actionTypes.RESET_STATE RESET_STATE} action.
 */
export const resetSignState = () => ({
    type: RESET_STATE,
});
