import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import PropTypes from 'utils/propTypes'
import React from 'react'

const styles = ({ palette }) => ({
  titleBg: {
    background: palette.primary.main,
  },
  titleText: {
    color: palette.getContrastText(palette.primary.main),
  },
})

const classOverrides = classes => ({
  title: {
    root: classes.titleBg,
    title: classes.titleText,
  },
})

const Tile = ({ title, children, className, classes }) => (
  <Card className={className}>
    <CardHeader classes={classOverrides(classes).title} title={title} />
    <CardContent>{children}</CardContent>
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
