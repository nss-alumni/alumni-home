import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Logo from 'components/Logo'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'

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

NavBar.defaultProps = {
  children: undefined,
}

export default withStyles(styles)(NavBar)
