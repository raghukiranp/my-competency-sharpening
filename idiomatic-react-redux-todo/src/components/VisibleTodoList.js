import React, { Component }  from 'react';
import {withRouter} from "react-router";
import {connect} from 'react-redux';
import {getVisibleTodos, getIsFetching, getErrorMessage} from "../reducers/todos";
import * as actions from '../actions';
import TodoList from './TodoList';
import FetchError from './FetchError';

class VisibleTodoList extends Component {
    componentDidMount() {
        // React component lifecycle Hook
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }

    }

    fetchData() {
        //const {filter, requestTodos, fetchTodos} = this.props;
        // requestTodos(filter);
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter).then(() => console.log("Finished a Thunk!!"));
    }

    render() {
        // Separate toggleTodo action from others in the object
        const {toggleTodo, todos, isFetching, errorMessage, ...rest} = this.props;
        if(isFetching && !todos.length){
            return (
                <div id="loader" className="col-sm-6 col-sm-offset-6"></div>
            );
        }

        if(errorMessage && !todos.length) {
            return(
                <FetchError message={errorMessage} onRetry={() => this.fetchData()}/>
            )
        }
        return(
            <TodoList
                todos={todos}
                onTodoClick={toggleTodo}
            />
        )
    }
}


// Changed observe the match: for withRouter
const mapStateToProps = (state, {match: {params}}) => {
    let filter = "";
    if ( !params.filter === undefined ) {
        filter = "all";
    } else if ( params.filter !== "all" && params.filter !== "active" && params.filter !== "completed" ) {
        filter = "all";
    } else {
        filter = params.filter;
    }
    return {
        todos: getVisibleTodos(state, filter || 'all'),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter,
    }
};

/*
const TodoList = ({todos=[], onTodoClick}) => (
    <ul className="list-group">
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);

const Todo = ({onClick, completed, text}) => (
    <li onClick={onClick}
        className={
            completed ?
                'list-group-item disabled' :
                'list-group-item list-group-item-success'
        }
    >
        {text}
    </li>
);
*/

//replaced by importing whole set of actions from ../actions/index
/*const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    }
})*/;

// Reassign VisibleTodoList binding to point to the wrapped component.
VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions,
    //{onTodoClick: toggleTodo, receiveTodos} // ES6 shorthand notation to map DispatchToProps with multiple callbacks
)(VisibleTodoList)); // changed from Todolist to VisibleTodolist to support lifecycle hooks!

export default VisibleTodoList;