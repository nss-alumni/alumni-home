import { scopedCreator } from 'utils/data'
import createReducer from 'utils/createReducer'

const scoped = scopedCreator('snackbarErrorMessage')

// ACTION CREATORS
export const setMessage = scoped('SET_MESSAGE')
export const clearMessage = scoped('CLEAR_MESSAGE')

// REDUCER
export default createReducer(null, {
  [setMessage]: (_state, { payload }) => payload,
  [clearMessage]: _state => null,
})

// SELECTORS
export const getSnackbarErrorMessage = state =>
  state.get('snackbarErrorMessage')
