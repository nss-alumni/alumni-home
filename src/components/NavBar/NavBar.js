import AppBar from 'material-ui/AppBar'
import Logo from 'components/Logo'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import injectSheet from 'react-jss'

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
})

const logoSizing = { maxHeight: '50px' }

const NavBar = ({ classes, children }) => (
  <AppBar className={classes.appbar} color="default">
    <Toolbar className={classes.toolbar}>
      <Logo style={logoSizing} />
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

export default injectSheet(styles)(NavBar)
