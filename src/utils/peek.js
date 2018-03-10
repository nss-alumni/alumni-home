/* eslint-disable no-console, no-sequences */

/**
 * Logs a value and returns it. Useful for testing in promise chains
 *
 * @param {*} data - the data to log
 * @returns {*} the same data being input
 */
const peek = data => (console.log(data), data)

export const peekDebug = data => (console.debug(data), data)
export const peekInfo = data => (console.info(data), data)
export const peekWarn = data => (console.warn(data), data)
export const peekError = data => (console.error(data), data)

export default peek
