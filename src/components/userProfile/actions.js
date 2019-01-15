import { 
    FETCH_USER_DATA,
    REQUEST_USER_DATA, 
    REQUEST_USER_FAILURE, 
    UPDATE_USER_DATA, 
    UPDATE_FAILURE 
} from './actionTypes';

export const requestUserData = () => ({
    type: REQUEST_USER_DATA,
});

export const fetchUserData = data => ({
    data,
    type: FETCH_USER_DATA,
});

export const fetchUserFailure = error => ({
    error,
    type: REQUEST_USER_FAILURE,
});

export const updateUserData = data => ({
    data,
    type: UPDATE_USER_DATA,
});

export const updateUserFailure = error => ({
    error,
    type: UPDATE_FAILURE,
});
