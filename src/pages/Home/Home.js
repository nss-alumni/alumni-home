import * as Events from 'resources/Events'
import * as Involvements from 'resources/Involvements'
import * as Newsletters from 'resources/Newsletters'
import { ErrorSnackbarContext } from 'components/ErrorSnackbar'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import EventList from 'components/EventList'
import InvolvementList from 'components/InvolvementList'
import Newsletter from 'components/Newsletter'
import React, { useContext, useEffect, useState } from 'react'
import Tile from './Tile'
import moment from 'moment'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    display: 'flex',
  },
  group: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  sideGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  tile: {
    margin: spacing.unit * 2,
  },
  sideTile: {
    margin: spacing.unit * 2,
  },
}))

/* eslint-disable react/prop-types */
const EventListWithStatus = ({ events }) => {
  if (!events) {
    return <Typography variant="h6">Fetching Events</Typography>
  }
  if (!events.length) {
    return <Typography variant="h6">No Events Found</Typography>
  }

  return <EventList events={events} />
}
/* eslint-enable react/prop-types */

const newsletterDate = newsletter =>
  newsletter ? moment(newsletter.sentDate).format('MMMM YYYY') : ''

const byDescendingSentDate = (n1, n2) => n2.sentDate.localeCompare(n1.sentDate)

const HomePage = () => {
  const { addMessage } = useContext(ErrorSnackbarContext)

  const [involvements, setInvolvements] = useState({})
  useEffect(() => {
    Involvements.getAll()
      .then(({ data }) => data)
      .then(setInvolvements)
      .catch(() => addMessage('Could not get involvements'))
  }, [])

  const [latestNewsletter, setLatestNewsletter] = useState({})
  useEffect(() => {
    Newsletters.getAll()
      .then(({ data }) => data)
      .then(Object.values)
      .then(newsletters => newsletters.sort(byDescendingSentDate))
      .then(newsletters => newsletters[0])
      .then(setLatestNewsletter)
      .catch(() => addMessage('Could not get newsletters'))
  }, [])

  const [events, setEvents] = useState(null)
  useEffect(() => {
    Events.getAll()
      .then(({ data }) => data)
      .then(setEvents)
      .catch(() => addMessage('Could not get events'))
  }, [])

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.group}>
        <Tile className={classes.tile} title="Get Involved">
          <InvolvementList involvements={involvements} />
        </Tile>
      </div>
      <div className={classes.group}>
        <Tile
          className={classes.tile}
          title={`Newsletter: ${newsletterDate(latestNewsletter)}`}
        >
          {latestNewsletter && <Newsletter newsletter={latestNewsletter} />}
        </Tile>
      </div>
      <div className={classes.sideGroup}>
        <Tile className={classes.sideTile} title="Upcoming Events">
          <EventListWithStatus events={events} />
        </Tile>
      </div>
    </div>
  )
}

export default HomePage
