import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux-immutable'
import events, { fetchEventsEpic } from 'data/events'
import isFetchingEvents from 'data/isFetchingEvents'
import navigation from 'epics/navigation'

export const rootEpic = combineEpics(fetchEventsEpic, navigation)

export const rootReducer = combineReducers({
  events,
  isFetchingEvents,
})
