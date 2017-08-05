import Paper from 'material-ui/Paper'
import React from 'react'
import { colors } from 'theme'
import injectSheet from 'react-jss'

const sheet = {
  tile: {
    'background': colors.neutral,
    'margin': '1rem',
    'padding': '.25rem',
  },
}

const Tile = ({ children, classes }) => (
  <Paper className={classes.tile}>
    {children}
  </Paper>
)

export default injectSheet(sheet)(Tile)
