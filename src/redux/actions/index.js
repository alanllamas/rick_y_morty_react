
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILED = 'FETCH_CHARACTERS_FAILED';



export const fetchCharactersSuccess = (data) => ({
    type: FETCH_CHARACTERS_SUCCESS,
    payload: data
})

export const fetchCharactersError = (err) => ({
    type: FETCH_CHARACTERS_FAILED,
    payload: err,
    error: true
})

export const fetchCharactersAsync = () => {
    return async (dispatch) => {
        try {
        const res = await axios.get('https://rickandmortyapi.com/api/character/')

            const data = res.results
            dispatch(fetchCharactersSuccess(data))
        } catch (err) {
            dispatch(fetchCharactersError(err))
        }
    }
}