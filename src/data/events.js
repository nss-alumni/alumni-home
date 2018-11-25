import { List, Record } from 'immutable'
import { get } from 'utils/data'
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

export const fetchEvents = apiRequestBuilder({
  moduleKey: key,
  actionBase: 'FETCH_EVENTS',
  requestParams: false,
  error400: 'Could not get events',
  apiFn: EventsResource.getAll,
  mapResponseDataFn: data => List(data.map(Event)),
})

// REDUCER
export default createReducer(List(), {
  [fetchEvents.SUCCEEDED]: (_state, { payload: { events } }) => events,
})

// SELECTORS
export const getEvents = get(key)
