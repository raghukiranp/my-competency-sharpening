import * as TYPES from '../types';

export const peopleList = (state = [], action) => {
    switch (action.type) {
        case TYPES.FETCH_PEOPLE_REQUEST:
            return state;
        case TYPES.FETCH_PEOPLE_SUCCESS:
            const nextState = [...state];
            action.response.forEach((person, i) => {
                nextState[i] = person;
            });
            return nextState;
        case TYPES.FETCH_PEOPLE_ERROR:
            return state;
        default:
            return state;
    }
};

export const isFetching = (state = false, action) => {
    switch (action.type) {
        case TYPES.FETCH_PEOPLE_REQUEST:
            return true;
        case TYPES.FETCH_PEOPLE_SUCCESS:
        case TYPES.FETCH_PEOPLE_ERROR:
            return false;
        default:
            return state;
    }
};

export const errorMessage = (state = null, action) => {
    switch (action.type) {
        case TYPES.FETCH_PEOPLE_ERROR:
            return action.message;
        case TYPES.FETCH_PEOPLE_SUCCESS:
        case TYPES.FETCH_PEOPLE_REQUEST:
            return null;
        default:
            return state;
    }
};


export const getPeopleList = (state) => state.peopleList;

export const getIsFetching = (state) => state.isFetching;

export const getErrorMessage = (state) => state.errorMessage;