import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  withStyles,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'

/* eslint-disable no-magic-numbers */
const styles = ({ shadows, spacing }) => ({
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
})
/* eslint-enable no-magic-numbers */

const BoardMember = ({ className, classes, picture, name, title, contact }) => (
  <Card className={`${classes.card} ${className}`}>
    <CardMedia className={classes.picture} component={Avatar} image={picture} />
    <CardContent className={classes.info}>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body1">{contact}</Typography>
    </CardContent>
  </Card>
)

BoardMember.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  contact: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

BoardMember.defaultProps = {
  className: '',
}

export default withStyles(styles)(BoardMember)
