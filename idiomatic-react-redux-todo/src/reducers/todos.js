import { combineReducers } from 'redux';
//import todo from './todo'
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

/**
 * Todo's list reducer,
 *
 * To be renamed to ById in future
 * @param state
 * @param action
 * @returns {*}
 */
/*
const todos = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state;
    }
};
*/




/**
 * Since our existing todo implementation works on TODO's Arrary
 * AllId's deal with todos list as array and update the array with id provided.
 *
 * @param state
 * @param action
 * @returns {*}
 */
/*
const allIds = (state=[], action) => {
    if(action.filter !== 'all') {
        return state;
    }
    switch(action.type){
        /!*case 'ADD_TODO':
            return[
                ...state,
                action.id
            ]*!/
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const activeIds = (state=[], action) => {
    if(action.filter !== 'active') {
        return state;
    }
    switch(action.type){
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const completedIds = (state=[], action) => {
    if(action.filter !== 'completed') {
        return state;
    }
    switch(action.type){
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};
*/

const listByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed'),
});

// Combine byId and allIds reduers to todos
const todos = combineReducers({
    byId,
    listByFilter
});

// export a single todo Reducer for store object to consure
export default todos;

/*
  // Apparently getting thousands of todos and managing them on client side is not right design.

// Private Selector to filter All todos as Array from State
// State here is like a lookup Table
const getAllTodos = (state) =>
    state.allIds.map(id => state.byId[id]);
*/

// Public Selector to get Visible Todo's to display in UI
export const getVisibleTodos = (state, filter) => {
    // Using the Selector to obtain Array of Todo's from State
    // State shape knowledge in the selector and in future
    // State shape can be updated without breaking UI

    /*const allTodos = getAllTodos(state);
    switch (filter) {
        case 'all':
            return allTodos;
        case 'completed':
            return allTodos.filter(t => t.completed);
        case 'active':
            return allTodos.filter(t => !t.completed);
        default:
            throw new Error(`unkown filter: ${filter}`);
    }*/

    // The the list of Primary id's from lookup table
    const ids = fromList.getIds(state.listByFilter[filter]);
    // Now get individual line item from the id provided from State Lookup Table
    return ids.map(id => fromById.getTodo(state.byId, id));
};



export const getIsFetching = (state, filter) => fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) => fromList.getErrorMessage(state.listByFilter[filter]);