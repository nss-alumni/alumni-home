import { ABOUT_PAGE_NAVIGATED, HOME_PAGE_NAVIGATED } from 'data/navigation'
import { combineEpics, ofType } from 'redux-observable'
import { fetchAlumni } from 'data/alumni'
import { fetchEvents } from 'data/events'
import { fetchInvolvements } from 'data/involvements'
import { fetchNewsletters } from 'data/newsletters'
import { mapTo, takeUntil } from 'rxjs/operators'
import { merge } from 'rxjs'

// TODO(adam): this could be generalized with rxjs
const requestUntilSuccess = action$ => request =>
  action$.pipe(
    mapTo(request.request()),
    takeUntil(action$.pipe(ofType(request.SUCCEEDED))),
  )

export const aboutNavigation = action$ => {
  const navigation$ = action$.pipe(ofType(ABOUT_PAGE_NAVIGATED))

  return requestUntilSuccess(navigation$)(fetchAlumni)
}

export const homeNavigation = action$ => {
  const navigation$ = action$.pipe(ofType(HOME_PAGE_NAVIGATED))

  const apiCalls = [fetchEvents, fetchInvolvements, fetchNewsletters].map(
    requestUntilSuccess(navigation$),
  )

  return merge(...apiCalls)
}

export default combineEpics(aboutNavigation, homeNavigation)
