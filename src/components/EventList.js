import Divider from 'material-ui/Divider'
import Event from 'components/Event'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Typography from 'material-ui/Typography'
import injectSheet from 'react-jss'
import moment from 'moment'

/* eslint-disable no-magic-numbers */
const sheet = ({ spacing: { unit } }) => ({
  divider: {
    margin: `${1 * unit} ${0.5 * unit}`,
  },
})
/* eslint-enable no-magic-numbers */

const dateSort = (e1, e2) => e1.startDate.isAfter(e2.startDate)

const EventList = ({ classes, events, status }) => (
  <div>
    <Typography>{status}</Typography>
    {events
      .map(event => ({ ...event, startDate: moment(event.startDate) }))
      .sort(dateSort)
      .reduce(
        (resultList, event, i, initalList) =>
          [
            ...resultList,
            <Event
              description={event.description}
              key={`${event.startDate.format()}-${event.name}`}
              link={event.link}
              name={event.name}
              startDate={event.startDate}
            />,
          ].concat(
            i < initalList.length - 1 ? (
              <Divider
                className={classes.divider}
                key={`${event.startDate.format()}-${event.name}-divider`}
              />
            ) : null,
          ),
        [],
      )}
  </div>
)

EventList.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.array,
  status: PropTypes.string,
}

EventList.defaultProps = {
  events: [],
  status: '',
}

export default injectSheet(sheet)(EventList)
