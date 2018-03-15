import PropTypes from 'utils/propTypes'
import React from 'react'
import Typography from 'material-ui/Typography'
import injectSheet from 'react-jss'
import venmoLogo from 'images/venmo.png'

const sheet = ({ spacing: { unit } }) => ({
  venmoLogo: {
    width: 5 * unit, // eslint-disable-line no-magic-numbers
  },
})

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
    <Typography>
      Our mission is to bring together past students of NSS through awesome
      events. However, we can't do that without your help! All donations go
      towards NSS Alumni events, food, drinks. Any amount is helpful!
    </Typography>
    <Typography>
      Visit our <VenmoLinkStyled /> page!
    </Typography>
  </div>
)
/* eslint-enable react/no-unescaped-entities */

export default Donate
