import { MuiThemeProvider, jssPreset } from '@material-ui/core/styles'
import { NavButton } from 'components/NavBar'
import { Provider as ReduxProvider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { create } from 'jss'
import { withStyles } from '@material-ui/core'
import AboutPage from 'pages/About'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorSnackbar from 'containers/ErrorSnackbar'
import HomePage from 'pages/Home'
import JssProvider from 'react-jss/lib/JssProvider'
import React, { Fragment } from 'react'
import SiteLayout from 'layouts/Site'
import jssExpand from 'jss-expand'
import store from 'store'
import theme from './theme'

const jss = create({ plugins: [...jssPreset().plugins, jssExpand()] })

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

const StyledSite = withStyles(styles)(Site)

const basename = ['development', 'test'].includes(process.env.NODE_ENV)
  ? '/'
  : '/alumni-home'

const App = () => (
  <Fragment>
    <CssBaseline />
    <ReduxProvider store={store}>
      <JssProvider jss={jss}>
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
      </JssProvider>
    </ReduxProvider>
  </Fragment>
)

export default App
