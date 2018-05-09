import { connect } from 'react-redux'
import { getLatestNewsletter } from 'data/newsletters'
import LatestNewsletter from 'containers/LatestNewsletter'
import React from 'react'
import Tile from './Tile'
import moment from 'moment'

const mapStateToProps = state => {
  const newsletter = getLatestNewsletter(state)
  const newsletterDate = newsletter
    ? moment(newsletter.sentDate).format('MMMM YYYY')
    : undefined

  return {
    title: `Newsletter: ${newsletterDate}`,
    children: <LatestNewsletter />,
  }
}

export default connect(mapStateToProps)(Tile)
