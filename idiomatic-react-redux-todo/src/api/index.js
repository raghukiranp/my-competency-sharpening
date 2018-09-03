import {v4} from 'node-uuid';
// import todoDatabase from './fileDatabase';
//import todoDatabase from './fileDatabse.json';


const fakeDatabase = {
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
        text: 'Persist the todos in file System and retirve',
        completed: false
    }, {
        id: v4(),
        text: 'Understand Generators in JS',
        completed: false
    }, {
        id: v4(),
        text: 'Understand Redux Saga library',
        completed: false
    }, {
        id: v4(),
        text: 'Implement Configure store for OCCstore 2.0',
        completed: false
    }]
};

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
    delay(500).then(() => {
        if(Math.random() > 0.95) {
            throw new Error("Simulated Network Errors !!!")
        }
        switch (filter) {
            case 'all':
                return fakeDatabase.todos;
            case 'active':
                return fakeDatabase.todos.filter(t => !t.completed);
            case 'completed':
                return fakeDatabase.todos.filter(t => t.completed);
            default:
                throw new Error(`unkown filter value: ${filter}`);
        }
    });


export const addTodo = text =>
    delay( 500 ).then( () => {
            const todo = {
                id: v4(),
                text,
                completed: false,
            };
            fakeDatabase.todos.push( todo );
            return todo;
        }
    );

export const toggleTodo = id =>
    delay( 500 ).then( () => {
        const todo = fakeDatabase.todos.find( t => t.id === id );
        todo.completed = !todo.completed;
        return todo;
    } );


export default fetchTodos;