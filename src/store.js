import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import errorLogger from 'middleware/errorLogger'
import events from 'data/events'
import fsaLinter from 'middleware/fsaLinter'

const reducer = combineReducers({
  // TODO(adam): individual reducers added here
})

// NOTE(adam): if the redux extension exists, attach it to the store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(fsaLinter, errorLogger)),
)
