import { EVENTS_PAGE_NAVIGATED } from 'data/navigation'
import { fetchEvents } from 'data/events'

export default action$ =>
  action$
    .ofType(EVENTS_PAGE_NAVIGATED)
    .first()
    .mapTo(fetchEvents())
