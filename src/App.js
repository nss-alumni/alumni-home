import React from 'react'
import Tile from 'components/Tile'
import Header from 'components/Header'
import injectSheet from 'react-jss'

const sheet = {
  app: {
    'text-align': 'left',
    'margin': '0 5% 0 5%',
  },

}

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header></Header>
    <Tile>
      <h1>NSS Alumni</h1>
    </Tile>
  </div>
)

export default injectSheet(sheet)(App)
