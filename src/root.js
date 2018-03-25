import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux-immutable'
import errorSnackbar from 'epics/errorSnackbar'
import events, { fetchEventsEpic } from 'data/events'
import isFetchingEvents from 'data/isFetchingEvents'
import navigation from 'epics/navigation'
import snackbarErrorMessage from 'data/snackbarErrorMessage'

export const rootEpic = combineEpics(fetchEventsEpic, navigation, errorSnackbar)

export const rootReducer = combineReducers({
  events,
  isFetchingEvents,
  snackbarErrorMessage,
})
