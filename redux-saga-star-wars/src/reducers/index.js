import {combineReducers} from 'redux';
import {peopleList, isFetching, errorMessage} from './people'

const starWars = combineReducers({
    peopleList,
    isFetching,
    errorMessage,
});

export default starWars;
