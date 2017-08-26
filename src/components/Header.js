import React from 'react'
import injectSheet from 'react-jss'
import logo from 'images/nss-alumni-logo.svg'

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
export default injectSheet(sheet)(Header)
