// NOTE(adam): provides automatic logging of error actions
const logger = _store => next => action => {
  if (action.error) {
    console.error('Error action occured', action) // eslint-disable-line no-console
  }
  next(action)
}
export default logger
