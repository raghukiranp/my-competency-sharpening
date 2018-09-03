import { v4 } from "node-uuid";
//import database from 'database.json';
//import * as fs from 'fs';
/*
const obj = {
    todos: []
};*/


// const todoDatabase = loadTodoDatabase();
/*{
    todos: [{
        id: v4(),
        text: 'React Store, State, Connect, combineReducers',
        completed: true
    }, {
        id: v4(),
        text: 'Middleware, redux-promise, redux-thunks',
        completed: true
    }, {
        id: v4(),
        text: 'Persist todos in file System and retirve',
        completed: false
    }, {
        id: v4(),
        text: 'Understand Generators in JS',
        completed: false
    }, {
        id: v4(),
        text: 'Replace Redux-Thinks with redux-Saga library in this example',
        completed: false
    }, {
        id: v4(),
        text: 'Implement Configure store for OCCstore 2.0',
        completed: false
    }]
};*/
const loadTodoDatabase = () => {
    const fs = require('fs');

    fs.readFile('src/api/database.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            var obj = JSON.parse(data); //now it an object
            obj.table.push({id: v4(), text:"React Store, State, Connect, combineReducers", completed: true});
            obj.table.push({id: v4(), text:"Middleware, redux-promise, redux-thunks", completed: true});
            obj.table.push({id: v4(), text:"Persist the todos in file System and retirve", completed: true});
            obj.table.push({id: v4(), text:"Understand Generators in JS", completed: true});
            obj.table.push({id: v4(), text:"Understand Redux Saga library", completed: true});
            obj.table.push({id: v4(), text:"Implement Configure store for OCCstore 2.0", completed: true});
            var json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back
        }});
};

loadTodoDatabase();
//export default todoDatabase;