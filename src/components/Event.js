import { Button, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'

/* eslint-disable no-magic-numbers */
const styles = ({ spacing: { unit } }) => ({
  event: {
    marginBottom: 1.5 * unit,
    marginTop: 1 * unit,
  },
})
/* eslint-enable no-magic-numbers */

const dateFormat = 'MMMM Do YYYY h:mm a'

const Event = ({ classes, event }) => (
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

Event.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    startTime: PropTypes.instanceOf(moment),
  }).isRequired,
}

export default withStyles(styles)(Event)
