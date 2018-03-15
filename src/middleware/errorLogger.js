// NOTE(adam): provides automatic logging of error actions
const logger = _store => next => action => {
  if (action.error) {
    /* TODO(adam): add snackbar error displaying
     * see https://medium.com/@jacobp100/you-arent-using-redux-middleware-enough-94ffe991e6
     * could include message in meta tag with flag for api calls / snackbar triggers
     */
    console.error('Error action occured', action) // eslint-disable-line no-console
  }
  next(action)
}
export default logger
