import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux-immutable'
import alumni, { fetchAlumniEpic } from 'data/alumni'
import errorSnackbar from 'epics/errorSnackbar'
import events, { fetchEventsEpic } from 'data/events'
import isFetchingEvents from 'data/isFetchingEvents'
import navigation from 'epics/navigation'
import snackbarErrorMessage from 'data/snackbarErrorMessage'

export const rootEpic = combineEpics(
  fetchAlumniEpic,
  fetchEventsEpic,
  navigation,
  errorSnackbar,
)

export const rootReducer = combineReducers({
  alumni,
  events,
  isFetchingEvents,
  snackbarErrorMessage,
})
