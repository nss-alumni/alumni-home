import { Involvement as InvolvementRecord } from 'data/involvements'
import Involvement from './Involvement'
import PropTypes from 'utils/propTypes'
import React from 'react'

const InvolvementList = ({ className, involvements }) => {
  const involvmentElements = involvements
    .toIndexedSeq()
    .map(i => <Involvement involvement={i} key={i.id} />)

  return <div className={className}>{involvmentElements}</div>
}

InvolvementList.propTypes = {
  className: PropTypes.string,
  involvements: PropTypes.iterableOf(InvolvementRecord).isRequired,
}

InvolvementList.defaultProps = {
  className: undefined,
}

export default InvolvementList
