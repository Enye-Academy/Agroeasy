import { effects } from 'redux-saga';
import {  REQUEST_USER_DATA } from './actionTypes';
import { USER_DATA_URL } from './constants';
import { fetchUserData, fetchUserFailure } from './actions';

function* getUserData(){
    try {
        const response = yield fetch(USER_DATA_URL, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
        if(response.ok){
            const data = yield response.json();
            console.log(data);
            yield effects.put(fetchUserData(data));
        }
    } catch(error){
        yield effects.put(fetchUserFailure(error));
        console.log(error);
    }
}

function* watchfetchUserData(){
    try {
        yield effects.takeLatest(REQUEST_USER_DATA, getUserData);
    } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* (){
    yield effects.all([
        watchfetchUserData(),
    ]);
}
