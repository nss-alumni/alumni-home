import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const useStyles = makeStyles({
  heading: {
    marginTop: '.5rem',
    marginBottom: '.3rem',
  },
})

/* eslint-disable react/display-name */
const nodeRenderers = classes => ({
  paragraph: p => <Typography {...p} />,
  heading: h => <Typography className={classes.heading} variant="h6" {...h} />,
})
/* eslint-enable react/display-name */

const Newsletter = ({ className, newsletter }) => {
  const classes = useStyles()

  return (
    <div className={className}>
      <ReactMarkdown
        renderers={nodeRenderers(classes)}
        source={newsletter.body}
      />
    </div>
  )
}

Newsletter.propTypes = {
  className: PropTypes.string,
  newsletter: PropTypes.shape({
    body: PropTypes.string,
  }).isRequired,
}

Newsletter.defaultProps = {
  className: '',
}

export default Newsletter
