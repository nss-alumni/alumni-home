import Donate from 'components/Donate'
import EventList from 'containers/EventListWithFetch'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Tile from 'components/Tile'
import injectSheet from 'react-jss'

/* eslint-disable no-magic-numbers */
const sheet = ({ spacing: { unit } }) => ({
  content: {
    padding: `0 ${2.5 * unit}px`,
    display: 'flex',
  },
})
/* eslint-enable no-magic-numbers */

const EventPage = ({ classes }) => (
  <div className={classes.content}>
    <Tile title="Upcoming Events">
      <EventList />
    </Tile>
    <Tile title="Donations">
      <Donate />
    </Tile>
  </div>
)

EventPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(sheet)(EventPage)
