import { Newsletter as NewsletterRecord } from 'data/newsletters'
import { Typography } from 'material-ui'
import PropTypes from 'utils/propTypes'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import injectSheet from 'react-jss'
import moment from 'moment'

const styles = _theme => ({
  heading: {
    fontSize: '1.07rem',
    marginTop: '.5rem',
    marginBottom: '.3rem',
  },
})

const dateFormat = 'MMMM Do YYYY'

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
    <Typography variant="title">{newsletter.subject}</Typography>
    <Typography variant="caption">
      {moment(newsletter.sentDate).format(dateFormat)}
    </Typography>
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
