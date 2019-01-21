import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(({ palette }) => ({
  statement: {
    color: palette.primary.main,
    textAlign: 'center',
  },
}))

const MissionStatement = ({ className }) => {
  const classes = useStyles()
  return (
    <Typography className={`${classes.statement} ${className}`} variant="h5">
      Our mission: To support NSS alumni post graduation through mentorship
      opportunities, continued education, and sense of community.
    </Typography>
  )
}

MissionStatement.propTypes = {
  className: PropTypes.string,
}

MissionStatement.defaultProps = {
  className: '',
}

export default MissionStatement
