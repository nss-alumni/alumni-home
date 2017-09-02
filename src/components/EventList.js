import Divider from 'material-ui/Divider'
import Event from 'components/Event'
import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

const dividerStyle = {
  'margin': '1rem 0.5rem',
}

const dateSort = (e1, e2) => e1.startDate.isAfter(e2.startDate)

// NOTE(adam): the indent rule is a bit silly sometimes
/* eslint-disable indent */
const EventList = ({ list }) => (
  <div>
    {list
      .map(event => ({ ...event, startDate: moment(event.startDate) }))
      .sort(dateSort)
      .reduce((resultList, event, i, initalList) =>
        [...resultList,
          <Event
            description={event.description}
            key={`${event.startDate.format()}-${event.name}`}
            link={event.link}
            name={event.name}
            startDate={event.startDate}
          />,
        ].concat(i < initalList.length - 1 ? <Divider key={`div-${i}`} style={dividerStyle} /> : ''),
        []
      )
    }
  </div>
)
/* eslint-enable indent */

EventList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default EventList
