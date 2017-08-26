import PropTypes from 'prop-types'
import React from 'react'
import injectSheet from 'react-jss'
import logo from 'images/nss_alumni_logo.png'

const sheet = {
  logo: {
    'width': '8rem',
  },
  centerDiv: {
    'text-align': 'center',
  },
}

const Header = ({ classes }) => (
  <div className={classes.centerDiv}>
    <img alt='nss_alumni_logo' className={classes.logo} src={logo} />
  </div>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(sheet)(Header)
