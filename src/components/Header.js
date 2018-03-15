import Logo from './Logo'
import PropTypes from 'utils/propTypes'
import React from 'react'
import injectSheet from 'react-jss'

/* eslint-disable no-magic-numbers */
const sheet = ({ spacing: { unit } }) => ({
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: 12 * unit,
  },
})
/* eslint-enable no-magic-numbers */

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
