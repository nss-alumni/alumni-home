import { combineReducers, createStore } from 'redux'

const reducer = combineReducers({
  // TODO(adam): individual reducers added here
})

export default createStore(
  reducer,
  // NOTE(adam): if the redux extension exists, attach it to the store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
