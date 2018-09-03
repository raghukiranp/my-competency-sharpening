import * as TYPES from '../types'
import {call, put} from 'redux-saga/effects'

export const api = (url) => (
    fetch(url).then(response => response.json())
);
export const fetchStarwarsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST
});

export function* fetchPerson(action) {
    try {
        const person = yield call(api, "https://swapi.co/api/people")

        yield put({
            type: TYPES.FETCH_STAR_WARS_SUCCESS,
            data: person.results
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: TYPES.FETCH_STAR_WARS_ERROR,
            error: e.json()
        });
    }
}