import { Record } from 'immutable'

export const Service = Record({
  url: null,
})

const createService = ({ url, ...params }) =>
  Service({
    url: url.replace(/\/$/, ''),
    ...params,
  })

export default createService
