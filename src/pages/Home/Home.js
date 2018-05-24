import { connect } from 'react-redux'
import { homePageNavigated } from 'data/navigation'
import EventsTile from './EventsTile'
import InvolvementTile from './InvolvementTile'
import NewsletterTile from './NewsletterTile'
import PropTypes from 'utils/propTypes'
import React, { Component } from 'react'
import injectSheet from 'react-jss'

/* eslint-disable no-magic-numbers */
const styles = ({ spacing }) => ({
  container: {
    display: 'flex',
  },
  group: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  sideGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  tile: {
    margin: spacing.unit * 2,
  },
  sideTile: {
    margin: spacing.unit * 2,
  },
})
/* eslint-enable no-magic-numbers */

class AboutPage extends Component {
  componentWillMount() {
    this.props.dispatch(homePageNavigated())
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <div className={classes.group}>
          <InvolvementTile className={classes.tile} />
        </div>
        <div className={classes.group}>
          <NewsletterTile className={classes.tile} />
        </div>
        <div className={classes.sideGroup}>
          <EventsTile className={classes.sideTile} />
        </div>
      </div>
    )
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const AboutPageStyled = injectSheet(styles)(AboutPage)
export default connect()(AboutPageStyled)
