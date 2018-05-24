import { MuiThemeProvider } from 'material-ui/styles'
import { NavButton } from 'components/NavBar'
import { Provider as ReduxProvider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AboutPage from 'pages/About'
import ErrorSnackbar from 'containers/ErrorSnackbar'
import HomePage from 'pages/Home'
import React, { Fragment } from 'react'
import Reboot from 'material-ui/Reboot'
import SiteLayout from 'layouts/Site'
import injectSheet, { ThemeProvider } from 'react-jss'
import store from 'store'
import theme from './theme'

/* eslint-disable react/prop-types */

const styles = ({ palette }) => ({
  body: {
    backgroundColor: palette.background.default,
    height: '100vh',
  },
  activeButton: {
    color: palette.secondary.main,
  },
})

const nssUrl = 'http://nashvillesoftwareschool.com/'

const NavButtons = ({ location }) => (
  <Fragment>
    <NavButton location={location} to="/">
      home
    </NavButton>
    <NavButton location={location} to="/about">
      about
    </NavButton>
    <NavButton href={nssUrl} target="_blank">
      NSS home
    </NavButton>
  </Fragment>
)

const RoutedNavButtons = () => <Route component={NavButtons} />

const Site = ({ children, classes, ...props }) => (
  <SiteLayout className={classes.body} {...props}>
    {children}
    <ErrorSnackbar />
  </SiteLayout>
)

const StyledSite = injectSheet(styles)(Site)

const basename = process.env.NODE_ENV === 'development' ? '/' : '/alumni-home'

const App = () => (
  <Fragment>
    <Reboot />
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Router basename={basename}>
            <StyledSite navButtons={<RoutedNavButtons />}>
              <Switch>
                <Route component={AboutPage} path="/about" />
                <Route component={HomePage} path="/" />
              </Switch>
            </StyledSite>
          </Router>
        </MuiThemeProvider>
      </ThemeProvider>
    </ReduxProvider>
  </Fragment>
)

export default App
