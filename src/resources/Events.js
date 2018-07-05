import { Set } from 'immutable'
import { compose } from 'utils/functional'
import Api from 'services/Api'
import request, { buildConnection, createResource } from 'utils/request'

const Events = createResource({
  url: '/events',
  allowedMethods: Set(['get']),
})

const withService = buildConnection({ service: Api })
const withResource = buildConnection({ resource: Events })

const base = compose(
  withService,
  withResource,
)

const _getAll = buildConnection({ method: 'get' })

export default {
  getAll: () =>
    request(
      compose(
        base,
        _getAll,
      ),
    ),
}
