import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'

/* eslint-disable no-magic-numbers */
const useStyles = makeStyles(({ shadows, spacing }) => ({
  card: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacing.unit,
    boxShadow: 'initial',
    backgroundColor: 'initial',
  },
  picture: {
    width: spacing.unit * 20,
    height: spacing.unit * 20,
    boxShadow: shadows[1],
  },
  info: {
    textAlign: 'center',
  },
}))
/* eslint-enable no-magic-numbers */

const BoardMember = ({ className, picture, name, title, contact }) => {
  const classes = useStyles()

  return (
    <Card className={`${classes.card} ${className}`}>
      <CardMedia
        className={classes.picture}
        component={Avatar}
        image={picture}
      />
      <CardContent className={classes.info}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body1">{contact}</Typography>
      </CardContent>
    </Card>
  )
}

BoardMember.propTypes = {
  className: PropTypes.string,
  contact: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

BoardMember.defaultProps = {
  className: '',
}

export default BoardMember
