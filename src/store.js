import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './root'
import errorLogger from 'middleware/errorLogger'
import fsaLinter from 'middleware/fsaLinter'

// NOTE(adam): if the redux extension exists, attach it to the store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(fsaLinter, errorLogger)),
)
