import { Newsletter as NewsletterRecord } from 'data/newsletters'
import { Typography } from 'material-ui'
import PropTypes from 'utils/propTypes'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import injectSheet from 'react-jss'

const styles = _theme => ({
  heading: {
    marginTop: '.5rem',
    marginBottom: '.3rem',
  },
})

/* eslint-disable react/display-name */
const nodeRenderers = classes => ({
  paragraph: p => <Typography {...p} />,
  heading: h => (
    <Typography className={classes.heading} variant="title" {...h} />
  ),
})
/* eslint-enable react/display-name */

const Newsletter = ({ className, classes, newsletter }) => (
  <div className={className}>
    <ReactMarkdown
      renderers={nodeRenderers(classes)}
      source={newsletter.body}
    />
  </div>
)

Newsletter.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  newsletter: PropTypes.instanceOf(NewsletterRecord).isRequired,
}

Newsletter.defaultProps = {
  className: undefined,
}

export default injectSheet(styles)(Newsletter)
