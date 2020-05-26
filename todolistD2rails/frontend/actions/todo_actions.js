export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
// export const REMOVE_TODO = "REMOVE_TODO";


export const receiveTodos = ((todos) =>{
    return {
        type: RECEIVE_TODOS,
        todos: todos
    }
});

export const receiveTodo = (title, body, id = Math.floor(Math.random() * 10000)) => {
    debugger
    return {
        
        id: id,
        type: RECEIVE_TODO,
        title: title,
        body: body,
        done: false
    }
};

// export const removeTodo = id => {
//     debugger
//     return {     
//         id: id,
//         type: REMOVE_TODO
//     }
// };