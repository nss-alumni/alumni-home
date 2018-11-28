import { creator, type } from 'utils/data'
import createReducer from 'utils/createReducer'

const key = 'snackbarErrorMessage'
const modType = type(key)

// ACTIONS
const SET_MESSAGE = modType('SET_MESSAGE')
const CLEAR_MESSAGE = modType('CLEAR_MESSAGE')

// ACTION CREATORS
export const setMessage = creator(SET_MESSAGE)
export const clearMessage = creator(CLEAR_MESSAGE)

// REDUCER
export default createReducer(null, {
  [setMessage]: (_state, { payload }) => payload,
  [clearMessage]: _state => null,
})

// SELECTORS
export const getSnackbarErrorMessage = state =>
  state.get('snackbarErrorMessage')
