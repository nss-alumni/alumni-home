import { Map } from 'immutable'
import { creator, get, scopedCreator, type } from './data'

test('type creates action type strings', () => {
  const expected = 'test/TYPE'
  const result = type('test')('TYPE')
  expect(result).toEqual(expected)
})

test("creator's toString returns the action type type", () => {
  const THING = type('test')('THING')
  const thingCreator = creator(THING)
  expect(thingCreator.toString()).toEqual(THING)
})

test('creator creates an action creator', () => {
  const thingCreator = creator('typeString')
  const thingAction = { type: 'typeString' }
  expect(thingCreator()).toEqual(thingAction)
})

test('creator implements an identity function by default', () => {
  const thingCreator = creator('typeString')
  const thingAction = { type: 'typeString', payload: 'a message' }
  expect(thingCreator('a message')).toEqual(thingAction)
})

test('creator accepts false to enforce no payload', () => {
  const thingCreator = creator('typeString', false)
  const thingAction = { type: 'typeString' }
  expect(thingCreator('a message')).toEqual(thingAction)
})

test('creator accepts a function to create the payload', () => {
  const thingCreator = creator('typeString', value => ({ value }))
  const thingAction = { type: 'typeString', payload: { value: 'a message' } }
  expect(thingCreator('a message')).toEqual(thingAction)
})

test('creator accepts an array for positional payload property arguments', () => {
  const thingCreator = creator('typeString', ['first', 'second'])
  const thingAction = {
    type: 'typeString',
    payload: { first: 'a message', second: 2 },
  }
  expect(thingCreator('a message', 2)).toEqual(thingAction)
})

test('creator does not add a meta property by default', () => {
  const thingCreator = creator('typeString')
  expect(thingCreator()).not.toHaveProperty('meta')
})

test('creator passes same arguments to payload and meta functions', () => {
  const thingCreator = creator('typeString', ['a', 'b', 'c'], ['a', 'b', 'c'])
  const thingAction = thingCreator(1, 2, 3) // eslint-disable-line no-magic-numbers
  expect(thingAction.payload).toEqual(thingAction.meta)
})

test('creator sets error if the payload is an error', () => {
  const thingCreator = creator('typeString')
  expect(thingCreator(new Error())).toHaveProperty('error', true)
})

test('scopedCreator combines the key with the type', () => {
  const key = 'test'
  const typeName = 'THING'
  const fullType = type(key)(typeName)
  const thingCreator = scopedCreator(key)(typeName)
  expect(thingCreator.toString()).toEqual(fullType)
})

test("get selects a state's value by a key", () => {
  const state = Map({ thing: 'stuff' })
  const getThing = get('thing')
  expect(getThing(state)).toEqual('stuff')
})
