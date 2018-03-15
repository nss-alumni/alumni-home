import { connect } from 'react-redux'
import { fetchEvents, getEvents } from 'data/events'
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
    if (!events.length) {
      return <Typography variant="title">No Events Found</Typography>
    }

    return <EventList events={events} />
  }
}

EventListWithFetch.propTypes = {
  events: PropTypes.array,
  fetchEvents: PropTypes.func.isRequired,
}

EventListWithFetch.defaultProps = {
  events: [],
}

const mapStateToProps = state => ({
  events: getEvents(state),
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => fetchEvents().then(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventListWithFetch)
