import {RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions'

const initialState = {
  1: {
    id: 1,
    title: "wash car", 
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};


const newTodos = [  {
    id: 100,
    title: "wash laptop",  
    body: "with soap",
    done: false
  },
  {
    id: 200,
    title: "wash face",
    body: "with shampoo",
    done: true
  }]

const todosReducer = (state = initialState, action) => {
  // debugger;
    switch (action.type){
        case RECEIVE_TODOS:
            // const newState = state.slice();
            const todosArr = action.todos.map( (todo, idx) => {
                return {
                    [todo.id]: {
                        id: todo.id,
                        title: todo.title,
                        body: todo.body,
                        done: todo.done,
                    } 
                }
            })
            return Object.assign({}, ...todosArr);
        case RECEIVE_TODO:
            const todo = {
                [action.id]: {
                    id: action.id,
                    title: action.title,
                    body: action.body,
                    done: action.done,
                }
            } 
            const newState = Object.assign({}, state, todo);
            return newState;
            
        // case REMOVE_TODO:
        //     const newState = Object.assign({}, state);
        //     delete newState.action.id;  
            
        default:
            return state;
    }
}

export default todosReducer;