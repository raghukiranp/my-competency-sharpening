import React from 'react';
import Todo from './Todo';
import '../css/bootstrap.css';

const TodoList = ({todos, onTodoClick}) => (

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

export default TodoList;
