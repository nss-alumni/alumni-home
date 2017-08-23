import React from 'react'
import injectSheet from 'react-jss'
import venmoLogo from 'images/venmo.png'

const sheet = {
  venmoLogo: {
    'width': '5rem',
  }
}

const Donate = ({ classes }) => (
  <div>
    <p>Our mission is to bring together past students of NSS through awesome events. However, we can't do that without your help! All donations go towards NSS Alumni events, food, drinks. Any amount is helpful!</p>
    <p>Visit our <a href={'https://venmo.com/NSS-Alumni'}><img src={venmoLogo} className={classes.venmoLogo} alt='venmo'/></a> page!</p>
  </div>
)
export default injectSheet(sheet)(Donate)
