import { catchError, map, mergeMap, pluck } from 'rxjs/operators'
import { creator, type } from 'utils/data'
import { empty, of } from 'rxjs'
import { ofType } from 'redux-observable'
import { pipe } from 'utils/functional'

/**
 * The generated set of api request components
 * @typedef {Object} ApiRequest
 * @property {string} requestKey - the key used to track the request
 * @property {string} REQUEST - the type to begin the request
 * @property {string} SUCCEEDED - the type for a successful request
 * @property {string} FAILED - the type for a failed request
 * @property {ActionCreator} request - the REQUEST action creator
 * @property {ActionCreator} succeeded - the SUCCEEDED action creator
 * @property {ActionCreator} failed - the FAILED action creator
 * @property {function} epic - the generated epic
 */

/**
 * Generate a set of types, action creators, and an epic for an api reqeuest.
 *
 * @param {Object} params - the set of params for the builder
 * @param {string} params.moduleKey - the data module key for the request
 * @param {string} params.actionBase - the base portion of the types
 * @param {string[]=} params.requestParams - params for the request action creator
 * @param {string} params.error400 - a message to show for a 400 error
 * @param {string} params.error500 - a message to show for a 500 error
 * @param {function(...*=):Observable=} params.apiFn - the request function if building an epic
 * @param {function(*):*=} params.mapResponseDataFn - a function to map the response data
 * @returns {ApiRequest} the generated api request object
 */
export default ({
  moduleKey,
  actionBase,
  requestParams,
  error400,
  error500,
  apiFn = empty,
  mapResponseDataFn = d => d,
}) => {
  const modType = type(moduleKey)
  const types = {
    REQUEST: modType(actionBase),
    SUCCEEDED: modType(`${actionBase}_SUCCEEDED`),
    FAILED: modType(`${actionBase}_FAILED`),
  }

  const requestKey = modType(actionBase)
  const api = requestStep => ({ api: { requestKey, requestStep } })

  const creators = {
    request: creator(types.REQUEST, requestParams, () => api('init')),
    succeeded: creator(types.SUCCEEDED, true, () => api('success')),
    failed: creator(types.FAILED, true, () => ({
      error400,
      error500: error400 || error500,
      ...api('fail'),
    })),
  }

  const epic = action$ =>
    action$.pipe(
      ofType(types.REQUEST),
      pluck('payload'),
      mergeMap(apiFn),
      map(mapResponseDataFn),
      map(creators.succeeded),
      catchError(
        pipe(
          creators.failed,
          of,
        ),
      ),
    )

  return {
    requestKey,
    ...types,
    ...creators,
    epic,
  }
}
