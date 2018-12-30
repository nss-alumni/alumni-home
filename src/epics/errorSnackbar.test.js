import { ActionsObservable } from 'redux-observable'
import { Map } from 'immutable'
import { clearErrorMessage, setErrorMessage } from './errorSnackbar'
import { clearMessage, setMessage } from 'data/snackbarErrorMessage'
import { of } from 'rxjs'
import { tap } from 'rxjs/operators'

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

const state$ = of(Map())

/* eslint-disable no-console */
test('sets the message on error actions with meta messages', done => {
  setErrorMessage(error400Action$, state$)
    .pipe(tap(action => expect(action).toEqual(setMessage(error400))))
    .subscribe(undefined, console.error, done)

  setErrorMessage(error500Action$, state$)
    .pipe(tap(action => expect(action).toEqual(setMessage(error500))))
    .subscribe(undefined, console.error, done)
})

test('clears the message after the timeout', done => {
  const errorMessageSet$ = ActionsObservable.of(setMessage())

  clearErrorMessage(errorMessageSet$, undefined, { snackbarTimeout: 0 })
    .pipe(tap(action => expect(action).toEqual(clearMessage())))
    .subscribe(undefined, console.error, done)
})
