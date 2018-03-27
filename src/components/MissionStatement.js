import PropTypes from 'utils/propTypes'
import React from 'react'
import Typography from 'material-ui/Typography'
import injectSheet from 'react-jss'

const styles = ({ palette }) => ({
  statement: {
    color: palette.primary.main,
    textAlign: 'center',
  },
})

const MissionStatement = ({ className, classes }) => (
  <Typography
    className={`${classes.statement} ${className}`}
    variant="headline"
  >
    Our mission: To support NSS alumni post graduation through mentorship
    opportunities, continued education, and sense of community.
  </Typography>
)

MissionStatement.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

MissionStatement.defaultProps = {
  className: '',
}

export default injectSheet(styles)(MissionStatement)
