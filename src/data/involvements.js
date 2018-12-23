import { Map, Record } from 'immutable'
import { get } from 'utils/data'
import ApiRequest from 'utils/ApiRequest'
import InvolvementsResource from 'resources/Involvements'
import createReducer from 'utils/createReducer'

// RECORD
export const Involvement = Record({
  id: null,
  title: null,
  description: null,
  contact: null,
})

// KEY
export const key = 'involvements'

export const fetchInvolvements = ApiRequest({
  moduleKey: key,
  actionBase: 'FETCH_INVOLVEMENTS',
  requestParams: false,
  error400: 'Could not get involvements',
  apiFn: InvolvementsResource.getAll,
  mapResponseDataFn: data =>
    Map(Object.entries(data).map(([, v]) => [v.id, Involvement(v)])),
})

// REDUCER
export default createReducer(Map(), {
  [fetchInvolvements.succeeded]: (_state, { payload }) => payload,
})

// SELECTORS
export const getAllInvolvements = get('involvements')
