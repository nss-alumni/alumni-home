import { connect } from 'react-redux'
import { getLatestNewsletter } from 'data/newsletters'
import Newsletter from 'components/Newsletter'
import React from 'react'

const mapStateToProps = state => ({
  newsletter: getLatestNewsletter(state),
})

export default connect(mapStateToProps)(props =>
  props.newsletter ? <Newsletter {...props} /> : null,
)
