import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const Involvement = ({ className, involvement }) => (
  <div className={className}>
    <Typography variant="h6">{involvement.title}</Typography>
    <Typography>{involvement.description}</Typography>
    <Typography variant="subtitle1">Contact: {involvement.contact}</Typography>
  </div>
)

Involvement.propTypes = {
  className: PropTypes.string,
  involvement: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    contact: PropTypes.string,
  }).isRequired,
}

Involvement.defaultProps = {
  className: '',
}

export default Involvement
