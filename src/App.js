import { MuiThemeProvider } from 'material-ui/styles'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import EventsPage from 'views/EventsPage'
import React from 'react'
import injectSheet, { ThemeProvider } from 'react-jss'
import theme from './theme'

const styles = ({ palette }) => ({
  body: {
    margin: 0,
    backgroundColor: palette.background.default,
    height: '100vh',
  },
})

// NOTE(adam): want to keep props in specific order for router
/* eslint-disable react/jsx-sort-props */
const RoutedApp = ({ classes }) => (
  <div className={classes.body}>
    <Router basename="/alumni-home">
      <Route path="/" component={EventsPage} />
    </Router>
  </div>
)
/* eslint-enable react/jsx-sort-props */

const StyledApp = injectSheet(styles)(RoutedApp)

const App = () => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <StyledApp />
    </MuiThemeProvider>
  </ThemeProvider>
)

export default App
