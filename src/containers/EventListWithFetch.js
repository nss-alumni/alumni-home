import { Event as EventRecord, fetchEvents, getEvents } from 'data/events'
import { connect } from 'react-redux'
import { isInProgress } from 'data/requestStatus'
import EventList from 'components/EventList'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const EventListFromState = ({ isFetching, events }) => {
  if (isFetching) {
    return <Typography variant="h6">Fetching Events</Typography>
  }
  if (!events.size) {
    return <Typography variant="h6">No Events Found</Typography>
  }

  return <EventList events={events} />
}

EventListFromState.propTypes = {
  events: PropTypes.listOf(PropTypes.instanceOf(EventRecord)).isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  events: getEvents(state),
  isFetching: isInProgress(fetchEvents)(state),
})

const mapDispatchToProps = {
  init: fetchEvents.request,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventListFromState)
