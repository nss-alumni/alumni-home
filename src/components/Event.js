import React from 'react'
import injectSheet from 'react-jss'

const sheet = {
  event: {
    'margin': '0.5rem',
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
    <h2>{name}</h2>
    <p>{date.format(dateFormat)}</p>
    <p>{description}</p>
    <a href={link}>More Info</a>
  </div>
)

export default injectSheet(sheet)(Event)
