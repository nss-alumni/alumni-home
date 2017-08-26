import Donate from 'components/Donate'
import EventList from 'components/EventList'
import Header from 'components/Header'
import PropTypes from 'prop-types'
import React from 'react'
import Tile from 'components/Tile'
import { colors } from 'theme'
import events from 'eventList'
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

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header />
    <div className={classes.tileContainer}>
      <Tile title='Upcoming Events'>
        <EventList list={events} />
      </Tile>
      <Tile title='Donations'>
        <Donate />
      </Tile>
    </div>
  </div>
)

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(sheet)(App)
