import React from 'react'
import injectSheet from 'react-jss'
import Logo from 'images/nss_alumni_logo.png'

const sheet = {
  logo: {
    'width': '10%',
  },
}
const Header = ({ classes }) => (
  <div>
    <img src={Logo} className={classes.logo} alt='nss_alumni_logo'/>
  </div>
)
export default injectSheet(sheet)(Header)
