/**
 * An action to be handled by redux
 * @typedef {Object} Action
 * @property {!string} type - the action type to be handled by a reducer
 * @property {?*} payload - the data associated with the action. If error is
 * `true`, the payload should be an error object.
 * @property {?boolean} error - if the action represents an error, error should
 * be set to `true`
 * @property {?*} meta - any extra information not a part of the payload
 */

/**
 * The application state
 * @typedef {Object} State
 */

/**
 * A function to update state from an action
 * @typedef {function(State, Action):State} ActionHandler
 * @param {State} state - the current application state
 * @param {Action} action - the action being applied to state
 * @returns {State} the updated application state
 */

/**
 * Checks parameters given to the create reducer function.
 *
 * @param {*} initState - the inital local state of the reducer
 * @param {Object.<string, ActionHandler>} handlers - a map of the action
 * handling functions for the reducer
 * @returns {boolean} whether or not the operation was successful
 */
const checkCreateReducerParams = (initState, handlers) => {
  if (typeof handlers !== 'object') {
    throw new Error(`
      createReducer was passed incorrect arguments.

      The correct signature is:
        (initState: any, handlers: object) => reducer: func

      The arguments passed in are:
        ${initState}, ${handlers}
    `)
  }
}

/**
 * A fallback identity handler
 *
 * @param {*} state - the local reducer state
 * @returns {*} the same reducer state
 */
const defaultHandler = state => state

/*
 * A helper function for creating a redux reducer function
 *
 * @param {*} initState - the inital local state of the reducer
 * @param {Object.<string, ActionHandler} handlers - a map of the action
 * handling functions for the reducer
 * @returns {function(*, Action):*} the reducer function. It applies matching
 * incoming actions to the reducer state, returning the updated state.
*/
const createReducer = (initState, handlers) => {
  checkCreateReducerParams(initState, handlers)

  const reducer = (state = initState, action) => {
    const handler = handlers[action.type] || defaultHandler
    return handler(state, action)
  }

  return reducer
}

export default createReducer
