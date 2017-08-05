import React, { Component } from 'react'
import logo from './logo.svg'
import injectSheet from 'react-jss'

const styles = {
  app: {
    'text-align': 'center',
  },
  logo: {
    'animation': 'App-logo-spin infinite 20s linear',
    'height': '80px',
  },
  header: {
    'background-color': '#222',
    'height': '150px',
    'padding': '20px',
    'color': 'white',
  },
  intro: {
    'font-size': 'large',
  },
}

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.app}>
        <div className={classes.header}>
          <img src={logo} className={classes.logo} alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className={classes.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default injectSheet(styles)(App)
