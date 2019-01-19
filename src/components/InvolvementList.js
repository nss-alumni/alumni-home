import { makeStyles } from '@material-ui/styles'
import Involvement from './Involvement'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    '& > :not(:first-child)': {
      marginTop: 2 * spacing.unit,
    },
    '& > :not(:last-child)': {
      marginBottom: 2 * spacing.unit,
    },
  },
}))

const InvolvementList = ({ className, involvements }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.container} ${className}`}>
      {Object.values(involvements).map(i => (
        <Involvement
          className={classes.involvement}
          involvement={i}
          key={i.id}
        />
      ))}
    </div>
  )
}

InvolvementList.propTypes = {
  className: PropTypes.string,
  involvements: PropTypes.object.isRequired,
}

InvolvementList.defaultProps = {
  className: '',
}

export default InvolvementList
