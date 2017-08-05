import Events from 'components/Events'
import React from 'react'
import Tile from 'components/Tile'
import injectSheet from 'react-jss'

const sheet = {
  app: {
    'text-align': 'center',
  },
}

const App = ({ classes }) => (
  <div className={classes.app}>
    <Tile>
      <h1>NSS Alumni</h1>
    </Tile>
  </div>
)

export default injectSheet(sheet)(App)
