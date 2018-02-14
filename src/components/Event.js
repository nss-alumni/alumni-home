import { colors } from 'theme'
import LinkButton from 'components/LinkButton'
import PropTypes from 'prop-types'
import React from 'react'
import injectSheet from 'react-jss'
import moment from 'moment'

const sheet = {
  date: {
    color: colors.faintText,
    margin: 0,
  },
  description: {
    fontSize: '1.1rem',
  },
  event: {
    marginBottom: '1.5rem',
    marginTop: '1rem',
  },
  name: {
    fontWeight: 600,
    fontSize: '1.6rem',
    marginBottom: '.25rem',
  },
}

const dateFormat = 'MMMM Do YYYY'

const Event = ({ classes, startDate, description, link, name }) => (
  <div className={classes.event}>
    <p className={classes.name}>{name}</p>
    <p className={classes.date}>{startDate.format(dateFormat)}</p>
    <p className={classes.description}>{description}</p>
    <LinkButton url={link}>MORE INFO</LinkButton>
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
