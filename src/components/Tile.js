import { Paper, withStyles } from '@material-ui/core'
import PropTypes from 'utils/propTypes'
import React from 'react'
import Typography from '@material-ui/core/Typography'

/* eslint-disable no-magic-numbers */
const sheet = ({ palette, spacing: { unit } }) => ({
  tile: {
    background: palette.background.paper,
    flex: 1,
    margin: unit,
    padding: 1.75 * unit,
    height: '100%',
  },
})
/* eslint-enable no-magic-numbers */

const Tile = ({ children, classes, title }) => (
  <Paper className={classes.tile}>
    <Typography variant="h4">{title}</Typography>
    {children}
  </Paper>
)

Tile.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default withStyles(sheet)(Tile)
