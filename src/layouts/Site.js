import NavBar from 'components/NavBar'
import PropTypes from 'utils/propTypes'
import React from 'react'
import injectSheet from 'react-jss'

/* eslint-disable no-magic-numbers */
const styles = ({ spacing }) => ({
  content: {
    paddingTop: spacing.unit * 9,
  },
})
/* eslint-enable no-magic-numbers */

const Site = ({ classes, children, navButtons, ...props }) => (
  <div {...props}>
    <NavBar>{navButtons}</NavBar>
    <div className={classes.content}>{children}</div>
  </div>
)

Site.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  navButtons: PropTypes.node,
}

Site.defaultProps = {
  children: undefined,
  navButtons: undefined,
}

export default injectSheet(styles)(Site)
