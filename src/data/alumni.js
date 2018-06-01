import { Map, Record } from 'immutable'
import { createSelector } from 'reselect'
import { get, replace } from 'utils/data'
import AlumniResource from 'resources/Alumni'
import apiRequestBuilder from 'utils/apiRequestBuilder'
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

export const fetchRequest = apiRequestBuilder({
  moduleKey: key,
  actionBase: 'FETCH_ALUMNI',
  responseParams: ['alumni'],
  error400: 'Could not get alumni',
  apiFn: AlumniResource.getAll,
  mapResponseDataFn: data =>
    Map(Object.entries(data).map(([k, v]) => [k, Alumni(v)])),
})

// ACTIONS
export const FETCH_ALUMNI = fetchRequest.REQUEST
export const FETCH_ALUMNI_SUCCEEDED = fetchRequest.SUCCEEDED
export const FETCH_ALUMNI_FAILED = fetchRequest.FAILED

// ACTION CREATORS
export const fetchAlumni = fetchRequest.request
export const fetchAlumniSucceeded = fetchRequest.succeeded
export const fetchAlumniFailed = fetchRequest.failed

// REDUCER
export default createReducer(Map(), {
  [fetchRequest.SUCCEEDED]: replace('alumni'),
})

// SELECTORS
export const getAllAlumni = get(key)
export const getBoardMembers = createSelector([getAllAlumni], alumni =>
  alumni.filter(a => a.isBoardMember),
)

// EPICS
export const fetchAlumniEpic = fetchRequest.epic
