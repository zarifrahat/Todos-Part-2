import React from "react";
import TodoListContainer from './todos/todo_list_container';
import TodoFormContainer from './todos/todo_form_container';


const App = () => {
    return(
        <>
            <h1>Todos App</h1>
             <TodoListContainer />
             <TodoFormContainer/>
        </>
    )


}

export default App;

// import React from "react";
// import InventoryContainer from "./inventory/inventory_list_container";
// import CartContainer from "./cart/cart_container";
// import { Provider } from 'react-redux';
// const App = ({ store }) => { 
//     return (
//       <Provider store={store} >
//         <main className="app">
//           <h1>Redux Shopping</h1>
//           <CartContainer />
//           <InventoryContainer />
//         </main>
//       </Provider>
//     );
//   };