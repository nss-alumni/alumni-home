import createReducer from 'utils/createReducer'

// ACTIONS
export const SET_MESSAGE = 'snackbarErrorMessage/SET_MESSAGE'
export const CLEAR_MESSAGE = 'snackbarErrorMessage/CLEAR_MESSAGE'

// ACTION CREATORS
export const setMessage = message => ({ type: SET_MESSAGE, payload: message })
export const clearMessage = () => ({ type: CLEAR_MESSAGE })

// REDUCER
export default createReducer(null, {
  [SET_MESSAGE]: (_state, { payload: message }) => message,
  [CLEAR_MESSAGE]: _state => null,
})

// SELECTORS
export const getSnackbarErrorMessage = state =>
  state.get('snackbarErrorMessage')
