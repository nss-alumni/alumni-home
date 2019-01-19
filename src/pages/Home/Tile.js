import { Card, CardContent, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(({ palette, spacing }) => ({
  title: {
    background: palette.primary.main,
    paddingLeft: spacing.unit * 2,
    paddingRight: spacing.unit * 2,
  },
  titleText: {
    color: palette.getContrastText(palette.primary.main),
  },
  card: {
    borderRadius: 2,
  },
  content: {
    paddingLeft: spacing.unit * 2,
    paddingRight: spacing.unit * 2,
  },
}))

const classOverrides = classes => ({
  title: {
    root: classes.title,
    title: classes.titleText,
  },
  card: {
    root: classes.card,
  },
  content: {
    root: classes.content,
  },
})

const Tile = ({ title, children, className }) => {
  const classes = useStyles()

  return (
    <Card className={className} classes={classOverrides(classes).card}>
      <CardHeader classes={classOverrides(classes).title} title={title} />
      <CardContent classes={classOverrides(classes).content}>
        {children}
      </CardContent>
    </Card>
  )
}

Tile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Tile.defaultProps = {
  className: '',
}

export default Tile
