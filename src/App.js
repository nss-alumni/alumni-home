import { MuiThemeProvider } from 'material-ui/styles'
import { Provider as ReduxProvider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AboutPage from 'pages/About'
import React from 'react'
import Reboot from 'material-ui/Reboot'
import injectSheet, { ThemeProvider } from 'react-jss'
import store from 'store'
import theme from './theme'

const styles = ({ palette }) => ({
  body: {
    margin: 0,
    backgroundColor: palette.background.default,
    height: '100vh',
  },
})

// NOTE(adam): want to keep props in specific order for router
/* eslint-disable react/prop-types, react/jsx-sort-props */
const RoutedApp = ({ classes }) => (
  <div className={classes.body}>
    <Router basename="/alumni-home">
      <Route path="/" component={AboutPage} />
    </Router>
  </div>
)
/* eslint-enable react/jsx-sort-props */

const StyledApp = injectSheet(styles)(RoutedApp)

const App = () => (
  <div>
    <Reboot />
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <StyledApp />
        </ReduxProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  </div>
)

export default App
