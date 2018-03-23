const _compose = (f, g) => (...args) => f(g(...args))
export const compose = (...funcs) => funcs.reduce(_compose)

const _pipe = (f, g) => (...args) => g(f(...args))
export const pipe = (...funcs) => funcs.reduce(_pipe)
