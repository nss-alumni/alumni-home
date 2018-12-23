import { Map, Record } from 'immutable'
import { createSelector } from 'reselect'
import { get } from 'utils/data'
import AlumniResource from 'resources/Alumni'
import ApiRequest from 'utils/ApiRequest'
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

export const fetchAlumni = ApiRequest({
  moduleKey: key,
  actionBase: 'FETCH_ALUMNI',
  requestParams: false,
  error400: 'Could not get alumni',
  apiFn: AlumniResource.getAll,
  mapResponseDataFn: data =>
    Map(Object.entries(data).map(([k, v]) => [k, Alumni(v)])),
})

// REDUCER
export default createReducer(Map(), {
  [fetchAlumni.succeeded]: (_state, { payload }) => payload,
})

// SELECTORS
export const getAllAlumni = get(key)
export const getBoardMembers = createSelector(
  [getAllAlumni],
  alumni => alumni.filter(a => a.isBoardMember),
)
