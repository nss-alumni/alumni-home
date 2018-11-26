import {
  SET_MESSAGE,
  clearMessage,
  getSnackbarErrorMessage,
  setMessage,
} from 'data/snackbarErrorMessage'
import { combineEpics, ofType } from 'redux-observable'
import { delay, filter, map, mapTo } from 'rxjs/operators'

const defaultTimeout = 5000

export const setErrorMessage = (action$, state$) =>
  action$.pipe(
    filter(a => a.error),
    filter(action => action.meta.error400 || action.meta.error500),
    filter(_action => !getSnackbarErrorMessage(state$.value)),
    map(
      ({ payload: error, meta }) =>
        error.status >= 500 ? meta.error500 : meta.error400, // eslint-disable-line no-magic-numbers
    ),
    map(setMessage),
  )

export const clearErrorMessage = (
  action$,
  _store,
  { snackbarTimeout: messageTimeout = defaultTimeout } = {},
) =>
  action$.pipe(
    ofType(SET_MESSAGE),
    mapTo(clearMessage()),
    delay(messageTimeout),
  )

export default combineEpics(setErrorMessage, clearErrorMessage)
