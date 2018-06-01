import { Observable } from 'rxjs/Rx'
import { creator, errorCreator, type, withMeta } from 'utils/data'
import { payload } from 'utils/actions'
import { pipe } from 'utils/functional'

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
  const types = {
    REQUEST: type(moduleKey, actionBase),
    SUCCEEDED: type(moduleKey, `${actionBase}_SUCCEEDED`),
    FAILED: type(moduleKey, `${actionBase}_FAILED`),
  }

  const requestKey = type(moduleKey, actionBase)
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
