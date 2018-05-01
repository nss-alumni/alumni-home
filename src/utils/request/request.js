import { Record } from 'immutable'
import { ajax } from 'rxjs/observable/dom/ajax'

export const Conn = Record({
  service: null,
  resource: null,
  method: null,
})

export const buildConnection = params => (conn = Conn()) =>
  conn.mergeWith(keepIfNotNull, params)

const buildRequest = conn => {
  const { service, resource, ...connParams } = conn.toJS()
  return ajax({ ...connParams, url: `${service.url}${resource.url}` })
}

const keepIfNotNull = (a, b) => (b ? b : a)

export default connOrBuilder => {
  const conn =
    typeof connOrBuilder === 'function' ? connOrBuilder() : connOrBuilder

  // NOTE(adam): catching invalid resource usage early
  if (!conn.resource.allowedMethods.includes(conn.method))
    throw new Error(
      `"${conn.method}" is not allowed for resource ${conn.service.url}${
        conn.resource.url
      }. Only ${conn.resource.allowedMethods.toJS().join()} are allowed.`,
    )

  return buildRequest(conn).map(({ response }) => response)
}
