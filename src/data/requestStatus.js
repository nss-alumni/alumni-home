import { Set } from 'immutable'
import { get } from 'utils/data'
import { pipe } from 'utils/functional'

export default (state = Set(), action) => {
  const api = action.meta && action.meta.api

  if (!api) return state

  switch (api.requestStep) {
    case 'init':
      return state.add(api.requestKey)
    case 'success':
      return state.delete(api.requestKey)
    case 'fail':
      return state.delete(api.requestKey)
    default:
      return state
  }
}

export const getRequestStatus = get('requestStatus')
export const isInProgress = ({ requestKey }) =>
  pipe(getRequestStatus, state => state.has(requestKey))
