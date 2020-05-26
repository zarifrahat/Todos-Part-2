import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {receiveTodo} from './actions/todo_actions'
import { receiveTodos } from './actions/todo_actions'
import App from './components/app'
import Root from './components/root'
import allTodos from './reducers/selectors'
import {fetchTodos} from './util/todo_api_util'


document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('content');
    ReactDOM.render(<Root store={store}/>, root);

})

window.store = configureStore;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.fetchTodos = fetchTodos;




