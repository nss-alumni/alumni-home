import { Card, CardContent, CardHeader, withStyles } from '@material-ui/core'
import PropTypes from 'utils/propTypes'
import React from 'react'

const styles = ({ palette, spacing }) => ({
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
})

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

const Tile = ({ title, children, className, classes }) => (
  <Card className={className} classes={classOverrides(classes).card}>
    <CardHeader classes={classOverrides(classes).title} title={title} />
    <CardContent classes={classOverrides(classes).content}>
      {children}
    </CardContent>
  </Card>
)

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

Tile.defaultProps = {
  className: undefined,
}

export default withStyles(styles)(Tile)
