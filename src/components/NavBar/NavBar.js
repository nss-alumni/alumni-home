import { AppBar, Toolbar, withStyles } from '@material-ui/core'
import Logo from 'components/Logo'
import PropTypes from 'prop-types'
import React from 'react'

/* eslint-disable no-magic-numbers */
const styles = ({ spacing, palette }) => ({
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
})
/* eslint-enable no-magic-numbers */

const NavBar = ({ classes, children }) => (
  <AppBar className={classes.appbar} color="default">
    <Toolbar className={classes.toolbar}>
      <Logo className={classes.logo} />
      <span className={classes.buttonContainer}>{children}</span>
    </Toolbar>
  </AppBar>
)

NavBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar)
