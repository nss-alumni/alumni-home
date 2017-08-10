import React from 'react'
import injectSheet from 'react-jss'
import { colors } from 'theme'

const sheet = {
  date: {
    'color': colors.faintText,
    'margin': 0,
  },
  event: {
    'margin-top': '0.5rem',
    'margin-bottom': '0.5rem',
  },
  name: {
    'text-size': '1.5rem',
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
    <h2 className={classes.name}>{name}</h2>
    <p className={classes.date}>{date.format(dateFormat)}</p>
    <p>{description}</p>
    <a href={link}>More Info</a>
  </div>
)

export default injectSheet(sheet)(Event)
