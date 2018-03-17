import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux-immutable'
import events from 'data/events'

export const rootEpic = combineEpics()

export const rootReducer = combineReducers({
  events,
})
