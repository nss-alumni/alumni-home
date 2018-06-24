import { Map } from 'immutable'
import { creator, errorCreator, get, replace, type, withMeta } from './data'

test('creator creates an action creator', () => {
  const thingCreator = creator('typeString')
  const thingAction = { type: 'typeString', payload: {} }
  expect(thingCreator()).toEqual(thingAction)
})

test('creator takes parameters for the payload', () => {
  const thingCreator = creator('typeString', 'param1', 'param2')
  const thingAction = {
    type: 'typeString',
    payload: { param1: 'value1', param2: 'value2' },
  }
  expect(thingCreator('value1', 'value2')).toEqual(thingAction)
})

test('errorCreator is a creator that sets the error flag', () => {
  const errorAction = errorCreator()()
  expect(errorAction).toHaveProperty('error', true)
})

test('errorCreator sets the error as the payload', () => {
  const err = new Error()
  const errorAction = errorCreator()(err)
  expect(errorAction).toHaveProperty('payload', err)
})

test('errorCreator sets the error messages in meta', () => {
  const error400 = 'error message 400'
  const error500 = 'error message 500'
  const errorAction = errorCreator('erroType', error400, error500)()
  expect(errorAction).toHaveProperty('meta.error400', error400)
  expect(errorAction).toHaveProperty('meta.error500', error500)
})

test('withMeta sets the meta from an action creator', () => {
  const withTestMeta = withMeta({ foo: 'bar' })
  const testCreator = creator('testType', 'thing')
  const resultAction = {
    type: 'testType',
    payload: { thing: 'value' },
    meta: { foo: 'bar' },
  }
  expect(withTestMeta(testCreator)('value')).toEqual(resultAction)
})

test('type creates action type strings', () => {
  const expected = 'test/TYPE'
  const result = type('test')('TYPE')
  expect(result).toEqual(expected)
})

test("get selects a state's value by a key", () => {
  const state = Map({ thing: 'stuff' })
  const getThing = get('thing')
  expect(getThing(state)).toEqual('stuff')
})

test("replace returns an entry from the action's payload", () => {
  const replaceThing = replace('thing')
  const action = { payload: { thing: 'newStuff' } }
  const value = 'newStuff'
  const state = Map()
  expect(replaceThing(state, action)).toEqual(value)
})
