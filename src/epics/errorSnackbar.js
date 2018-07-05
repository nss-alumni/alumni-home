import {
  SET_MESSAGE,
  clearMessage,
  getSnackbarErrorMessage,
  setMessage,
} from 'data/snackbarErrorMessage'
import { combineEpics } from 'redux-observable'
import { isError } from 'utils/actions'

const defaultTimeout = 5000

export const setErrorMessage = (action$, store) =>
  action$
    .filter(isError)
    .filter(action => action.meta.error400 || action.meta.error500)
    .filter(_action => !getSnackbarErrorMessage(store.getState()))
    .map(
      ({ payload: error, meta }) =>
        error.status >= 500 ? meta.error500 : meta.error400, // eslint-disable-line no-magic-numbers
    )
    .map(setMessage)

export const clearErrorMessage = (
  action$,
  _store,
  { snackbarTimeout: messageTimeout = defaultTimeout } = {},
) =>
  action$
    .ofType(SET_MESSAGE)
    .mapTo(clearMessage())
    .delay(messageTimeout)

export default combineEpics(setErrorMessage, clearErrorMessage)
