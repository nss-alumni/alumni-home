import React from 'react'
import injectSheet from 'react-jss'

const sheet = {
  app: {
    'text-align': 'center',
  },
}

const App = ({ classes }) => (
  <div className={classes.app}>
    <h1>NSS Alumni</h1>
  </div>
)

export default injectSheet(sheet)(App)
