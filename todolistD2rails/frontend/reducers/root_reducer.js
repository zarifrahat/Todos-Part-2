import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';

// const rootReducer = (state = {}, action) => {
//     return {
//         todos: todosReducer(state.todos, action),
//     }
// }

const rootReducer = combineReducers({
    todos: todosReducer
})

// import { combineReducers } from "redux";
// import fruitsReducer from "./fruits_reducer";
// import farmersReducer from "./farmers_reducer";

// const rootReducer = combineReducers({
//   fruits: fruitsReducer,
//   farmers: farmersReducer
// });

export default rootReducer;


// export default rootReducer;