import { Map, Record } from 'immutable'
import { createSelector } from 'reselect'
import { get } from 'utils/data'
import ApiRequest from 'utils/ApiRequest'
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

export const fetchNewsletters = ApiRequest({
  moduleKey: key,
  actionBase: 'FETCH_NEWSLETTERS',
  requestParams: false,
  error400: 'Could not get newsletters',
  apiFn: NewslettersResource.getAll,
  mapResponseDataFn: data =>
    Map(Object.entries(data).map(([k, v]) => [k, Newsletter(v)])),
})

// REDUCER
export default createReducer(Map(), {
  [fetchNewsletters.succeeded]: (_state, { payload }) => payload,
})

// SELECTORS
export const getAllNewsletters = get('newsletters')
export const getLatestNewsletter = createSelector(
  [getAllNewsletters],
  newsletters =>
    newsletters
      .valueSeq()
      .sort((n1, n2) => n2.sentDate.localeCompare(n1.sentDate))
      .first(),
)
