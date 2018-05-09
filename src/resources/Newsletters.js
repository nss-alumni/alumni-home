import { Set } from 'immutable'
import { compose } from 'utils/functional'
import Firebase from 'services/Firebase'
import request, { buildConnection, createResource } from 'utils/request'

const Newsletters = createResource({
  url: '/newsletters.json',
  allowedMethods: Set(['get']),
})

const withService = buildConnection({ service: Firebase })
const withResource = buildConnection({ resource: Newsletters })

const base = compose(withService, withResource)

const _getAll = buildConnection({ method: 'get' })

export default {
  getAll: () => request(compose(base, _getAll)),
}
