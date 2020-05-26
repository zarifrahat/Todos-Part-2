const allTodos = (state) =>{
    const stateKeys = Object.keys(state.todos);
    const todos = stateKeys.map( (id) => {
        return {
            [id]: state.todos[id],
            // { 5: {title:, body:, done: } }
        }
    })

    return todos;
}



export default allTodos;

window.allTodos = allTodos;