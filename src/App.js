import EventList from 'components/EventList'
import Header from 'components/Header'
import React from 'react'
import Tile from 'components/Tile'
import Donate from 'components/Donate'
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

export default injectSheet(sheet)(App)
