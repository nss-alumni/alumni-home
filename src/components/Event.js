import LinkButton from 'components/LinkButton'
import React from 'react'
import { colors } from 'theme'
import injectSheet from 'react-jss'

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

export default injectSheet(sheet)(Event)
