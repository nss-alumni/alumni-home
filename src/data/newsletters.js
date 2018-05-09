import { Map, Record } from 'immutable'
import { Observable } from 'rxjs'
import { action, creator, errorCreator, get, replace } from 'utils/data'
import { createSelector } from 'reselect'
import NewslettersResource from 'resources/Newsletters'
import createReducer from 'utils/createReducer'

// RECORD
export const Newsletter = Record({
  subject: null,
  sentDate: null,
  body: null,
})

// KEY
export const key = 'newsletters'

// ACTIONS
export const FETCH_NEWSLETTERS = action(key, 'FETCH_NEWSLETTERS')
export const FETCH_NEWSLETTERS_SUCCEEDED = action(
  key,
  'FETCH_NEWSLETTERS_SUCCEEDED',
)
export const FETCH_NEWSLETTERS_FAILED = action(key, 'FETCH_NEWSLETTERS_FAILED')

// ACTION CREATORS
export const fetchNewsletters = creator(FETCH_NEWSLETTERS)
export const fetchNewslettersSucceeded = creator(
  FETCH_NEWSLETTERS_SUCCEEDED,
  'newsletters',
)
export const fetchNewslettersFailed = errorCreator(
  FETCH_NEWSLETTERS_FAILED,
  'Could not get newsletters.',
)

// REDUCER
export default createReducer(Map(), {
  [FETCH_NEWSLETTERS_SUCCEEDED]: replace('newsletters'),
})

// SELECTORS
export const getAllNewsletters = get('newsletters')
export const getLatestNewsletter = createSelector(
  [getAllNewsletters],
  newsletters =>
    newsletters
      .valueSeq()
      .sort((n1, n2) => n2.sentDate.localecompare(n1.sentDate))
      .first(),
)

const mapData = data =>
  Map(Object.values(data).map(n => [n.sentDate, Newsletter(n)]))

// EPICS
export const fetchNewslettersEpic = action$ =>
  action$.ofType(FETCH_NEWSLETTERS).mergeMap(() =>
    NewslettersResource.getAll()
      .map(mapData)
      .map(fetchNewslettersSucceeded)
      .catch(e => Observable.of(fetchNewslettersFailed(e))),
  )
