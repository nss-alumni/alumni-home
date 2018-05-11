import { Involvement as InvolvementRecord } from 'data/involvements'
import { Typography } from 'material-ui'
import PropTypes from 'utils/propTypes'
import React from 'react'

const Involvement = ({ className, involvement }) => (
  <div className={className}>
    <Typography variant="title">{involvement.title}</Typography>
    <Typography>{involvement.description}</Typography>
    <Typography variant="subheading">Contact: {involvement.contact}</Typography>
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
