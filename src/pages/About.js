import * as Alumni from 'resources/Alumni'
import { ErrorSnackbarContext } from 'components/ErrorSnackbar'
import { makeStyles } from '@material-ui/styles'
import BoardListing from 'components/BoardListing'
import MissionStatement from 'components/MissionStatement'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(({ palette, spacing }) => ({
  statement: {
    padding: spacing.unit * 2,
  },
  meetBar: {
    background: palette.primary.main,
    color: palette.getContrastText(palette.primary.main),
    textAlign: 'center',
    padding: spacing.unit,
  },
}))

const AboutPage = () => {
  const { addMessage } = useContext(ErrorSnackbarContext)
  const [boardMembers, setBoardMembers] = useState({})
  useEffect(() => {
    Alumni.getBoardMembers()
      .then(setBoardMembers)
      .catch(() => addMessage('Could not get board members'))
  }, [])

  const classes = useStyles()

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

export default AboutPage
