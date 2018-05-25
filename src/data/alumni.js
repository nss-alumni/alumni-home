import { Map, Record } from 'immutable'
import { Observable } from 'rxjs'
import { createSelector } from 'reselect'
import { creator, errorCreator, get, replace, type, withMeta } from 'utils/data'
import { pipe } from 'utils/functional'
import AlumniResource from 'resources/Alumni'
import createReducer from 'utils/createReducer'

// RECORD
export const Alumni = Record({
  name: null,
  title: null,
  cohort: null,
  email: null,
  github: null,
  linkedin: null,
  imageUrl: null,
  isBoardMember: false,
})

// KEY
export const key = 'alumni'

const apiBuilder = ({
  moduleKey,
  actionBase,
  requestParams,
  responseParams,
  error400,
  error500,

  apiCall = () => {},
  responseMapFn = r => r,
}) => {
  const types = {
    REQUESTED: type(moduleKey, `${actionBase}_REQUESTED`),
    SUCCEEDED: type(moduleKey, `${actionBase}_SUCCEEDED`),
    FAILED: type(moduleKey, `${actionBase}_FAILED`),
  }

  const apiRequestKey = type(moduleKey, actionBase)
  const api = withMeta({ apiRequestKey })
  const apiCreator = pipe(api, creator)
  const apiErrorCreator = pipe(api, errorCreator)

  const creators = {
    requested: apiCreator(types.REQUESTED, ...requestParams),
    succeeded: apiCreator(types.SUCCEEDED, ...responseParams),
    failed: apiErrorCreator(types.FAILED, error400, error500),
  }

  const epic = action$ =>
    action$.ofType(types.REQUESTED).mergeMap(() =>
      apiCall()
        .map(responseMapFn)
        .map(creators.succeeded)
        .catch(pipe(creators.failed, Observable.of)),
    )

  return {
    ...types,
    ...creators,
    epic,
  }
}

// ACTIONS
export const FETCH_ALUMNI = type(key, 'FETCH_ALUMNI')
export const FETCH_ALUMNI_SUCCEEDED = type(key, 'FETCH_ALUMNI_SUCCEEDED')
export const FETCH_ALUMNI_FAILED = type(key, 'FETCH_ALUMNI_FAILED')

// ACTION CREATORS
export const fetchAlumni = creator(FETCH_ALUMNI)
export const fetchAlumniSucceeded = creator(FETCH_ALUMNI_SUCCEEDED, 'alumni')
export const fetchAlumniFailed = errorCreator(
  FETCH_ALUMNI_FAILED,
  'Could not get alumni.',
)

// REDUCER
export default createReducer(Map(), {
  [FETCH_ALUMNI_SUCCEEDED]: replace('alumni'),
})

// SELECTORS
export const getAllAlumni = get('alumni')
export const getBoardMembers = createSelector([getAllAlumni], alumni =>
  alumni.filter(a => a.isBoardMember),
)

const mapData = data =>
  Map(Object.entries(data).map(([k, v]) => [k, Alumni(v)]))

// EPICS
export const fetchAlumniEpic = action$ =>
  action$.ofType(FETCH_ALUMNI).mergeMap(() =>
    AlumniResource.getAll()
      .map(mapData)
      .map(fetchAlumniSucceeded)
      .catch(e => Observable.of(fetchAlumniFailed(e))),
  )
