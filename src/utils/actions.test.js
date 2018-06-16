import { isError, meta, payload } from './actions'

describe('the action helper functions', () => {
  const payloadData = 'stuff'
  const metaData = 'gibberish'
  const okAction = { type: 'actionType', meta: metaData, payload: payloadData }
  const errorAction = {
    type: 'actionType',
    meta: metaData,
    payload: payloadData,
    error: true,
  }

  test('payload extracts the payload from an action', () => {
    expect(payload(okAction)).toEqual(payloadData)
    expect(payload(errorAction)).toEqual(payloadData)
  })

  test('meta extracts the meta from an action', () => {
    expect(meta(okAction)).toEqual(metaData)
    expect(meta(errorAction)).toEqual(metaData)
  })

  test('isError checks if the action is an error action', () => {
    expect(isError(okAction)).toBeFalsy()
    expect(isError(errorAction)).toBeTruthy()
  })
})
