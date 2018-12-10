import { Event as EventRecord } from 'data/events'
import { List as IList } from 'immutable'
import { List, ListItem } from '@material-ui/core'
import Event from 'components/Event'
import PropTypes from 'utils/propTypes'
import React from 'react'
import moment from 'moment'

const timeSort = (e1, e2) => e1.startTime.isAfter(e2.startTime)

const eventCount = 5

const EventList = ({ events }) => (
  <List dense>
    {events
      .map(event => event.set('startTime', moment(event.startTime)))
      .sort(timeSort)
      .take(eventCount)
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
  events: PropTypes.listOf(PropTypes.instanceOf(EventRecord)),
}

EventList.defaultProps = {
  events: IList(),
}

export default EventList
