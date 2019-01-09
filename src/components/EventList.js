import { List, ListItem } from '@material-ui/core'
import Event from 'components/Event'
import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

const timeSort = (e1, e2) => e1.startTime.isAfter(e2.startTime)

const eventCount = 5

const EventList = ({ events }) => (
  <List dense>
    {events
      .map(event => ({ ...event, startTime: moment(event.startTime) }))
      .sort(timeSort)
      .filter((_event, index) => index < eventCount)
      .map((event, index) => (
        <ListItem
          dense
          divider={index < events.size - 1}
          key={`${event.startTime}-${event.name}`}
        >
          <Event event={event} />
        </ListItem>
      ))}
  </List>
)

EventList.propTypes = {
  events: PropTypes.array,
}

EventList.defaultProps = {
  events: [],
}

export default EventList
