import { Map, Record } from 'immutable'
import { Observable } from 'rxjs'
import { createSelector } from 'reselect'
import { creator, errorCreator, get, replace, type } from 'utils/data'
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
