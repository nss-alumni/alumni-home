import EventList from 'components/EventList'
import React from 'react'
import Tile from 'components/Tile'
import injectSheet from 'react-jss'
import events from 'eventList'

const sheet = {
  app: {
    'text-align': 'center',
  },
}

const App = ({ classes }) => (
  <div className={classes.app}>
    <Tile>
      <EventList list={events} />
    </Tile>
  </div>
)

export default injectSheet(sheet)(App)
