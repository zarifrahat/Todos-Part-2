export const thunk = store => next => action => {
    debugger
    if (typeof action === 'function') { 
        return action(store.dispatch, store.getState);
    }
    return next(action); 
};