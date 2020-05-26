import { connect } from 'react-redux';
import {receiveTodo} from '../../actions/todo_actions.js';
import TodoForm from './todo_form';


const mapDispatchToProps = dispatch => {
    debugger
    return {
       receiveTodo: (title, body) => {
           debugger
            return dispatch(receiveTodo(title, body)) }
    }
    
};

export default connect(
    null, //null
    mapDispatchToProps
)(TodoForm);

// import { connect } from 'react-redux';

// import { createSqueak } from '../../actions/squeak_actions';
// import SqueakForm from './squeak_form';

// const mapDispatchToProps = dispatch => {
//     return {
//         addSqueak: squeak => {
//             debugger
//             return dispatch(createSqueak(squeak))
//         }
//     };
// };

// export default connect(null, mapDispatchToProps)(SqueakForm);