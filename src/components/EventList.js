import { Event as EventRecord } from 'data/events'
import { List } from 'immutable'
import Divider from 'material-ui/Divider'
import Event from 'components/Event'
import PropTypes from 'utils/propTypes'
import React from 'react'
import injectSheet from 'react-jss'
import moment from 'moment'

/* eslint-disable no-magic-numbers */
const sheet = ({ spacing: { unit } }) => ({
  divider: {
    margin: `${1 * unit} ${0.5 * unit}`,
  },
})
/* eslint-enable no-magic-numbers */

const timeSort = (e1, e2) => e1.startTime.isAfter(e2.startTime)

const eventCount = 5

const EventList = ({ classes, events }) => (
  <div>
    {events
      .map(event => event.set('startTime', moment(event.startTime)))
      .sort(timeSort)
      .take(eventCount)
      .reduce(
        (resultList, event, i, initalList) =>
          [
            ...resultList,
            <Event event={event} key={`${event.startTime}-${event.name}`} />,
          ].concat(
            i < initalList.size - 1 ? (
              <Divider
                className={classes.divider}
                key={`${event.startTime}-${event.name}-divider`}
              />
            ) : null,
          ),
        [],
      )}
  </div>
)

EventList.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.listOf(PropTypes.instanceOf(EventRecord)),
}

EventList.defaultProps = {
  events: List(),
}

export default injectSheet(sheet)(EventList)
