import { Event as EventRecord, fetchEvents, getEvents } from 'data/events'
import { connect } from 'react-redux'
import EventList from 'components/EventList'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Typography from 'material-ui/Typography'

class EventListWithFetch extends React.Component {
  state = {
    isFetching: true,
  }

  componentWillMount() {
    this.props.fetchEvents().then(() => this.setState({ isFetching: false }))
  }

  render() {
    const { events } = this.props
    const { isFetching } = this.state

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
  fetchEvents: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  events: getEvents(state),
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => fetchEvents().then(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventListWithFetch)
