import { connect } from 'react-redux'
import { homePageNavigated } from 'data/navigation'
import NewsletterTile from './NewsletterTile'
import PropTypes from 'utils/propTypes'
import React, { Component, Fragment } from 'react'
import injectSheet from 'react-jss'

/* eslint-disable no-magic-numbers */
const styles = ({ spacing }) => ({
  tile: {
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
      <Fragment>
        <NewsletterTile className={classes.tile} />
      </Fragment>
    )
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const AboutPageStyled = injectSheet(styles)(AboutPage)
export default connect()(AboutPageStyled)
