import { ActionsObservable } from 'redux-observable'
import { aboutNavigation, homeNavigation } from './navigation'
import { aboutPageNavigated, homePageNavigated } from 'data/navigation'
import { fetchAlumni } from 'data/alumni'
import { fetchEvents } from 'data/events'
import { fetchInvolvements } from 'data/involvements'
import { fetchNewsletters } from 'data/newsletters'
import { tap, toArray } from 'rxjs/operators'

/* eslint-disable no-console */
test('home navigation fetchs events, involvements, and newsletters', done => {
  const homeNavigated$ = ActionsObservable.of(homePageNavigated())
  homeNavigation(homeNavigated$)
    .pipe(
      toArray(),
      tap(action =>
        expect(action).toEqual([
          fetchEvents.request(),
          fetchInvolvements.request(),
          fetchNewsletters.request(),
        ]),
      ),
    )
    .subscribe(undefined, console.error, done)
})

test('about navigation fetchs the alumni profiles', done => {
  const aboutNavigated$ = ActionsObservable.of(aboutPageNavigated())
  aboutNavigation(aboutNavigated$)
    .pipe(tap(action => expect(action).toEqual(fetchAlumni.request())))
    .subscribe(undefined, console.error, done)
})
