import { createStore } from 'redux';
import characterReducer from '../reducers';  


let store = createStore(characterReducer)


store.subscribe(() => console.log(store.getState()))