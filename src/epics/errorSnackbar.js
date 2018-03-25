import {
  SET_MESSAGE,
  clearMessage,
  setMessage,
} from 'data/snackbarErrorMessage'
import { combineEpics } from 'redux-observable'
import { isError } from 'utils/actions'

const messageTimeout = 5000

const setErrorMesage = action$ =>
  action$
    .filter(isError)
    .filter(action => action.meta.message)
    .map(action => action.meta.message)
    .map(setMessage)

const clearErrorMessage = action$ =>
  action$
    .ofType(SET_MESSAGE)
    .mapTo(clearMessage())
    .delay(messageTimeout)

export default combineEpics(setErrorMesage, clearErrorMessage)
