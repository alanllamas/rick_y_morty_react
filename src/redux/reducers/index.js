import { combineReducers } from 'redux'

import charactersReducer from './charactersReducer'
import characterReducer from './characterReducer';

export default combineReducers({
    characters: charactersReducer,
    character: characterReducer
})












