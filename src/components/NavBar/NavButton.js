import { Button, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

const styles = _theme => ({
  buttonText: {
    textTransform: 'initial',
  },
})

const NavButton = ({ active, href, location, to, classes, ...props }) => (
  <Button
    classes={{ label: classes.buttonText }}
    color={location && location.pathname === to ? 'primary' : 'inherit'}
    component={href ? undefined : Link}
    href={href}
    location={location}
    to={to}
    {...props}
  />
)

const destinationValidation = props => {
  const providedProps = Object.keys(props)
  const hasHref = providedProps.includes('href')
  const hasLocationTo =
    providedProps.includes('location') || providedProps.includes('to')

  if (hasHref && hasLocationTo) {
    return new Error(
      "NavButton should not have 'href' with 'location' and 'to'",
    )
  }

  if (!hasHref && !hasLocationTo) {
    return new Error("NavButton needs 'href' or 'location' and 'to'")
  }
}

// NOTE(adam): if href, we don't need location and to. This should be enforceable
NavButton.propTypes = {
  active: PropTypes.any,
  classes: PropTypes.object.isRequired,
  destinationValidation,
  href: PropTypes.string,
  location: PropTypes.object,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

NavButton.defaultProps = {
  active: false,
}

export default withStyles(styles)(NavButton)
