import { Observable } from 'rxjs/Rx'
import { creator, errorCreator, type, withMeta } from 'utils/data'
import { payload } from 'utils/actions'
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

/**
 * Generate a set of types, action creators, and an epic for an api reqeuest.
 *
 * @param {Object} params - the set of params for the builder
 * @param {string} params.moduleKey - the data module key for the request
 * @param {string} params.actionBase - the base portion of the types
 * @param {string[]=} params.requestParams - an list of param keys for the api request
 * @param {string[]} params.responseParams - a list of param keys to handle from the respone
 * @param {string} error400 - a message to show for a 400 error
 * @param {string} error500 - a message to show for a 500 error
 * @param {function(...*=):Observable=} apiFn - the request function if building an epic
 * @param {function(*):*=} mapResponseDataFn - a function to map the response data
 * @returns {ApiRequest} the generated api request object
 */
export default ({
  moduleKey,
  actionBase,
  requestParams = [],
  responseParams,
  error400,
  error500,
  apiFn = Observable.empty,
  mapResponseDataFn = d => d,
}) => {
  const modType = type(moduleKey)
  const types = {
    REQUEST: modType(actionBase),
    SUCCEEDED: modType(`${actionBase}_SUCCEEDED`),
    FAILED: modType(`${actionBase}_FAILED`),
  }

  const requestKey = modType(actionBase)
  const api = requestStep => withMeta({ api: { requestKey, requestStep } })
  // TODO(adam): api should be a pipable function with the creators
  // const apiCreator = pipe(creator, api)
  // const apiErrorCreator = pipe(errorCreator, api)

  const creators = {
    request: api('init')(creator(types.REQUEST, ...requestParams)),
    succeeded: api('success')(creator(types.SUCCEEDED, ...responseParams)),
    failed: api('fail')(
      errorCreator(types.FAILED, error400, error500 || error400),
    ),
  }

  const epic = action$ =>
    action$
      .ofType(types.REQUEST)
      .map(payload)
      .mergeMap((params = {}) => {
        const requestParamValues = requestParams.map(p => params[p])

        return apiFn(...requestParamValues)
          .map(mapResponseDataFn)
          .map(creators.succeeded)
          .catch(pipe(creators.failed, Observable.of))
      })

  return {
    requestKey,
    ...types,
    ...creators,
    epic,
  }
}
