import { List, Record } from 'immutable'
import { get, replace } from 'utils/data'
import EventsResource from 'resources/Events'
import apiRequestBuilder from 'utils/apiRequestBuilder'
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

export const fetchRequest = apiRequestBuilder({
  moduleKey: key,
  actionBase: 'FETCH_EVENTS',
  responseParams: ['events'],
  error400: 'Could not get events',
  apiFn: EventsResource.getAll,
  mapResponseDataFn: data => List(data.map(Event)),
})

// ACTIONS
export const FETCH_EVENTS = fetchRequest.REQUEST
export const FETCH_EVENTS_SUCCEEDED = fetchRequest.SUCCEEDED
export const FETCH_EVENTS_FAILED = fetchRequest.FAILED

// ACTION CREATORS
export const fetchEvents = fetchRequest.request
export const fetchEventsSucceeded = fetchRequest.succeeded
export const fetchEventsFailed = fetchRequest.failed

// REDUCER
export default createReducer(List(), {
  [fetchRequest.SUCCEEDED]: replace('events'),
})

// SELECTORS
export const getEvents = get(key)

// EPICS
export const fetchEventsEpic = fetchRequest.epic
