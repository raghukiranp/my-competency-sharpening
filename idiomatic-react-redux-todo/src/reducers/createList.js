import { combineReducers } from 'redux';

const createList = (filter) => {
    const handleToggle = ( state, action ) => {
        const { id, text, completed } = action.response;
        var toggledId = id;
        //const { completed } = entities.todos[ toggledId ];
        // Should we remove that from that view?
        const shouldRemove = (
            ( completed && filter === "active" ) || // Completed todo should be not in active filter
            ( !completed && filter === "completed" ) // active todo should be not in completed filter
        );
        return shouldRemove ?
            state.filter( id => id !== toggledId ) :
            state;
    };

    const ids = (state=[], action) => {
        /*if(action.filter !== filter) {
            return state;
        }*/
        switch(action.type){
            /*case 'ADD_TODO':
                return[
                    ...state,
                    action.id
                ]*/
            case 'FETCH_TODOS_SUCCESS':
                return filter === action.filter ? action.response.map(todo => todo.id):state;
            case 'ADD_TODO_SUCCESS':
                return filter !== 'completed' ? [
                    ...state,
                    action.response.id
                ]:state;
            case 'TOGGLE_TODO_SUCCESS':
                console.log("createList reducer TOGGLE_TODO_SUCCESS: state , action", state, action);
                var newState = [...state];
                return handleToggle( newState, action ); //return state;
            case 'FETCH_TODOS_FAILURE':
                return state;
            default:
                return state;
        }
    };

    const isFetching = (state = false, action)  => {
        if(action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case 'FETCH_TODOS_REQUEST':
                return true;
            case 'FETCH_TODOS_SUCCESS':
            case 'FETCH_TODOS_FAILURE':
                return false;
            default:
                return state;
        }
    };

    const errorMessage = (state = null, action) => {
        if(action.filter !== filter) {
            return state;
        }

        switch (action.type) {
            case 'FETCH_TODOS_FAILURE':
                return action.message;
            case 'FETCH_TODOS_SUCCESS':
            case 'FETCH_TODOS_REQUEST':
                return null
            default:
                return state;
        }
    }

    return combineReducers({
        ids,
        isFetching,
        errorMessage,
    });
};

export default createList;

export const getIds = (state) => state.ids;

export const getIsFetching = (state) =>  state.isFetching;

export const getErrorMessage = (state) =>  state.errorMessage;