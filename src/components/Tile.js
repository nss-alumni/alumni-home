import { colors } from 'theme'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import injectSheet from 'react-jss'

const sheet = {
  tile: {
    background: colors.neutral,
    flex: 1,
    margin: '1rem',
    padding: '1.75rem',
    height: '100%',
  },
  title: {
    borderBottom: `3px solid ${colors.accent}`,
    display: 'inline-block',
    'font-size': '1.75rem',
    marginBottom: '1rem',
    paddingBottom: '.25rem',
    paddingRight: '2rem',
  },
}

const Tile = ({ children, classes, title }) => (
  <Paper className={classes.tile}>
    <span className={classes.title}>{title && title.toUpperCase()}</span>
    {children}
  </Paper>
)

Tile.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default injectSheet(sheet)(Tile)
