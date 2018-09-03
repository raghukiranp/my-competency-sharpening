/**
 * This reducer takes a action and updates the states database by ID
 *
 * Spreads the state Object and replaces the id value in the object database
 * with the new todo By user.
 *
 * @param state
 * @param action
 * @returns {{}}
 */
const byId = (state = {}, action) => {
    switch (action.type) {
        /*case 'ADD_TODO':
        case 'TOGGLE_TODO':
            return {
                ...state,
                [action.id]:todo(state[action.id], action)
            };*/
        case 'FETCH_TODOS_SUCCESS':
            const nextState = {...state};
            action.response.forEach(todo => {
                nextState[todo.id]=todo;
            });
            return nextState;
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                [action.response.id]: action.response
            };
        case 'TOGGLE_TODO_SUCCESS':
            console.log("byId reducer TOGGLE_TODO_SUCCESS: state , action", state, action);
            // return state;
            return {
                ...state,
                [action.response.id]:action.response
            };
        case 'FETCH_TODOS_FAILURE':
            return state;
        default:
            return state;
    }
};

export default byId;


// Try to use Selctors together with Reducers
// Good practice to include the state shape of and selectors in particular reducer files
// This pattern lets you change the state that is stored by reducers without having to
// change your components or your tests
export const getTodo = (state, id ) => state[id];