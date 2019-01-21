import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

/* eslint-disable no-magic-numbers */
const useStyles = makeStyles(({ spacing: { unit } }) => ({
  event: {
    marginBottom: 1.5 * unit,
    marginTop: 1 * unit,
  },
}))
/* eslint-enable no-magic-numbers */

const dateFormat = 'MMMM Do YYYY h:mm a'

const Event = ({ event }) => {
  const classes = useStyles()

  return (
    <div className={classes.event}>
      <Typography variant="h6">{event.name}</Typography>
      <Typography variant="caption">
        {moment(event.startTime).format(dateFormat)}
      </Typography>
      <Button color="primary" href={event.link}>
        More Info
      </Button>
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    startTime: PropTypes.instanceOf(moment),
  }).isRequired,
}

export default Event
