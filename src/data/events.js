import createReducer from 'utils/createReducer'

// ACTIONS
export const FETCH_EVENTS_SUCCEEDED = 'events/FETCH_EVENTS_SUCCEEDED'
export const FETCH_EVENTS_FAILED = 'events/FETCH_EVENTS_FAILED'

// ACTION CREATORS
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
export default createReducer([], {
  [FETCH_EVENTS_SUCCEEDED]: (_state, { payload: events }) => events,
})

// SELECTORS
export const getEvents = state => state.get('events')

// API
export const fetchEvents = () =>
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
    .then(fetchEventsSucceeded)
    .catch(fetchEventsFailed)
