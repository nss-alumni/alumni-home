import { Event as EventRecord } from 'data/events'
import Button from '@material-ui/core/Button'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'
import moment from 'moment'

/* eslint-disable no-magic-numbers */
const sheet = ({ spacing: { unit } }) => ({
  event: {
    marginBottom: 1.5 * unit,
    marginTop: 1 * unit,
  },
})
/* eslint-enable no-magic-numbers */

const dateFormat = 'MMMM Do YYYY h:mm a'

const Event = ({ classes, event }) => (
  <div className={classes.event}>
    <Typography variant="title">{event.name}</Typography>
    <Typography variant="caption">
      {moment(event.startTime).format(dateFormat)}
    </Typography>
    <Button color="primary" href={event.link}>
      More Info
    </Button>
  </div>
)

Event.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.instanceOf(EventRecord).isRequired,
}

export default injectSheet(sheet)(Event)
