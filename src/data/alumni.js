import { Map, Record } from 'immutable'
import { Observable } from 'rxjs/Rx'
import { createSelector } from 'reselect'
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

// ACTIONS
export const FETCH_ALUMNI = 'alumni/FETCH_ALUMNI'
export const FETCH_ALUMNI_SUCCEEDED = 'alumni/FETCH_ALUMNI_SUCCEEDED'
export const FETCH_ALUMNI_FAILED = 'alumni/FETCH_ALUMNI_FAILED'

// ACTION CREATORS
export const fetchAlumni = () => ({ type: FETCH_ALUMNI })
export const fetchAlumniSucceeded = alumni => ({
  type: FETCH_ALUMNI_SUCCEEDED,
  payload: alumni,
})
export const fetchAlumniFailed = error => ({
  type: FETCH_ALUMNI_FAILED,
  payload: error,
  error: true,
  meta: {
    message: 'Could not get alumni.',
  },
})

// REDUCER
export default createReducer(Map(), {
  [FETCH_ALUMNI_SUCCEEDED]: (_state, { payload: alumni }) => alumni,
})

// SELECTORS
export const getAllAlumni = state => state.get('alumni')
export const getBoardMembers = createSelector([getAllAlumni], alumni =>
  alumni.filter(a => a.isBoardMember),
)

const mapData = data =>
  Map(Object.entries(data).map(([k, v]) => [k, Alumni(v)]))

// EPICS
export const fetchAlumniEpic = action$ =>
  action$.ofType(FETCH_ALUMNI).mergeMap(() =>
    Observable.fromPromise(AlumniResource.getAll())
      .map(mapData)
      .map(fetchAlumniSucceeded)
      .catch(fetchAlumniFailed),
  )
