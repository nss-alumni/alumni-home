import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux-immutable'
import alumni, { fetchAlumniEpic } from 'data/alumni'
import errorSnackbar from 'epics/errorSnackbar'
import events, { fetchEventsEpic } from 'data/events'
import involvements, { fetchInvolvementsEpic } from 'data/involvements'
import isFetchingEvents from 'data/isFetchingEvents'
import navigation from 'epics/navigation'
import newsletters, { fetchNewslettersEpic } from 'data/newsletters'
import requestStatus from 'data/requestStatus'
import snackbarErrorMessage from 'data/snackbarErrorMessage'

export const rootEpic = combineEpics(
  fetchAlumniEpic,
  fetchEventsEpic,
  fetchInvolvementsEpic,
  fetchNewslettersEpic,
  navigation,
  errorSnackbar,
)

export const rootReducer = combineReducers({
  alumni,
  events,
  involvements,
  isFetchingEvents,
  newsletters,
  snackbarErrorMessage,
  requestStatus,
})
