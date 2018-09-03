// import {v4} from 'node-uuid';
import * as api from '../api';
import {getIsFetching} from "../reducers/todos";

/**
 *  Refactored to object Expression to return the addTodo
 * @param text
 * @returns {{type: string, id: number, text: *}}
 */
/*
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});
*/

/*
const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter,
});

const receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response
});
*/


export const addTodo = (text) => (dispatch) =>
    api.addTodo(text).then(response => {
        dispatch({
            type: 'ADD_TODO_SUCCESS',
            response
        });
    });


export const toggleTodo = (id) => (dispatch) =>
    api.toggleTodo(id).then(response => {
        dispatch({
            type: 'TOGGLE_TODO_SUCCESS',
            response
        })
    });

export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }
    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter,
    });

    return api.fetchTodos(filter).then(
        response => {
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response
            });
        },
        error => {
            dispatch({
                type: 'FETCH_TODOS_FAILURE',
                filter,
                message: error.message || "Oops doopsie, something went wrong, We are working on it!"
            });
        }
    );
};
