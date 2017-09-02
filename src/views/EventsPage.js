import Donate from 'components/Donate'
import EventList from 'components/EventList'
import Header from 'components/Header'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Tile from 'components/Tile'
import { colors } from 'theme'
import injectSheet from 'react-jss'

const sheet = {
  app: {
    'color': colors.text,
    'margin': '0 2.5rem',
    'text-align': 'left',
  },
  tileContainer: {
    'display': 'flex',
  },
}

const request = new Request('https://nss-alumni.herokuapp.com/api/events')

class EventPage extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
    }
  }

  componentWillMount = () => fetch(request)
    .then(response => response.json())
    .then(events => this.setState((state) => ({ events })))

  render = () => {
    const { classes } = this.props

    return (
      <div className={classes.app}>
        <Header />
        <div className={classes.tileContainer}>
          <Tile title='Upcoming Events'>
            <EventList list={this.state.events} />
          </Tile>
          <Tile title='Donations'>
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
