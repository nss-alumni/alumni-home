import {
  ABOUT_PAGE_NAVIGATED,
  EVENTS_PAGE_NAVIGATED,
  HOME_PAGE_NAVIGATED,
} from 'data/navigation'
import { combineEpics } from 'redux-observable'
import { fetchAlumni } from 'data/alumni'
import { fetchEvents } from 'data/events'
import { fetchNewsletters } from 'data/newsletters'

const eventsNavigation = action$ =>
  action$
    .ofType(EVENTS_PAGE_NAVIGATED)
    .first()
    .mapTo(fetchEvents())

const aboutNavigation = action$ =>
  action$
    .ofType(ABOUT_PAGE_NAVIGATED)
    .first()
    .mapTo(fetchAlumni())

const homeNavigation = action$ =>
  action$
    .ofType(HOME_PAGE_NAVIGATED)
    .first()
    .mapTo(fetchNewsletters())

export default combineEpics(aboutNavigation, eventsNavigation, homeNavigation)
