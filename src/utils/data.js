/* eslint-disable no-shadow */

/**
 * A simple function for creating action strings.
 *
 * @param {string} key - the data key
 * @param {string} name - the action name
 * @returns {string} the formatted action string
 */
export const type = (key, name) => `${key}/${name}`

/**
 * A function that creates an action
 * @typedef {function(...*):Action} ActionCreator
 * @param {...*} args - values to be handled by the action
 * @returns {Action} the action with the provided values
 */

/**
 * A higher order function that adds meta information to an action creator
 *
 * @param {Object} - a meta object
 * @returns {ActionCreator} the contextualized action creator
 */
export const withMeta = extraMeta => fn => (...args) => {
  const { meta, ...actionDetails } = fn(...args)
  return {
    ...actionDetails,
    meta: { ...meta, ...extraMeta },
  }
}

/**
 * Constructs an action creator
 *
 * @param {string} type - an action type
 * @param {string[]} argNames - the names of arguments the creator will expect
 * @param {Object} [context] - the contextual properties of the action
 * @param {Object} context.meta - meta attributes for the action
 * @param {boolean} context.error - a flag if the action represents an error
 * @returns {ActionCreator} the constructed action creator
 */
const creatorBuilder = (type, argNames, { meta, error } = {}) => (...args) => {
  if (argNames.lengh === 0) return { type, payload: null }

  const payload = error
    ? args[0]
    : argNames.reduce((p, name, index) => ({ ...p, [name]: args[index] }), {})
  return { type, payload, meta, error }
}

/**
 * Builds a generic action creator
 *
 * @param {string} type - an action type
 * @param {...*} [argNames] - names for the action creator's arguments
 * @returns {ActionCreator} the constructed action creator
 */
export const creator = (type, ...argNames) => creatorBuilder(type, argNames)

/**
 * Builds an error action creator
 *
 * @param {string} type - an action type
 * @param {string} message - the descriptive message for the error
 * @returns {ActionCreator} the constructed action creator
 */
export const errorCreator = (type, error400, error500) =>
  creatorBuilder(type, [], { error: true, meta: { error400, error500 } })

/**
 * A reducer function to replace reducer state with the data in the action
 *
 * @param {string} key - the payload's data key
 * @returns {function(*, Object.<string, *>):*} a function that returns the
 * data at the specified key within the payload
 */
export const replace = key => (_state, { payload: { [key]: value } }) => value

/**
 * Create a selector that gets the data at key from state.
 *
 * @param {string} key - the data key
 * @returns {function(State):*} the data at the key
 */
export const get = key => state => state.get(key)
