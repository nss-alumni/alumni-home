import EventList from 'components/EventList'
import Header from 'components/Header'
import React from 'react'
import Tile from 'components/Tile'
import events from 'eventList'
import injectSheet from 'react-jss'

const sheet = {
  app: {
    'text-align': 'left',
    'margin': '0 2.5rem',
  },

}

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header />
    <Tile>
      <EventList list={events} />
    </Tile>
  </div>
)

export default injectSheet(sheet)(App)
