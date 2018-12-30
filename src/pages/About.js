import { aboutPageNavigated } from 'data/navigation'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import BoardListing from 'containers/BoardListingFromState'
import MissionStatement from 'components/MissionStatement'
import PropTypes from 'utils/propTypes'
import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography'

/* eslint-disable no-magic-numbers */
const styles = ({ palette, spacing }) => ({
  statement: {
    padding: spacing.unit * 2,
  },
  meetBar: {
    background: palette.primary.main,
    color: palette.getContrastText(palette.primary.main),
    textAlign: 'center',
    padding: spacing.unit,
  },
})
/* eslint-enable no-magic-numbers */

class AboutPage extends Component {
  componentDidMount() {
    this.props.dispatch(aboutPageNavigated())
  }

  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <MissionStatement className={classes.statement} />
        <Typography className={classes.meetBar} variant="h6">
          MEET THE BOARD
        </Typography>
        <BoardListing />
      </Fragment>
    )
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const AboutPageStyled = withStyles(styles)(AboutPage)
export default connect()(AboutPageStyled)
