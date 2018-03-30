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

const NavButton = ({ active, location, to, classes, ...props }) => (
  <Button
    classes={{ label: classes.buttonText }}
    color={location && location.pathname.includes(to) ? 'primary' : 'inherit'}
    component={Link}
    location={location}
    to={to}
    {...props}
  />
)

NavButton.propTypes = {
  active: PropTypes.any,
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  to: PropTypes.oneOf([PropTypes.string, PropTypes.object]).isRequired,
}

NavButton.defaultProps = {
  active: false,
}

export default injectSheet(styles)(NavButton)
