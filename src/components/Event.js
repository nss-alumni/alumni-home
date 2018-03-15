import Button from 'material-ui/Button'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Typography from 'material-ui/Typography'
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

const dateFormat = 'MMMM Do YYYY'

const Event = ({ classes, startDate, description, link, name }) => (
  <div className={classes.event}>
    <Typography variant="title">{name}</Typography>
    <Typography variant="caption">{startDate.format(dateFormat)}</Typography>
    <Typography>{description}</Typography>
    <Button color="primary" href={link}>
      More Info
    </Button>
  </div>
)

Event.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(moment).isRequired,
}

Event.defaultProps = {
  description: '',
}

export default injectSheet(sheet)(Event)
