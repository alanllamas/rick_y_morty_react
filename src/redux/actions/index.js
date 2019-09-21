
import axios from 'axios'

export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILED = 'FETCH_CHARACTERS_FAILED';

export const SET_CHARACTER_SUCCESS = 'SET_CHARACTER_SUCCESS';
export const SET_CHARACTER_FAILED = 'SET_CHARACTER_FAILED';

//Characters reducer

export const fetchCharactersSuccess = (data) => ({
    type: FETCH_CHARACTERS_SUCCESS,
    payload: data
})

export const fetchCharactersError = (err) => ({
    type: FETCH_CHARACTERS_FAILED,
    payload: err,
    error: true
})

export const fetchCharactersAsync = (path = 'https://rickandmortyapi.com/api/character/') => {
    return async (dispatch) => {
        try {
            const res = await axios.get(path)

            const data = res.data

            dispatch(fetchCharactersSuccess(data))
        } catch (err) {
            dispatch(fetchCharactersError(err))
        }
    }
}

//Character Reducer

export const setCharacterSuccess = (data) => ({
    type: SET_CHARACTER_SUCCESS,
    payload: data
})

export const setCharacterError = (err) => ({
    type: SET_CHARACTER_FAILED,
    payload: err,
    error: true
})