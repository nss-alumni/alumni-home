import React from 'react'
import injectSheet from 'react-jss'
import logo from 'images/nss_alumni_logo.png'

const sheet = {
  logo: {
    'width': '8rem',
  },

  centerDiv: {
    'text-align': 'center',
  }
}
const Header = ({ classes }) => (
  <div className={ classes.centerDiv }>
    <img src={logo} className={ classes.logo } alt='nss_alumni_logo'/>
  </div>
)
export default injectSheet(sheet)(Header)
