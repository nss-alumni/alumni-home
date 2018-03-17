import { combineReducers } from 'redux-immutable'
import events from 'data/events'

export const rootReducer = combineReducers({
  events,
})
