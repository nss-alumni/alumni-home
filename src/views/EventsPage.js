import Donate from 'components/Donate'
import EventList from 'containers/EventListWithFetch'
import Header from 'components/Header'
import PropTypes from 'prop-types'
import React from 'react'
import Tile from 'components/Tile'
import injectSheet from 'react-jss'

const sheet = ({ spacing: { unit } }) => ({
  app: {
    margin: `0 ${2.5 * unit}`, // eslint-disable-line no-magic-numbers
    textAlign: 'left',
  },
  tileContainer: {
    display: 'flex',
  },
})

const EventPage = ({ classes }) => (
  <div className={classes.app}>
    <Header />
    <div className={classes.tileContainer}>
      <Tile title="Upcoming Events">
        <EventList />
      </Tile>
      <Tile title="Donations">
        <Donate />
      </Tile>
    </div>
  </div>
)

EventPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(sheet)(EventPage)
