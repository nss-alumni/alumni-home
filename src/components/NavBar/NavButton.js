import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import PropTypes from 'utils/propTypes'
import React from 'react'
import injectSheet from 'react-jss'

const styles = _theme => ({
  buttonText: {
    textTransform: 'initial',
  },
})

const NavButton = ({ active, href, location, to, classes, ...props }) => (
  <Button
    classes={{ label: classes.buttonText }}
    color={location && location.pathname.includes(to) ? 'primary' : 'inherit'}
    component={href ? undefined : Link}
    href={href}
    location={location}
    to={to}
    {...props}
  />
)

// NOTE(adam): if href, we don't need location and to. This should be enforceable
NavButton.propTypes = {
  active: PropTypes.any,
  classes: PropTypes.object.isRequired,
  href: PropTypes.string,
  location: PropTypes.object,
  to: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
}

NavButton.defaultProps = {
  active: false,
  href: undefined,
  location: undefined,
  to: undefined,
}

export default injectSheet(styles)(NavButton)
