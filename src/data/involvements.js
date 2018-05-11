import { Map, Record } from 'immutable'
import { Observable } from 'rxjs'
import { action, creator, errorCreator, get, replace } from 'utils/data'
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

// ACTIONS
export const FETCH_INVOLVEMENTS = action(key, 'FETCH_INVOLVEMENTS')
export const FETCH_INVOLVEMENTS_SUCCEEDED = action(
  key,
  'FETCH_INVOLVEMENTS_SUCCEEDED',
)
export const FETCH_INVOLVEMENTS_FAILED = action(
  key,
  'FETCH_INVOLVEMENTS_FAILED',
)

// ACTION CREATORS
export const fetchInvolvements = creator(FETCH_INVOLVEMENTS)
export const fetchInvolvementsSucceeded = creator(
  FETCH_INVOLVEMENTS_SUCCEEDED,
  'involvements',
)
export const fetchInvolvementsFailed = errorCreator(
  FETCH_INVOLVEMENTS_FAILED,
  'Could not get involvements.',
)

// REDUCER
export default createReducer(Map(), {
  [FETCH_INVOLVEMENTS_SUCCEEDED]: replace('involvements'),
})

// SELECTORS
export const getAllInvolvements = get('involvements')

const mapData = data =>
  Map(Object.entries(data).map(([, v]) => [v.id, Involvement(v)]))

// EPICS
export const fetchInvolvementsEpic = action$ =>
  action$.ofType(FETCH_INVOLVEMENTS).mergeMap(() =>
    InvolvementsResource.getAll()
      .map(mapData)
      .map(fetchInvolvementsSucceeded)
      .catch(e => Observable.of(fetchInvolvementsFailed(e))),
  )
