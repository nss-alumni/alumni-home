import { colors } from 'theme'
import Donate from 'components/Donate'
import EventList from 'components/EventList'
import Header from 'components/Header'
import PropTypes from 'prop-types'
import React from 'react'
import Tile from 'components/Tile'
import injectSheet from 'react-jss'

const sheet = {
  app: {
    color: colors.text,
    margin: '0 2.5rem',
    textAlign: 'left',
  },
  tileContainer: {
    display: 'flex',
  },
}

const request = new Request('https://nss-alumni.herokuapp.com/api/events')

class EventPage extends React.PureComponent {
  state = {
    events: [],
    fetchStatus: '',
  }

  componentWillMount = () => {
    this.setState(() => ({ fetchStatus: 'Fetching events' }))
    fetch(request)
      .then(response => response.json())
      .then(events =>
        this.setState(() => ({
          events,
          fetchStatus: events.length ? '' : 'No events found',
        })),
      )
      .catch(error => (console.error(error), error)) // eslint-disable-line no-console, no-sequences
      .catch(() =>
        this.setState(() => ({ fetchStatus: 'Could not get events' })),
      )
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.app}>
        <Header />
        <div className={classes.tileContainer}>
          <Tile title="Upcoming Events">
            <EventList
              list={this.state.events}
              status={this.state.fetchStatus}
            />
          </Tile>
          <Tile title="Donations">
            <Donate />
          </Tile>
        </div>
      </div>
    )
  }
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(sheet)(EventPage)
