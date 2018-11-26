import { Involvement as InvolvementRecord } from 'data/involvements'
import PropTypes from 'utils/propTypes'
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
  involvement: PropTypes.instanceOf(InvolvementRecord).isRequired,
}

Involvement.defaultProps = {
  className: undefined,
}

export default Involvement
