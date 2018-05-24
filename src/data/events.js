import { List, Record } from 'immutable'
import { Observable } from 'rxjs'
import { creator, errorCreator, get, replace, type } from 'utils/data'
import EventsResource from 'resources/Events'
import createReducer from 'utils/createReducer'

// RECORD
export const Event = Record({
  name: null,
  description: null,
  link: null,
  startTime: null,
  endTime: null,
})

// KEY
export const key = 'events'

// ACTIONS
export const FETCH_EVENTS = type(key, 'FETCH_EVENTS')
export const FETCH_EVENTS_SUCCEEDED = type(key, 'FETCH_EVENTS_SUCCEEDED')
export const FETCH_EVENTS_FAILED = type(key, 'FETCH_EVENTS_FAILED')

// ACTION CREATORS
export const fetchEvents = creator(FETCH_EVENTS)
export const fetchEventsSucceeded = creator(FETCH_EVENTS_SUCCEEDED, 'events')
export const fetchEventsFailed = errorCreator(
  FETCH_EVENTS_FAILED,
  'Could not get events.',
)

// REDUCER
export default createReducer(List(), {
  [FETCH_EVENTS_SUCCEEDED]: replace('events'),
})

// SELECTORS
export const getEvents = get('events')

const mapData = data => List(data.map(Event))

// EPICS
export const fetchEventsEpic = action$ =>
  action$.ofType(FETCH_EVENTS).mergeMap(() =>
    EventsResource.getAll()
      .map(mapData)
      .map(fetchEventsSucceeded)
      .catch(e => Observable.of(fetchEventsFailed(e))),
  )
