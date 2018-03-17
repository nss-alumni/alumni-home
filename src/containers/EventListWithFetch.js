import { Event as EventRecord, fetchEvents, getEvents } from 'data/events'
import { connect } from 'react-redux'
import { isFetchingEvents } from 'data/isFetchingEvents'
import EventList from 'components/EventList'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Typography from 'material-ui/Typography'

class EventListWithFetch extends React.Component {
  componentWillMount() {
    this.props.init()
  }

  render() {
    const { isFetching, events } = this.props

    if (isFetching) {
      return <Typography variant="title">Fetching Events</Typography>
    }
    if (!events.size) {
      return <Typography variant="title">No Events Found</Typography>
    }

    return <EventList events={events} />
  }
}

EventListWithFetch.propTypes = {
  events: PropTypes.listOf(PropTypes.instanceOf(EventRecord)).isRequired,
  init: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  events: getEvents(state),
  isFetching: isFetchingEvents(state),
})

const mapDispatchToProps = {
  init: fetchEvents,
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListWithFetch)
