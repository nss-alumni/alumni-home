import * as Alumni from 'resources/Alumni'
import { ErrorSnackbarContext } from 'components/ErrorSnackbar'
import { withStyles } from '@material-ui/core'
import BoardListing from 'components/BoardListing'
import MissionStatement from 'components/MissionStatement'
import PropTypes from 'prop-types'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'

const entriesIntoObject = (obj, [key, value]) => ({ ...obj, [key]: value })

const getBoardMembers = () =>
  Alumni.getAll()
    .then(({ data }) => data)
    .then(Object.entries)
    .then(alumni => alumni.filter(([_id, a]) => a.isBoardMember))
    .then(boardMembers => boardMembers.reduce(entriesIntoObject, {}))

const styles = ({ palette, spacing }) => ({
  statement: {
    padding: spacing.unit * 2,
  },
  meetBar: {
    background: palette.primary.main,
    color: palette.getContrastText(palette.primary.main),
    textAlign: 'center',
    padding: spacing.unit,
  },
})

const AboutPage = ({ classes }) => {
  const { addMessage } = useContext(ErrorSnackbarContext)
  const [boardMembers, setBoardMembers] = useState({})
  useEffect(() => {
    getBoardMembers()
      .then(setBoardMembers)
      .catch(() => addMessage('Could not get board members'))
  }, [])

  return (
    <Fragment>
      <MissionStatement className={classes.statement} />
      <Typography className={classes.meetBar} variant="h6">
        MEET THE BOARD
      </Typography>
      <BoardListing boardMembers={boardMembers} />
    </Fragment>
  )
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutPage)
