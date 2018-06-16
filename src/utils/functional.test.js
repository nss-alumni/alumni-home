import { compose, pipe } from './functional'

describe('functional helper functions', () => {
  const double = x => x * 2
  const minus1 = x => x - 1

  test('compose combines right-to-left', () => {
    const fn = compose(
      double,
      minus1,
    )
    expect(fn(2)).toEqual(2)
  })

  test('pipe combines left-to-right', () => {
    const fn = pipe(
      double,
      minus1,
    )
    expect(fn(2)).toEqual(3) // eslint-disable-line no-magic-numbers
  })
})
