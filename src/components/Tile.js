import Paper from 'material-ui/Paper'
import React from 'react'
import { colors } from 'theme'
import injectSheet from 'react-jss'

const sheet = {
  tile: {
    'background': colors.neutral,
    'flex': 1,
    'margin': '1rem',
    'padding': '1.75rem',
  },
  title: {
    'border-bottom': `3px solid ${colors.accent}`,
    'display': 'inline-block',
    'font-size': '1.75rem',
    'margin-bottom': '1rem',
    'padding-bottom': '.25rem',
    'padding-right': '2rem',
  },
}

const Tile = ({
  children,
  classes,
  title
}) => (
  <Paper className={classes.tile}>
    <span className={classes.title}>{title && title.toUpperCase()}</span>
    {children}
  </Paper>
)

export default injectSheet(sheet)(Tile)
