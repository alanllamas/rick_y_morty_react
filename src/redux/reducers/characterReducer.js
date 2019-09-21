import {
    SET_CHARACTER_SUCCESS,
    SET_CHARACTER_FAILED
} from '../actions'

const characterReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CHARACTER_SUCCESS:
            return action.payload
        case SET_CHARACTER_FAILED:
            return  'oh que pena! no hay data!!!'
        default:
            return state
    }
}

export default characterReducer