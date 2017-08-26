import Divider from 'material-ui/Divider'
import Event from 'components/Event'
import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

const dividerStyle = {
  'margin': '1rem 0.5rem',
}

const dateSort = (e1, e2) => e1.date.isAfter(e2.date)

// NOTE(adam): the indent rule is a bit silly sometimes
/* eslint-disable indent */
const EventList = ({ list }) => (
  <div>
    {list
      .map(event => ({ ...event, date: moment(event.date) }))
      .sort(dateSort)
      .reduce((resultList, event, i, initalList) =>
        [...resultList,
          <Event
            date={event.date}
            description={event.description}
            key={`${event.date.format()}-${event.name}`}
            link={event.link}
            name={event.name}
          />,
        ].concat(i < initalList.length - 1 ? <Divider key={`div-${i}`} style={dividerStyle} /> : ''),
        []
      )
    }
  </div>
)

EventList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default EventList
