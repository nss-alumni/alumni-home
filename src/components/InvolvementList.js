import { Involvement as InvolvementRecord } from 'data/involvements'
import Involvement from './Involvement'
import PropTypes from 'utils/propTypes'
import React from 'react'
import injectSheet from 'react-jss'

/* eslint-disable magic-numbers */
const styles = ({ spacing }) => ({
  container: {
    '& > :not(:first-child)': {
      marginTop: 2 * spacing.unit,
    },
    '& > :not(:last-child)': {
      marginBottom: 2 * spacing.unit,
    },
  },
})
/* eslint-enable magic-numbers */

const InvolvementList = ({ className, classes, involvements }) => {
  const involvmentElements = involvements
    .toIndexedSeq()
    .map(i => (
      <Involvement className={classes.involvement} involvement={i} key={i.id} />
    ))

  return (
    <div className={`${classes.container} ${className}`}>
      {involvmentElements}
    </div>
  )
}

InvolvementList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  involvements: PropTypes.iterableOf(InvolvementRecord).isRequired,
}

InvolvementList.defaultProps = {
  className: undefined,
}

export default injectSheet(styles)(InvolvementList)
