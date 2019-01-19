import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import AboutPage from 'pages/About'
import ErrorSnackbar from 'components/ErrorSnackbar'
import HomePage from 'pages/Home'
import NavBar, { NavButton } from 'components/NavBar'
import React from 'react'

/* eslint-disable no-magic-numbers */
const useStyles = makeStyles(({ palette, spacing }) => ({
  body: {
    backgroundColor: palette.background.default,
    height: '100vh',
  },
  activeButton: {
    color: palette.secondary.main,
  },
  content: {
    paddingTop: spacing.unit * 9,
  },
}))
/* eslint-enable no-magic-numbers */

const nssUrl = 'http://nashvillesoftwareschool.com/'

/* eslint-disable react/prop-types */

const Nav = ({ location }) => (
  <NavBar>
    <NavButton location={location} to="/">
      home
    </NavButton>
    <NavButton location={location} to="/about">
      about
    </NavButton>
    <NavButton href={nssUrl} target="_blank">
      NSS home
    </NavButton>
  </NavBar>
)

const basename = ['development', 'test'].includes(process.env.NODE_ENV)
  ? '/'
  : '/alumni-home'

const App = () => {
  const classes = useStyles()

  return (
    <ErrorSnackbar>
      <Router basename={basename}>
        <div className={classes.container}>
          <Route component={Nav} />
          <div className={classes.content}>
            <Switch>
              <Route component={AboutPage} path="/about" />
              <Route component={HomePage} path="/" />
            </Switch>
          </div>
        </div>
      </Router>
    </ErrorSnackbar>
  )
}

export default App
