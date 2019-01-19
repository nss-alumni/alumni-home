import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Logo from 'components/Logo'
import PropTypes from 'prop-types'
import React from 'react'

/* eslint-disable no-magic-numbers */
const useStyles = makeStyles(({ spacing, palette }) => ({
  appbar: {
    borderBottom: {
      width: spacing.unit,
      style: 'solid',
      color: palette.primary.main,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  buttonContainer: {
    display: 'flex',
  },
  logo: {
    width: spacing.unit * 6,
  },
}))
/* eslint-enable no-magic-numbers */

const NavBar = ({ children }) => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar} color="default">
      <Toolbar className={classes.toolbar}>
        <Logo className={classes.logo} />
        <span className={classes.buttonContainer}>{children}</span>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  children: PropTypes.node,
}

export default NavBar
