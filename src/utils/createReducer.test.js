import createReducer from './createReducer'

describe('the createReducer helper', () => {
  const handlers = {
    increment: state => state + 1,
    decrement: state => state - 1,
  }

  const initState = 0
  const reducer = createReducer(initState, handlers)

  const incrementAction = { type: 'increment' }
  const decrementAction = { type: 'decrement' }
  const otherAction = { type: 'other' }

  test('should error if not given an object of handlers', () => {
    expect(() => createReducer(null, null)).toThrowError()
    expect(() => createReducer(null, true)).toThrowError()
    expect(() => createReducer(null, 'garbage')).toThrowError()
    expect(() => createReducer(null, () => {})).toThrowError()
    expect(() => createReducer(null, handlers)).not.toThrowError()
  })

  test('should update state based with matching action types', () => {
    const state = 5
    const incrementedState = 6
    const decrementedState = 4
    expect(reducer(state, incrementAction)).toEqual(incrementedState)
    expect(reducer(state, decrementAction)).toEqual(decrementedState)
  })

  test('should default to identity if no matching handlers', () => {
    const state = 5
    expect(reducer(state, otherAction)).toEqual(state)
  })
})
