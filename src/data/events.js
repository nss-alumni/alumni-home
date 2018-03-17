import { List, Record } from 'immutable'
import { Observable } from 'rxjs/Rx'
import createReducer from 'utils/createReducer'

// RECORD
export const Event = Record({
  name: null,
  description: null,
  link: null,
  startDate: null,
})

// ACTIONS
export const FETCH_EVENTS = 'events/FETCH_EVENTS'
export const FETCH_EVENTS_SUCCEEDED = 'events/FETCH_EVENTS_SUCCEEDED'
export const FETCH_EVENTS_FAILED = 'events/FETCH_EVENTS_FAILED'

// ACTION CREATORS
export const fetchEvents = () => ({ type: FETCH_EVENTS })
export const fetchEventsSucceeded = events => ({
  type: FETCH_EVENTS_SUCCEEDED,
  payload: events,
})
export const fetchEventsFailed = error => ({
  type: FETCH_EVENTS_FAILED,
  payload: error,
  error: true,
})

// REDUCER
export default createReducer(List(), {
  [FETCH_EVENTS_SUCCEEDED]: (_state, { payload: events }) => events,
})

// SELECTORS
export const getEvents = state => state.get('events')

const mapData = data => List(data.map(Event))

// API
const apiFetchEvents = () =>
  // TODO(adam): request / resource module
  fetch(new Request('https://nss-alumni.herokuapp.com/api/events'))
    .then(response => response.json())
    .then(() => [
      {
        name: 'Event Name',
        description: 'Testing Things',
        link: 'google.com',
        startDate: '2018-03-01',
      },
      {
        name: 'Event 2',
        description: 'Testing more things',
        link: 'google.com',
        startDate: '2018-03-01',
      },
    ])
    .then(mapData)
    .then(fetchEventsSucceeded)
    .catch(fetchEventsFailed)

// EPICS
export const fetchEventsEpic = action$ =>
  action$
    .ofType(FETCH_EVENTS)
    .mergeMap(() => Observable.fromPromise(apiFetchEvents()))
