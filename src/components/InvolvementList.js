import { withStyles } from '@material-ui/core'
import Involvement from './Involvement'
import PropTypes from 'prop-types'
import React from 'react'

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

const InvolvementList = ({ className, classes, involvements }) => (
  <div className={`${classes.container} ${className}`}>
    {Object.values(involvements).map(i => (
      <Involvement className={classes.involvement} involvement={i} key={i.id} />
    ))}
  </div>
)

InvolvementList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  involvements: PropTypes.object.isRequired,
}

InvolvementList.defaultProps = {
  className: '',
}

export default withStyles(styles)(InvolvementList)
