import { aboutPageNavigated, homePageNavigated } from 'data/navigation'
import { combineEpics, ofType } from 'redux-observable'
import { fetchAlumni } from 'data/alumni'
import { fetchEvents } from 'data/events'
import { fetchInvolvements } from 'data/involvements'
import { fetchNewsletters } from 'data/newsletters'
import { map, takeUntil } from 'rxjs/operators'
import { merge } from 'rxjs'

const makeRequest = request => source$ => source$.pipe(map(request.request))

const requestUntilSuccess = (request, action$) => navigated$ =>
  navigated$.pipe(
    makeRequest(request),
    takeUntil(action$.pipe(ofType(request.succeeded))),
  )

export const aboutNavigation = action$ =>
  action$.pipe(
    ofType(aboutPageNavigated),
    map(fetchAlumni.request),
    takeUntil(action$.pipe(ofType(fetchAlumni.succeeded))),
  )

export const homeNavigation = action$ => {
  const navigation$ = action$.pipe(ofType(homePageNavigated))

  const events$ = navigation$.pipe(requestUntilSuccess(fetchEvents, action$))
  const involvements$ = navigation$.pipe(
    requestUntilSuccess(fetchInvolvements, action$),
  )
  const newsletters$ = navigation$.pipe(
    requestUntilSuccess(fetchNewsletters, action$),
  )

  return merge(events$, involvements$, newsletters$)
}

export default combineEpics(aboutNavigation, homeNavigation)
