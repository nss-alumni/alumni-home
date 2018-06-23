import { ActionsObservable } from 'redux-observable'
import { Map } from 'immutable'
import { Observable } from 'rxjs/Rx' // eslint-disable-line no-unused-vars
import { clearErrorMessage, setErrorMessage } from './errorSnackbar'
import { clearMessage, setMessage } from 'data/snackbarErrorMessage'

describe('the errorSnackbar epic', () => {
  const error400 = '400 error happened'
  const error500 = '500 error happened'
  const errorActionBase = {
    type: 'errorAction',
    error: true,
    meta: { error400, error500 },
  }

  const error400Action$ = ActionsObservable.of({
    ...errorActionBase,
    payload: { status: 400 },
  })
  const error500Action$ = ActionsObservable.of({
    ...errorActionBase,
    payload: { status: 500 },
  })

  const store = { getState: () => Map() }

  /* eslint-disable no-console */
  test('should set the message on error actions with meta messages', done => {
    setErrorMessage(error400Action$, store)
      .do(action => expect(action).toEqual(setMessage(error400)))
      .subscribe(undefined, console.error, done)

    setErrorMessage(error500Action$, store)
      .do(action => expect(action).toEqual(setMessage(error500)))
      .subscribe(undefined, console.error, done)
  })

  test('should clear the message after the timeout', done => {
    const errorMessageSet$ = ActionsObservable.of(setMessage())

    clearErrorMessage(errorMessageSet$, undefined, { snackbarTimeout: 0 })
      .do(action => expect(action).toEqual(clearMessage()))
      .subscribe(undefined, console.error, done)
  })
})
