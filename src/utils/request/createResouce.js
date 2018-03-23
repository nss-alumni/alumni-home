import { Record, Set } from 'immutable'

export const Resource = Record({
  url: null,
  allowedMethods: Set(),
})

export default ({ url, ...params }) =>
  Resource({
    url: url.replace(/\/$/, ''),
    ...params,
  })
