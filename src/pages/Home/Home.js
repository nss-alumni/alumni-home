import { connect } from 'react-redux'
import { homePageNavigated } from 'data/navigation'
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
  tile: {
    margin: spacing.unit * 2,
    flex: 1,
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
        <InvolvementTile className={classes.tile} />
        <NewsletterTile className={classes.tile} />
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
