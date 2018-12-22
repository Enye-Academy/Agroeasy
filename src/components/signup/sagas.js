import { effects } from 'redux-saga';
import {  SIGNUP_REQUEST } from './actionTypes';
import { SIGNUP_URL } from './constants';
import { signupSuccess, signupFailure } from './actions';

/**
 * Makes a request to sign up a user
 *
 * @param {object} [action] The data passed from the watcher generator
 *
 * @return {object} An object containing either "data" or "error"
 */
function* signupUser(action) {
    try {
        const { user } = action;
        const response = yield fetch(SIGNUP_URL, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        if(response.ok){
            const data = yield response.json();
            yield effects.put(signupSuccess(data));
        }
    } catch (error) {
        yield effects.put(signupFailure(error));
    } 
}

/**
 * @function
 * Watches for the {@link actionTypes.SIGNUP_REQUEST SIGNUP_REQUEST} action.
 * Triggers signupUser
 *
 * @return {void}
 */
function* watchSignupUser() {
    try {
        yield effects.takeEvery(SIGNUP_REQUEST, signupUser);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(Error);
    }
}

export default function* () {
    yield effects.all([
        watchSignupUser(),
    ]);
}
