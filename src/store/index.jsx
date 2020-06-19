import { createStore, applyMiddleware, compose } from 'redux';


// middlewares
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

// Import custom components
import reducers from '../reducers/index';


function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    }catch(e){
        return undefined
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch (e) {
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(reducers,   compose(
    applyMiddleware(thunkMiddleware),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }
));

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state);
});


export default store;