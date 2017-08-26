import LinkButton from 'components/LinkButton'
import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'
import injectSheet from 'react-jss'
import moment from 'moment'

const sheet = {
  date: {
    'color': colors.faintText,
    'margin': 0,
  },
  description: {
    'text-size': '1.1rem',
  },
  event: {
    'margin-bottom': '1.5rem',
    'margin-top': '1rem',
  },
  name: {
    'font-weight': 600,
    'font-size': '1.6rem',
    'margin-bottom': '.25rem',
  },
}

const dateFormat = 'MMMM Do YYYY'

const Event = ({
  classes,
  date,
  description,
  link,
  name,
}) => (
  <div className={classes.event}>
    <p className={classes.name}>{name}</p>
    <p className={classes.date}>{date.format(dateFormat)}</p>
    <p className={classes.description}>{description}</p>
    <LinkButton url={link}>MORE INFO</LinkButton>
  </div>
)

Event.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default injectSheet(sheet)(Event)
