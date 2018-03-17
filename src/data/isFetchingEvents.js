import {
  FETCH_EVENTS,
  FETCH_EVENTS_FAILED,
  FETCH_EVENTS_SUCCEEDED,
} from './events'
import createReducer from 'utils/createReducer'

// REDUCER
export default createReducer(false, {
  [FETCH_EVENTS]: _state => true,
  [FETCH_EVENTS_SUCCEEDED]: _state => false,
  [FETCH_EVENTS_FAILED]: _state => false,
})

// SELECTORS
export const isFetchingEvents = state => state.get('isFetchingEvents')
