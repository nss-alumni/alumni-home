import PropTypes from 'prop-types'
import React from 'react'
import injectSheet from 'react-jss'
import venmoLogo from 'images/venmo.png'

const sheet = {
  venmoLogo: {
    width: '5rem',
  },
}

const VenmoLink = ({ classes }) => (
  <a href={'https://venmo.com/NSS-Alumni'}>
    <img alt="venmo" className={classes.venmoLogo} src={venmoLogo} />
  </a>
)

VenmoLink.propTypes = {
  classes: PropTypes.object.isRequired,
}

const VenmoLinkStyled = injectSheet(sheet)(VenmoLink)

/* eslint-disable react/no-unescaped-entities */
const Donate = () => (
  <div>
    <p>
      Our mission is to bring together past students of NSS through awesome
      events. However, we can't do that without your help! All donations go
      towards NSS Alumni events, food, drinks. Any amount is helpful!
    </p>
    <p>
      Visit our <VenmoLinkStyled /> page!
    </p>
  </div>
)
/* eslint-enable react/no-unescaped-entities */

export default Donate
