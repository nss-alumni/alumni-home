import Logo from './Logo'
import PropTypes from 'prop-types'
import React from 'react'
import injectSheet from 'react-jss'

const sheet = {
  logoContainer: {
    'display': 'flex',
    'justify-content': 'center',
  },
  logo: {
    'width': '8rem',
  },
}

const Header = ({ classes }) => (
  <div className={classes.logoContainer}>
    <div className={classes.logo}>
      <Logo />
    </div>
  </div>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(sheet)(Header)
