import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import characterReducer from '../reducers';  
import rootReducer from '../reducers/';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => console.log(store.getState()))

export default store;