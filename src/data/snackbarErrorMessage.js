import { creator, type } from 'utils/data'
import createReducer from 'utils/createReducer'

const key = 'snackbarErrorMessage'
const modType = type(key)

// ACTIONS
export const SET_MESSAGE = modType('SET_MESSAGE')
export const CLEAR_MESSAGE = modType('CLEAR_MESSAGE')

// ACTION CREATORS
export const setMessage = creator(SET_MESSAGE, ['message'])
export const clearMessage = creator(CLEAR_MESSAGE)

// REDUCER
export default createReducer(null, {
  [SET_MESSAGE]: (_state, { payload: { message } }) => message,
  [CLEAR_MESSAGE]: _state => null,
})

// SELECTORS
export const getSnackbarErrorMessage = state =>
  state.get('snackbarErrorMessage')
