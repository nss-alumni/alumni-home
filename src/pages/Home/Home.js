import * as Events from 'resources/Events'
import * as Involvements from 'resources/Involvements'
import * as Newsletters from 'resources/Newsletters'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSimpleFetch } from 'hooks'
import EventList from 'components/EventList'
import InvolvementList from 'components/InvolvementList'
import Newsletter from 'components/Newsletter'
import React from 'react'
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

const HomePage = () => {
  const [involvements] = useSimpleFetch(Involvements.getAll, {
    errorMessage: 'Could not get involvements',
    defaultValue: {},
  })

  const [latestNewsletter] = useSimpleFetch(Newsletters.getLatest, {
    errorMessage: 'Could not get newsletters',
    defaultValue: {},
  })

  const [events] = useSimpleFetch(Events.getAll, {
    errorMessage: 'Could not get events',
  })

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
