import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic, rootReducer } from './root'
import errorLogger from 'middleware/errorLogger'
import fsaLinter from 'middleware/fsaLinter'

// NOTE(adam): if the redux extension exists, attach it to the store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware(rootEpic)

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(fsaLinter, errorLogger, epicMiddleware)),
)
