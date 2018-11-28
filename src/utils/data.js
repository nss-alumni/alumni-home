/* eslint-disable no-shadow */

/**
 * A simple function for creating action strings.
 *
 * @param {string} key - the data module key
 * @returns {function(string):string} a curried function expecting the action
 * name that returns the formatted action string
 */
export const type = key => name => `${key}/${name}`

/**
 * Create a function to create an object with positionally set argument labels.
 *
 * @param {...string} labels - the labels for the positional arguments
 * @returns {function(...*):Object} a function that creates an object by
 * positionally labeling the arguments
 */
export const positional = (...labels) => (...values) =>
  labels.reduce(
    (payload, label, index) => ({ ...payload, [label]: values[index] }),
    {},
  )

/**
 * A function that creates an action
 * @typedef {function(...*):Action} ActionCreator
 * @param {...*} args - values to be handled by the action
 * @returns {Action} the action with the provided values
 */

/**
 * The set of options for an action creator
 * @typedef {(boolean|function|string[])} creatorParamOption
 */

/**
 * Get an action param handler based on the option provided
 *
 * * a function argument returns itself
 * * an array returns  the positional with it spread as arguments
 * * false returns undefined
 * * default returns an identity function
 *
 * @param {creatorParamOption=} option - the option to use to get the handler
 * @returns {function|undefined} a function to handle a param or undefined if it
 * should be ignored
 */
const handleOption = option => {
  if (option === false) return undefined
  if (typeof option === 'function') return option
  if (Array.isArray(option)) return positional(...option)
  if (option !== undefined && option !== true) {
    console.warn('Unexpected creator option:', option) // eslint-disable-line no-console
  }
  return v => v
}

/**
 * Constructs an action creator
 *
 * @param {string} type - an action type
 * @param {creatorParamOption=} payloadOption - the option for the payload
 * @param {creatorParamOption} [metaOption=false] - the option for the meta
 * @returns {ActionCreator} the constructed action creator
 */
export const creator = (type, payloadOption, metaOption = false) => {
  const payloadHandler = handleOption(payloadOption)
  const metaHandler = handleOption(metaOption)

  const creatorFunction = (...params) => {
    const payload = payloadHandler ? payloadHandler(...params) : undefined
    const meta = metaHandler ? metaHandler(...params) : undefined
    const error = params[0] instanceof Error

    return {
      type,
      ...(payload === undefined ? {} : { payload }),
      ...(meta === undefined ? {} : { meta }),
      ...(error ? { error } : {}),
    }
  }

  creatorFunction.toString = () => type
  return creatorFunction
}

/**
 * Scopes an action creator to a key
 *
 * @param {string} key - the data module key
 * @returns {function} a creator that combines its type argument with the key
 */
export const scopedCreator = key => (typeName, ...params) => {
  const fullType = type(key)(typeName)
  return creator(fullType, ...params)
}

/**
 * Create a selector that gets the data at key from state.
 *
 * @param {string} key - the data key
 * @returns {function(State):*} the data at the key
 */
export const get = key => state => state.get(key)
