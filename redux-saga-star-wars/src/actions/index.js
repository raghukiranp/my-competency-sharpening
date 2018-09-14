import * as TYPES from '../types'
import {call, put} from 'redux-saga/effects'

export const api = (url) => (
    fetch(url).then(response => response.json())
);
export const fetchStarWarsRequest = () => ({
    type: TYPES.FETCH_PEOPLE_REQUEST
});

export function*  fetchPerson(action) {
    try {
        const person = yield call(api, "https://swapi.co/api/people")

        yield put({
            type: TYPES.FETCH_PEOPLE_SUCCESS,
            response: person.results
        });
    } catch (e) {
        yield put({
            type: TYPES.FETCH_PEOPLE_ERROR,
            message: e.toLocaleString() || "Caught Error with fecthing Star Wars People"
        });
    }
}