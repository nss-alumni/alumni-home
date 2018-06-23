import { ActionsObservable } from 'redux-observable'
import { aboutNavigation, homeNavigation } from './navigation'
import { aboutPageNavigated, homePageNavigated } from 'data/navigation'
import { fetchAlumni } from 'data/alumni'
import { fetchEvents } from 'data/events'
import { fetchInvolvements } from 'data/involvements'
import { fetchNewsletters } from 'data/newsletters'

/* eslint-disable no-console */
describe('the navigation epics', () => {
  test('home should fetch events, involvements, and newsletters', done => {
    const homeNavigated$ = ActionsObservable.of(homePageNavigated())
    homeNavigation(homeNavigated$)
      .toArray()
      .do(action =>
        expect(action).toEqual([
          fetchEvents.request(),
          fetchInvolvements.request(),
          fetchNewsletters.request(),
        ]),
      )
      .subscribe(undefined, console.error, done)
  })

  test('about should fetch the alumni profiles', done => {
    const aboutNavigated$ = ActionsObservable.of(aboutPageNavigated())
    aboutNavigation(aboutNavigated$)
      .do(action => expect(action).toEqual(fetchAlumni.request()))
      .subscribe(undefined, console.error, done)
  })
})
