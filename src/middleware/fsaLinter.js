// NOTE(adam): ensure flux-standard-actions, based on https://github.com/maxmechanic/redux-fsa-linter
const validActionKeys = ['type', 'payload', 'error', 'meta']

const isValidKey = key => validActionKeys.includes(key)

const isFSA = action => {
  if (typeof action !== 'object') return false
  if (typeof action.type !== 'string') return false
  if (!Object.keys(action).every(isValidKey)) return false
  return true
}

const linter = _store => next => action => {
  // TODO(adam): add check to skip if not dev
  if (!isFSA(action)) {
    console.warn('Action is not an FSA:', action) // eslint-disable-line no-console
  }
  return next(action)
}

export default linter
