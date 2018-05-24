import { Newsletter as NewsletterRecord } from 'data/newsletters'
import { Typography } from 'material-ui'
import PropTypes from 'utils/propTypes'
import React from 'react'
import moment from 'moment'

const dateFormat = 'MMMM Do YYYY'

const Newsletter = ({ className, newsletter }) => (
  <div className={className}>
    <Typography variant="title">{newsletter.subject}</Typography>
    <Typography variant="caption">
      {moment(newsletter.sentDate).format(dateFormat)}
    </Typography>
    <Typography>{newsletter.body}</Typography>
  </div>
)

Newsletter.propTypes = {
  className: PropTypes.string,
  newsletter: PropTypes.instanceOf(NewsletterRecord).isRequired,
}

Newsletter.defaultProps = {
  className: undefined,
}

export default Newsletter
