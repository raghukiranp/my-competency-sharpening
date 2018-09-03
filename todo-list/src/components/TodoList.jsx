import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/index';
import '../css/bootstrap.css';

const Todo = ({
                  onClick,
                  completed,
                  text
              }) => (
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

const TodoList = ({
                      todos,
                      onTodoClick
                  }) => (
    <ul class="list-group">
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
    }
}

const mapStateToProps = (
    state
) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};
const mapDispatchToProps = (
    dispatch
) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);