import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';

const mapStateToProps = state => ({
    todos: allTodos(state)
  });
  
  const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
  });
  
  export default connect(
    mapStateToProps, //null
    mapDispatchToProps
  )(TodoList);


// import { connect } from 'react-redux';
// import Cart from './cart';
// import { clearAllItems } from '../../actions/inventory_actions';

// const mapStateToProps = (state) => {
//     // debugger;
//     return {
//         items: state.cart.map( itemId => {
//             return state.inventory[itemId] 
//             // key directly into other slice of state to get information
//             // converts our array of id's into the actual reference to objects
//         })
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         clear: () => { dispatch(clearAllItems()) }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);