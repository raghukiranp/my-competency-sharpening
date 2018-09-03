import React from "react";

const Todo = ({onClick, completed, text}) => (
    <li onClick={onClick}
        className={
            completed ?
                'list-group-item list-group-item-success' :
                'list-group-item list-group-item-danger'
        }
    >
       <span className={ completed ? "glyphicon glyphicon-ok" : "glyphicon " }></span> {text}
    </li>
);

export default Todo;