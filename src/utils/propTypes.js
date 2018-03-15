// NOTE(adam): combining the PropTypes allows for a single import for either type
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'

export default { ...ImmutablePropTypes, ...PropTypes }
