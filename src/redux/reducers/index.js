import {
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILED
} from '../actions'

const characterReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS_SUCCESS:
            return action.payload
        case FETCH_CHARACTERS_FAILED:
            return action.payload
        default:
            return state
    }
}

export default characterReducer